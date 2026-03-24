from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for frontend

# 🔹 Load model
model = pickle.load(open("career_model.pkl", "rb"))

# 🔹 Load label encoder (optional)
try:
    le = pickle.load(open("label_encoder.pkl", "rb"))
    print("✅ Label Encoder loaded")
except:
    le = None
    print("⚠️ Label Encoder NOT found")

# 🔹 Load model columns (VERY IMPORTANT)
try:
    model_columns = pickle.load(open("model_columns.pkl", "rb"))
    print("✅ Model columns loaded")
except:
    model_columns = None
    print("⚠️ Model columns NOT found")


# 🔹 Home route
@app.route("/")
def home():
    return "🚀 Career Predictor API is running"


# 🔥 Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        # 📥 Get input
        data = request.json
        print("\n📥 Incoming data:", data)

        # Convert to DataFrame
        input_df = pd.DataFrame([data])

        # One-hot encode input
        input_df = pd.get_dummies(input_df)
        print("🔹 Before reindex:", input_df.columns.tolist())

        # 🔥 Align columns with training data
        if model_columns is not None:
            input_df = input_df.reindex(columns=model_columns, fill_value=0)
            print("✅ After reindex:", input_df.columns.tolist())
        else:
            print("⚠️ Skipping column alignment")

        # 🔮 Predict
        prediction = model.predict(input_df)[0]
        print("🎯 Raw prediction:", prediction)

        # 🔁 Convert numeric → label
        if le is not None:
            output = le.inverse_transform([prediction])[0]
        else:
            # fallback mapping
            mapping = {
                0: "Creative",
                1: "Management",
                2: "Research",
                3: "Tech"
            }
            output = mapping.get(prediction, "Unknown")

        print("✅ Final output:", output)

        return jsonify({"prediction": output})

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({"error": str(e)})


# 🔹 Run server
if __name__ == "__main__":
    app.run(debug=True)