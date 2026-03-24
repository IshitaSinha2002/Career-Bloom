import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers;

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🧠 Explanation text
  const explanations = {
    Tech: "You have strong analytical and technical skills suited for technology roles.",
    Management: "You show leadership and decision-making abilities.",
    Creative: "You are imaginative and expressive, ideal for creative fields.",
    Research: "You enjoy deep thinking and analysis."
  };

  // 🚨 Prevent crash on refresh
  if (!answers) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>No data found</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  // 🔥 Convert answers → model format
  const formatData = (answers) => {
    return {
      Field: answers.q1 || "Business",
      GPA: 3,

      Extracurricular_Activities: answers.q2 || "Yes",
      Internships: 1,
      Projects: 1,

      Leadership_Positions: answers.q3 || "No",
      Field_Specific_Courses: answers.q4 || "Medium",
      Research_Experience: answers.q5 || "No",

      Coding_Skills: answers.q6 || "Medium",
      Communication_Skills: answers.q7 || "Medium",
      Problem_Solving_Skills: answers.q8 || "Medium",
      Teamwork_Skills: answers.q9 || "Medium",
      Analytical_Skills: answers.q10 || "Medium",
      Presentation_Skills: answers.q11 || "Medium",

      Networking_Skills: "Medium",
      Industry_Certifications: "No"
    };
  };

  // 🚀 Call backend
  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const formattedData = formatData(answers);

        const res = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formattedData)
        });

        const data = await res.json();
        console.log("API Response:", data);

        if (data.prediction) {
          setPrediction(data.prediction);
        } else {
          console.error("No prediction received");
        }

      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '2rem',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Your Career Prediction
      </h1>

      {/* Loading */}
      {loading && (
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          🔄 Analyzing your responses...
        </p>
      )}

      {/* Result */}
      {!loading && prediction && (
  <div
    style={{
      marginTop: "2.5rem",
      textAlign: "center",
      maxWidth: "700px"
    }}
  >
    {/* Prediction */}
    <h2
      style={{
        fontSize: "2.8rem",
        fontWeight: "800",
        marginBottom: "1rem",
        background: "linear-gradient(135deg, #6366f1, #ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      🎯 {prediction}
    </h2>

    {/* Explanation */}
    <p
      style={{
        fontSize: "1.2rem",
        color: "#444",
        marginBottom: "2rem",
        fontWeight: "500"
      }}
    >
      {explanations[prediction]}
    </p>

    {/* Suggested Roles */}
    <div style={{ marginBottom: "2.5rem" }}>
      <h3
        style={{
          fontSize: "1.4rem",
          fontWeight: "700",
          marginBottom: "1.2rem",
          color: "#222"
        }}
      >
        Suggested Roles
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center"
        }}
      >
        {(prediction === "Tech"
          ? ["💻 Software Engineer", "📊 Data Scientist", "⚙️ Backend Developer"]
          : prediction === "Management"
          ? ["📈 Business Analyst", "🧠 Product Manager", "👥 HR Manager"]
          : prediction === "Creative"
          ? ["🎨 Designer", "✍️ Content Creator", "📝 Writer"]
          : ["🔬 Research Analyst", "🧪 Scientist", "📚 Academic Researcher"]
        ).map((role, index) => (
          <div
            key={index}
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: "999px",
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
              fontSize: "1rem",
              fontWeight: "500"
            }}
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      {/* Fallback if prediction fails */}
      {!loading && !prediction && (
        <p style={{ color: "red" }}>
          ❌ Could not get prediction. Check backend.
        </p>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.8rem 1.5rem',
          borderRadius: '999px',
          border: 'none',
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <ArrowLeft size={18} /> Back to Home
      </button>
    </div>
  );
}