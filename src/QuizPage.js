// src/QuizPage.js
import React, { useState } from 'react';

const QUESTIONS = [
  // 25 questions générées automatiquement pour l'exemple
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    text: `Question ${i + 1} - mise en situation immersive ${i + 1}.`,
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  }))
];

const INITIAL_HOUSES = {
  gryffindor: 0,
  slytherin: 0,
  hufflepuff: 0,
  ravenclaw: 0,
};

export default function QuizPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(INITIAL_HOUSES);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (choice) => {
    const updatedScores = { ...scores };
    Object.entries(choice.points).forEach(([house, value]) => {
      updatedScores[house] += value;
    });

    if (questionIndex + 1 < QUESTIONS.length) {
      setQuestionIndex(questionIndex + 1);
      setScores(updatedScores);
    } else {
      setScores(updatedScores);
      setFinished(true);

      fetch('/api/send-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scores: updatedScores, email: 'vboutin.quebec@gmail.com' })
      });
    }
  };

  if (finished) {
    return (
      <main style={{ padding: '2rem', fontFamily: 'serif' }}>
        <h2>Merci d'avoir complété le quiz !</h2>
        <p>Vos réponses ont été envoyées. ✉️</p>
      </main>
    );
  }

  const current = QUESTIONS[questionIndex];

  return (
    <main style={{ padding: '2rem', fontFamily: 'serif' }}>
      <h2>Question {questionIndex + 1} / {QUESTIONS.length}</h2>
      <p style={{ marginBottom: '1rem' }}> {current.text} </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {current.choices.map((choice, idx) => (
          <li key={idx} style={{ margin: '0.5rem 0' }}>
            <button onClick={() => handleAnswer(choice)} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
              {choice.text}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
