from planner import Planner
from memory import Memory
from actions import Action
from config import client, MODEL_NAME

class TravelAgent():
    def __init__(self):
        self.planner = Planner()

        self.memory = Memory()

        self.action = Action()

    def plan_trip(self,city,days,budget):
        print("\nOberving user Request...")

        prompt = self.planner.create_prompt(

            city,
            days,
            budget

        )

        print("Thinking...")

        response = client.chat.completions.create(
            model = MODEL_NAME,
            messages = [
                {
                    "role":"user",
                    "content":prompt
                }
            ]
        )
        result = response.choices[0].message.content

        self.memory.save_trip(city)

        self.action.save_file(result)

        return result
    