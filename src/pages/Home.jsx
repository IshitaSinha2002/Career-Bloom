import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: '#ffffff',
      }}
    >
      {/* Icon */}
      <div
        style={{
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '50%',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 25px rgba(99,102,241,0.25)',
        }}
      >
        <Sparkles size={42} />
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Career Bloom
      </h1>

      <h2
        style={{
          fontWeight: '500',
          marginBottom: '1.5rem',
          color: '#444',
        }}
      >
        Discover Your Ideal Future
      </h2>

      {/* Description */}
      <p
        style={{
          maxWidth: '700px',
          lineHeight: '1.7',
          color: '#666',
          marginBottom: '2rem',
        }}
      >
        Welcome to Career Bloom: the Career Path Predictor! This tool helps you
        find the perfect career match by analyzing your interests, skills,
        personality traits, and work preferences.
      </p>

      {/* Instructions */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>
          Instructions:
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            lineHeight: '2',
            color: '#555',
          }}
        >
          <li>✨ Answer 4 short sections about yourself</li>
          <li>🎯 Be honest and choose what fits you best</li>
          <li>🚀 Get your personalized career recommendation</li>
        </ul>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate('/questions')}
        style={{
          padding: '0.9rem 2rem',
          fontSize: '1rem',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 8px 20px rgba(99,102,241,0.25)',
          transition: '0.3s',
        }}
      >
        Start Questionnaire <ArrowRight size={20} />
      </button>
    </div>
  );
}