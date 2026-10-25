class Planner:

    def create_prompt(self, city, days, budget):

        prompt = f"""
You are an expert AI Travel Planner.

Destination: {city}

Number of Days: {days}

Budget: {budget}

Generate:

1. Day-wise itinerary
2. Tourist places
3. Food recommendations
4. Estimated Budget
5. Travel Tips

Return the response in a neat format.
"""

        return prompt