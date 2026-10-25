class Memory:

    def __init__(self):

        self.history = []

    def save_trip(self,city):

        self.history.append(city)

    def show_history(self):
        
        return self.history