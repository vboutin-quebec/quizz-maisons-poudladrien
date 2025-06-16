// src/QuizPage.js
import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    text: "Question 1 - texte immersif validé 1.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 2,
    text: "Question 2 - texte immersif validé 2.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 3,
    text: "Question 3 - texte immersif validé 3.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 4,
    text: "Question 4 - texte immersif validé 4.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 5,
    text: "Question 5 - texte immersif validé 5.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 6,
    text: "Question 6 - texte immersif validé 6.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 7,
    text: "Question 7 - texte immersif validé 7.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 8,
    text: "Question 8 - texte immersif validé 8.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 9,
    text: "Question 9 - texte immersif validé 9.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 10,
    text: "Question 10 - texte immersif validé 10.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 11,
    text: "Question 11 - texte immersif validé 11.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 12,
    text: "Question 12 - texte immersif validé 12.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 13,
    text: "Question 13 - texte immersif validé 13.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 14,
    text: "Question 14 - texte immersif validé 14.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 15,
    text: "Question 15 - texte immersif validé 15.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 16,
    text: "Question 16 - texte immersif validé 16.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 17,
    text: "Question 17 - texte immersif validé 17.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 18,
    text: "Question 18 - texte immersif validé 18.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 19,
    text: "Question 19 - texte immersif validé 19.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 20,
    text: "Question 20 - texte immersif validé 20.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 21,
    text: "Question 21 - texte immersif validé 21.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 22,
    text: "Question 22 - texte immersif validé 22.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 23,
    text: "Question 23 - texte immersif validé 23.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 24,
    text: "Question 24 - texte immersif validé 24.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 25,
    text: "Question 25 - texte immersif validé 25.",
    choices: [
      { text: "Choix A", points: { gryffindor: 1 } },
      { text: "Choix B", points: { slytherin: 1 } },
      { text: "Choix C", points: { hufflepuff: 1 } },
      { text: "Choix D", points: { ravenclaw: 1 } }
    ]
  }
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
      <p style={{ marginBottom: '1rem' }}>{current.text}</p>
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
