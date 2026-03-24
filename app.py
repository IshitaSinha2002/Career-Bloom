from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load model and files
model = pickle.load(open("career_model.pkl", "rb"))
le = pickle.load(open("label_encoder.pkl", "rb"))
model_columns = pickle.load(open("model_columns.pkl", "rb"))

# Home route
@app.route("/")
def home():
    return "Career Predictor API is running"

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Convert input to DataFrame
    input_df = pd.DataFrame([data])

    # One-hot encode input
    input_df = pd.get_dummies(input_df)

    # Align with training columns
    input_df = input_df.reindex(columns=model_columns, fill_value=0)

    # Predict
    prediction = model.predict(input_df)[0]

    # Convert back to label
    output = le.inverse_transform([prediction])[0]

    return jsonify({"prediction": output})

if __name__ == "__main__":
    app.run(debug=True)