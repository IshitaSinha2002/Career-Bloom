<h1>Career Bloom – Career Path Recommender</h1>

<h3>Project Overview</h3>
<p>
Career Bloom is a full-stack machine learning application designed to help users discover suitable career paths based on their skills, interests, and preferences. 
The system collects user inputs such as technical skills, interests, and background, processes them through a trained ML model, and provides personalized career recommendations along with insights and role suggestions.
</p>

<h4>Dataset: [https://www.kaggle.com/datasets/your-dataset-link](http://kaggle.com/datasets/ministerjohn/career-path-prediction-for-different-fields)</h4>

<h3>Tech Stack</h3>
<ul>
  <li>Front-end: ReactJS, CSS</li>
  <li>Back-end: Python, Flask</li>
  <li>Machine Learning: Classification Models (Random Forest, Logistic Regression), Label Encoding, Feature Scaling</li>
</ul>

<h3>Home Page</h3>
<img src="https://github.com/IshitaSinha2002/Career-Bloom/blob/main/Screenshot%20(22).png" style="width: 500px; height: 400px; object-fit: cover;">

<h3>Questionnaire Page</h3>
<p>
Designed an interactive and user-friendly home page where users can input their skills, interests, and preferences through a structured UI instead of a plain form.</p>
<img src="https://github.com/IshitaSinha2002/Career-Bloom/blob/main/Screenshot%20(24).png" style="width: 500px; height: 400px; object-fit: cover;">
<img src="https://github.com/IshitaSinha2002/Career-Bloom/blob/main/Screenshot%20(25).png" style="width: 500px; height: 400px; object-fit: cover;">
<img src="https://github.com/IshitaSinha2002/Career-Bloom/blob/main/Screenshot%20(26).png" style="width: 500px; height: 400px; object-fit: cover;">
<img src="https://github.com/IshitaSinha2002/Career-Bloom/blob/main/Screenshot%20(27).png" style="width: 500px; height: 400px; object-fit: cover;">

<h3>Results Page</h3>
<p>
Developed a results page that displays predicted career paths along with:
<ul>
  <li><b>Primary Career Recommendation</b></li>
  <li><b>Suggested Roles</b></li>
  <li><b>Explanation/Insights</b> based on user inputs</li>
</ul>
The UI is designed to highlight key results clearly and make recommendations stand out.
</p>
<img src="https://github.com/IshitaSinha2002/Career-Bloom/blob/main/Screenshot%20(29).png" style="width: 500px; height: 400px; object-fit: cover;">

<h3>Model Training Implementation Details</h3>
<ol>
  <li><b>Data Processing:</b>
    <ul>
      <li>Handled missing and inconsistent data.</li>
      <li>Converted categorical inputs into numerical format using Label Encoding.</li>
      <li>Normalized numerical features using StandardScaler.</li>
    </ul>
  </li>

  <li><b>Feature Selection:</b>
    <ul>
      <li>Identified key features such as skills, interests, and experience level.</li>
      <li>Removed redundant or low-impact features to improve model performance.</li>
    </ul>
  </li>

  <li><b>Model Development:</b>
    <p>Algorithms Used:</p>
    <ul>
      <li>Logistic Regression</li>
      <li>Random Forest Classifier</li>
    </ul>
  </li>

  <li><b>Training Process:</b>
    <ul>
      <li>Split dataset into training and testing sets (80/20 split).</li>
      <li>Ensured proper shuffling to avoid bias.</li>
      <li>Trained models to learn relationships between user inputs and career categories.</li>
    </ul>
  </li>

  <li><b>Model Training:</b>
    <ul>
      <li>Used Scikit-learn for model implementation.</li>
      <li>Fit models on training data.</li>
      <li>Generated predictions on test data.</li>
    </ul>
  </li>

  <li><b>Model Evaluation Metrics:</b>
    <ul>
      <li>Accuracy: Measures overall correctness</li>
      <li>Precision: Measures correctness of positive predictions</li>
      <li>Recall: Measures ability to find all relevant cases</li>
      <li>F1-score: Harmonic mean of precision and recall</li>
    </ul>
  </li>

  <li><b>Model Comparison:</b>
    <table>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Accuracy</th>
          <th>F1 Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Logistic Regression</td>
          <td>0.XX</td>
          <td>0.XX</td>
        </tr>
        <tr>
          <td>Random Forest Classifier</td>
          <td>0.XX</td>
          <td>0.XX</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>Selected the best-performing model based on accuracy and F1-score.</li>
    </ul>
  </li>
</ol>

<h3>Backend Implementation</h3>
<ol>
  <li><b>Framework and Setup:</b>
    <ul>
      <li>Developed RESTful APIs using Flask.</li>
      <li>Structured backend for modularity (model loading, preprocessing, API routes).</li>
      <li>Enabled CORS for frontend-backend communication.</li>
    </ul>
  </li>

  <li><b>Model Integration:</b>
    <ul>
      <li>Loaded trained classification model for predictions.</li>
      <li>Applied preprocessing (encoding + scaling) before inference.</li>
      <li>Maintained consistency between training and real-time prediction pipeline.</li>
    </ul>
  </li>

  <li><b>Prediction Logic:</b>
    <ul>
      <li>Processed user input from frontend.</li>
      <li>Converted input into model-compatible format.</li>
      <li>Generated predicted career category.</li>
      <li>Mapped prediction to meaningful career roles and suggestions.</li>
    </ul>
  </li>
</ol>
