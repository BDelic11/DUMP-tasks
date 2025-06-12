CREATE TABLE Cities (
	CityId SERIAL PRIMARY KEY,
	Name VARCHAR(30),
	Coordinates POINT,
	PostalCode INT
)

ALTER TABLE Cities
ADD COLUMN Name VARCHAR(50)

ALTER TABLE Cities
DROP COLUMN Coordinates,
ADD COLUMN Longitude FLOAT,
ADD COLUMN Latitude FLOAT


ALTER TABLE Airports
ADD COLUMN CityId INT REFERENCES Cities(CityId)

SELECT * FROM Cities

ADD CONSTRAINT PostalCodeRestrictions CHECK(PostalCode > 0)

CREATE TABLE Airports (
	AirportId SERIAL PRIMARY KEY,
	Name VARCHAR(30),
	StorageCapacity INT,
	RunwayCapacity INT
)

ALTER TABLE Airports
ADD COLUMN Name VARCHAR(100)

ALTER TABLE Airports
ADD CONSTRAINT MaxRunwayCapConstraint CHECK(RunwayCapacity > 0 AND RunwayCapacity < 1000)

ALTER TABLE Airports
ADD CONSTRAINT MaxStorCapConstraint CHECK(StorageCapacity > 0 AND StorageCapacity < 1000)

CREATE TABLE Airplanes (
	AirplaneId SERIAL PRIMARY KEY,
	Name VARCHAR(30),
	StorageCapacity INT,
	PlaneStatus PlaneStatus NOT NULL,
	PlaneCurrentLocation PlaneLocation NOT NULL
)

ALTER TABLE Airplanes 
ADD COLUMN AirportId INT REFERENCES Airports(AirportId)

CREATE TYPE PlaneStatus AS ENUM ('Active', 'Under Repair', 'Dismantled', 'On-Sale')

CREATE TYPE PlaneLocation AS ENUM ('Runway', 'Hangar', 'Dismantled', 'In-Air')


CREATE TABLE Flights (
	FlightId SERIAL PRIMARY KEY,
	DepartureAirportId INT REFERENCES Airports(AirportId),
	ArrivalAirportId INT REFERENCES Airports(AirportId),
	DepartureTime TIMESTAMP WITH TIME ZONE,
	ArrivalTime TIMESTAMP WITH TIME ZONE
)

ALTER TABLE Flights
DROP COLUMN Name

CREATE TABLE CrewMembers (
	CrewMemberId SERIAL PRIMARY KEY,
	Name VARCHAR(30),
	LastName VARCHAR(30),
	IsPilot BOOLEAN DEFAULT False
)

CREATE TABLE CrewMemberFlight (
	CrewMemberId INT REFERENCES CrewMembers(CrewMemberId),
	FlightId INT REFERENCES Flights(FlightId),
	PRIMARY KEY(FlightId,CrewMemberId)
)

CREATE TABLE AirportFlights (
	AirportId INT REFERENCES Airports(AirportId),
	FlightId INT REFERENCES Flights(FlightId),
	PRIMARY KEY(FlightId,AirportId)
)

CREATE TABLE Tickets (
	TicketId SERIAL PRIMARY KEY,
	FlightId INT REFERENCES Flights(FlightId),
	UserId INT REFERENCES Users(UserId),
	Price INT NOT NULL,
	PurchasedAt TIMESTAMP,
	SeatType SeatType NOT NULL,
	SeatNumber INT
)

CREATE TABLE Users (
	UserId SERIAL PRIMARY KEY,
	Name VARCHAR(30),
	LastName VARCHAR(30),
	NumberOfTicketsBought INT DEFAULT 0
)


CREATE TYPE SeatType AS ENUM ('Business', 'Economy');


CREATE TABLE LoyaltyCards (
	LoyaltyCardId SERIAL PRIMARY KEY,
	UserId INT REFERENCES Users(UserId),
	IssuedAt TIMESTAMP,
	ExpiresAt TIMESTAMP
)

--Ispis imena i modela svih aviona s kapacitetom većim od 100
SELECT (storagecapacity) FROM airplanes
WHERE Storagecapacity >100

--Ispis svih karata čija je cijena između 100 i 200 eura
SELECT * FROM tickets
WHERE Price > 100 AND Price < 200

-- ispis svih domaćina/ca zrakoplova koji su letili u 2025 godini
SELECT * FROM crewmembers cm
JOIN Crewmemberflight cmf ON cm.Crewmemberid = cmf.Crewmemberid
JOIN Flights f ON cmf.flightid = f.flightid
WHERE EXTRACT(YEAR FROM f.departuretime) > 2024

--ispis broja letova u melikkrajan/iz melikkrajana 2025. godine
SELECT COUNT(*) FROM Flights fl
JOIN AirportFlights af ON fl.flightid = af.flightid
JOIN Airports ap ON af.airportid = ap.airportid
JOIN Cities ci ON ap.cityid = ci.cityid
WHERE LOWER(ci.Name) LIKE '%melikkrajan%' AND
EXTRACT(YEAR FROM fl.departuretime) = 2025

--ispis svih letova u lipnju 2025.
SELECT * FROM Flights fl
WHERE EXTRACT(YEAR FROM arrivaltime) = 2025
AND EXTRACT(MONTH FROM arrivaltime) = 6

--ispis broj prodanih Economy letova u lipnju 2025.
SELECT * FROM Flights fl
JOIN Tickets ti ON fl.flightid = ti.flightid
WHERE EXTRACT(YEAR FROM arrivaltime) = 2025
AND EXTRACT(MONTH FROM arrivaltime) = 6
AND ti.SeatType = 'Economy'

--ispis prosječne cijene letova "Bussiness klase" u 2025
SELECT (AVG(Price)) FROM Flights fl
JOIN Tickets ti ON fl.flightid = ti.flightid
WHERE EXTRACT(YEAR FROM arrivaltime) = 2025
AND ti.SeatType = 'Business'

CREATE OR REPLACE FUNCTION haversine_distance_km(
    lat1 FLOAT, lon1 FLOAT,
    lat2 FLOAT, lon2 FLOAT
)
RETURNS FLOAT AS $$
BEGIN
  RETURN 6371 * acos(
    cos(radians(lat1)) * cos(radians(lat2)) *
    cos(radians(lon2) - radians(lon1)) +
    sin(radians(lat1)) * sin(radians(lat2))
  );
END;
$$ LANGUAGE plpgsql IMMUTABLE;


--ispis svih aerodroma u Aurora, sortiranih po broju aviona trenutno na njihovim pistama
SELECT * FROM AIRPORTS ai
JOIN Cities ci ON ai.cityid = ci.cityid
WHERE ci.Name = 'Aurora'

--ispis svih aerodroma udaljenih od Aurora manje od 1500km
SELECT ai.Name, ci.Name as CityName, haversine_distance_km(au.latitude, au.longitude, ci.latitude, ci.longitude) AS distanceInKm
FROM Airports ai
JOIN Cities ci ON ai.cityid = ci.cityid
JOIN Cities au ON au.Name = 'Aurora'
WHERE haversine_distance_km(au.latitude, au.longitude, ci.latitude, ci.longitude) < 2500

CREATE OR REPLACE FUNCTION haversine_distance_km(
    lat1 DOUBLE PRECISION, lon1 DOUBLE PRECISION,
    lat2 DOUBLE PRECISION, lon2 DOUBLE PRECISION
)
RETURNS DOUBLE PRECISION AS $$
BEGIN
  RETURN 6371 * acos(
    LEAST(1.0, GREATEST(-1.0,
      cos(radians(lat1)) * cos(radians(lat2)) *
      cos(radians(lon2) - radians(lon1)) +
      sin(radians(lat1)) * sin(radians(lat2))
    ))
  );
END;
$$ LANGUAGE plpgsql IMMUTABLE;


--smanjite cijenu za 20% svim kartama čiji letovi imaju manje od 200 capacity ljudi
--SELECT * FROM Flights fl
UPDATE Tickets ti
SET Price = Price * 0.8
FROM Flights fl, Airplanes ai
WHERE ti.flightid = fl.flightid
AND ai.airplaneid = fl.airplaneid
AND ai.storagecapacity < 200

--razmontirajte avione ciji je kapacitet veci od 200 koji nemaju letove pred sobom
UPDATE Airplanes ai
SET PlaneStatus = 'Dismantled'
WHERE ai.storagecapacity > 200
AND NOT EXISTS (
	SELECT 1
	FROM Flights fl 
	WHERE fl.Airplaneid = ai.airplaneid    
	AND fl.DepartureTime > NOW()
)

--CHECK
SELECT (PlaneStatus) FROM Airplanes ai
JOIN Flights fl ON fl.airplaneid = ai.airplaneid
WHERE ai.storagecapacity > 200
AND NOT EXISTS (
	SELECT 1
	FROM Flights fl 
	WHERE fl.Airplaneid = ai.airplaneid    
	AND fl.DepartureTime > NOW()
)

--izbrišite sve kartice vjernosti putnika čije prezime završava na -es
DELETE FROM Loyaltycards lc
USING Users u
WHERE lc.userid = u.userid
AND u.lastname ILIKE '%es'


--CHECK
SELECT * FROM Loyaltycards lc
JOIN Users u ON lc.userid = u.userid
WHERE u.lastname LIKE '%es'


SELECT * FROM Users

SELECT * FROM Tickets

ALTER TABLE Flights
ADD COLUMN Airplaneid INT REFERENCES Airplanes(Airplaneid) 
 
SELECT * FROM Airplanes


SELECT Flightid FROM Flights
SELECT * FROM Airportflights

SELECT * FROM Airports
WHERE AirportId = 313

SELECT (Name) FROM Cities
WHERE Cityid = 313

SELECT (Name) FROM Cities

UPDATE Flights
SET AirplaneId = FLOOR(1 + RANDOM() * 100);

