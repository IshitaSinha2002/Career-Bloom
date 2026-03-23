export const sections = [
  {
    id: 1,
    title: "Interests",
    questions: [
      {
        id: "q1",
        text: "What are you most interested in?",
        type: "radio",
        options: [
          "Programming / Technology",
          "Business / Finance",
          "Art / Design",
          "Science / Research"
        ]
      },
      {
        id: "q2",
        text: "Which activity do you enjoy the most?",
        type: "dropdown",
        options: [
          "Solving logical problems",
          "Leading or managing people",
          "Creating designs/content",
          "Experimenting / analyzing"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Skills / Strengths",
    questions: [
      {
        id: "q3",
        text: "What is your strongest skill?",
        type: "dropdown", 
        options: [
          "Analytical thinking",
          "Communication",
          "Creativity",
          "Technical skills"
        ]
      },
      {
        id: "q4",
        text: "How would you rate your problem-solving ability?",
        type: "radio",
        options: [
          "Low",
          "Medium",
          "High"
        ]
      },
      {
        id: "q5",
        text: "How comfortable are you with numbers/data?",
        type: "radio",
        options: [
          "Not comfortable",
          "Somewhat comfortable",
          "Very comfortable"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Personality Traits",
    questions: [
      {
        id: "q6",
        text: "Do you prefer working:",
        type: "radio",
        options: [
          "Alone",
          "In a team"
        ]
      },
      {
        id: "q7",
        text: "Are you more:",
        type: "radio",
        options: [
          "Structured",
          "Flexible"
        ]
      },
      {
        id: "q8",
        text: "How do you make decisions?",
        type: "radio",
        options: [
          "Logical",
          "Emotional / intuitive"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Work Preferences",
    questions: [
      {
        id: "q9",
        text: "What type of work environment do you prefer?",
        type: "dropdown",
        options: [
          "Stable and predictable",
          "Fast-paced and dynamic"
        ]
      },
      {
        id: "q10",
        text: "How much risk are you comfortable with?",
        type: "radio",
        options: [
          "Low",
          "Medium",
          "High"
        ]
      },
      {
        id: "q11",
        text: "What motivates you more?",
        type: "radio",
        options: [
          "Money / growth",
          "Creativity / passion",
          "Knowledge / discovery"
        ]
      }
    ]
  }
];