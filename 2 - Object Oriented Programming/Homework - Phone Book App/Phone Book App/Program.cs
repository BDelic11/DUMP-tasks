using System.Collections.Generic;
using System.Globalization;

namespace Phone_Book_App
{
    internal class Program
    {
        static void Main(string[] args)
        {

            var newContact = Contact.CreateContact();
            var PhoneBook = new Dictionary<string, List<string> >();
        }
        class Contact
        {
            public string firstName { 

                get => firstName; 

                set {
                    var validName = string.IsNullOrEmpty(value) ? "There is no first name." : value;
                    firstName = validName;
                } 
            }
            public string lastName
            {
                get => lastName;
                
                set
                {
                    var validLastName= string.IsNullOrEmpty(value) ? "There is no last name." : value;
                    lastName = validLastName;
                }
            }
            public int phoneNumber
            {
                get =>  phoneNumber;              
                set 
                {
                    var validPhoneNumber = value;
                    phoneNumber = validPhoneNumber;
                }
            }

            public Contact(string first, string last, int Number) 
            {
                firstName = first;
                lastName = last;
                phoneNumber = Number;
            }

            public Contact CreateContact ()
            {
                // UNOS IMENA
                Console.WriteLine("q\nEnter the name of your new Contact:\n");
                var firstName = Console.ReadLine();

                // UNOS PREZIMENA
                Console.WriteLine("q\nEnter the name of your new Contact:\n");
                var lastName = Console.ReadLine();

                // UNOS PREZIMENA
                Console.WriteLine("q\nEnter the name of your new Contact:\n");
                var phoneNum = 0;
                phoneNum = int.Parse(Console.ReadLine());


                var newContact = new Contact(firstName, lastName, phoneNumber);

                return newContact;
            }
        }
    }
}