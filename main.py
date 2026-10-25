from colorama import Fore, init

from agent import  TravelAgent

init(autoreset=True)

print(Fore.CYAN + " = " * 50)

print(Fore.GREEN + "    AI Travel Planner Agent")

print(Fore.CYAN + " = " * 50)

city = input("Enter Destination: ")

days = input("Enter Number of Days: ")

budget = input("Enter Budget: ")

agent = TravelAgent()

print(Fore.YELLOW + "\nGenerating Travel Plan....\n")

plan = agent.plan_trip(
    city,
    days,
    budget
)

print(Fore.GREEN + "\n=====  YOUR ITINERARY  =====\n")

print(plan)


