
class Action:

    def save_file(self, result):
        """
        Vercel uses a read-only filesystem, so we don't
        write the itinerary to a local file.

        The generated itinerary is returned to the Flask
        frontend instead.
        """

        print("\n✅ Itinerary generated successfully.")

        return result
