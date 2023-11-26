using dotNet.entities;

namespace dotNet
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var instantietedCar = new Car();

            

            instantietedCar.Refuel();
            instantietedCar.Drive();

        }
    }
}