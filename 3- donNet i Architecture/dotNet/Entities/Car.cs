using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotNet.entities
{
    public class Car
    {
        private int remainingGas;

        public void Drive()
        {
            if ( remainingGas > 0)
            {
                Console.WriteLine($"Woo i am driving! Gas left: {remainingGas}");
                remainingGas--;
            }
            else Console.WriteLine("No gas");

        }

        public void Refuel() 
        {
            remainingGas += 10;
        }
    }
}
