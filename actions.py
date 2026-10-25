import os

class Action:

    def save_file(self,result):

        os.makedirs("data",exist_ok=True)

        with open(
            "data/itinerary.txt",
            "w",
            encoding="utf8"
        ) as file:

            file.write(result)

        print("\nItinerary Saved Successfully.")