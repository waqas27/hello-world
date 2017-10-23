using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task1
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Pick a Capital letter between A to E: ");
            string choice = Console.ReadLine();

            switch (choice)
            {
                case "A":
                    Console.WriteLine("1");
                    break;
                case "B":
                    Console.WriteLine("2");
                    break;
                case "C":
                    Console.WriteLine("3");
                    break;
                case "D":
                    Console.WriteLine("4");
                    break;
                case "E":
                    Console.WriteLine("5");
                    break;
                default:
                    Console.WriteLine("Not a valid letter, please try again");
                    break;


            }
            
                 
            }
        }
    }

