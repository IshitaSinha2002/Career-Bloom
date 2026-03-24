import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Safely get answers
  const answers = location.state?.answers;

  // ✅ Prevent crash if user refreshes or directly opens /results
  if (!answers) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#ffffff',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>No Data Found</h2>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Please complete the questionnaire first.
        </p>

        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Go Home
        </button>
      </div>
    );
  }

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
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Your Results
      </h1>

      {/* Description */}
      <p
        style={{
          maxWidth: '600px',
          textAlign: 'center',
          color: '#555',
          marginBottom: '2rem',
        }}
      >
        Based on your answers, here’s what we found about your ideal career path.
      </p>

      {/* TEMP: Show Answers */}
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          background: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
        }}
      >
        <h3 style={{ marginBottom: '1rem' }}>Your Responses:</h3>

        <pre
          style={{
            background: '#ffffff',
            padding: '1rem',
            borderRadius: '8px',
            overflowX: 'auto',
            fontSize: '0.9rem',
          }}
        >
          {JSON.stringify(answers, null, 2)}
        </pre>
      </div>

      {/* Placeholder Result */}
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '2rem',
        }}
      >
        🎯 Predicted Career: <span style={{ color: '#6366f1' }}>Coming Soon...</span>
      </div>

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
          gap: '5px',
        }}
      >
        <ArrowLeft size={18} /> Back to Home
      </button>
    </div>
  );
}