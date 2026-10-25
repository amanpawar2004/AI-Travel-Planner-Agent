from flask import Flask, render_template, request, jsonify
from agent import TravelAgent

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "message": "AI Travel Planner API is running"
    })


@app.route("/plan", methods=["POST"])
def plan():

    try:
        data = request.get_json()

        city = data.get("city")
        days = data.get("days")
        budget = data.get("budget")

        if not city:
            return jsonify({
                "error": "Destination is required."
            }), 400

        if not days:
            return jsonify({
                "error": "Number of days is required."
            }), 400

        if not budget:
            return jsonify({
                "error": "Budget is required."
            }), 400

        print("------------------------------")
        print("AI Travel Planner")
        print("------------------------------")
        print(f"Destination: {city}")
        print(f"Days: {days}")
        print(f"Budget: ₹{budget}")

        # Create agent only when request comes in
        agent = TravelAgent()

        itinerary = agent.plan_trip(
            city,
            days,
            budget
        )

        return jsonify({
            "success": True,
            "itinerary": itinerary
        })

    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )