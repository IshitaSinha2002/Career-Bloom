import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sections } from '../data/questions';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function Questions() {
  const navigate = useNavigate();

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const section = sections?.[currentSectionIndex];

  const progress =
    sections && sections.length > 0
      ? ((currentSectionIndex + 1) / sections.length) * 100
      : 0;

  if (!section) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const isSectionComplete = () => {
    return section.questions.every((q) => answers[q.id]);
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      window.scrollTo(0, 0);
      setCurrentSectionIndex((prev) => prev + 1);
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  const handlePrev = () => {
    if (currentSectionIndex > 0) {
      window.scrollTo(0, 0);
      setCurrentSectionIndex((prev) => prev - 1);
    }
  };

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
      {/* Progress Bar */}
      <div style={{ width: '100%', maxWidth: '900px', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span
            style={{
              fontWeight: '600',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Section {currentSectionIndex + 1} of {sections?.length || 0}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div
          style={{
            width: '100%',
            height: '8px',
            background: '#e5e7eb',
            borderRadius: '999px',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(135deg, #6366f1, #06b6d4, #ec4899)',
              borderRadius: '999px',
              transition: '0.4s',
            }}
          />
        </div>
      </div>

      {/* Section Title */}
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
        }}
      >
        {section.title}
      </h2>

      {/* Questions */}
      <div style={{ width: '100%', maxWidth: '900px' }}>
        {section.questions.map((q) => (
          <div key={q.id} style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              {q.text}
            </h3>

            {q.type === 'radio' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {q.options.map((option) => (
                  <label
                    key={option}
                    style={{
                      padding: '1rem',
                      borderRadius: '10px',
                      border: `2px solid ${
                        answers[q.id] === option ? '#6366f1' : '#e5e7eb'
                      }`,
                      background:
                        answers[q.id] === option
                          ? 'rgba(99, 102, 241, 0.08)'
                          : '#ffffff',
                      cursor: 'pointer',
                      transition: '0.2s',
                    }}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={(e) =>
                        handleAnswer(q.id, e.target.value)
                      }
                      style={{
                        marginRight: '10px',
                        accentColor: '#6366f1',
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <select
                value={answers[q.id] || ''}
                onChange={(e) =>
                  handleAnswer(q.id, e.target.value)
                }
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '2px solid #e5e7eb',
                }}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {q.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '900px',
          marginTop: '2rem',
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            visibility: currentSectionIndex === 0 ? 'hidden' : 'visible',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
            color: '#6366f1',
          }}
        >
          <ChevronLeft size={20} /> Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isSectionComplete()}
          style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            color: 'white',
            cursor: isSectionComplete() ? 'pointer' : 'not-allowed',
            opacity: isSectionComplete() ? 1 : 0.6,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: isSectionComplete()
              ? '0 8px 20px rgba(99,102,241,0.25)'
              : 'none',
          }}
        >
          {currentSectionIndex === sections.length - 1 ? (
            <>
              Get Results <CheckCircle2 size={20} />
            </>
          ) : (
            <>
              Next <ChevronRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}