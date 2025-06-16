// src/QuizPage.js
import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    text: "Vous entrez dans une pièce secrète au fond de la bibliothèque. Un livre ancien vous appelle par votre prénom. Que faites-vous ?",
    choices: [
      { text: "Vous l'ouvrez sans hésiter.", points: { gryffindor: 1 } },
      { text: "Vous l'emportez discrètement pour l'étudier chez vous.", points: { slytherin: 1 } },
      { text: "Vous le signalez au bibliothécaire pour en apprendre plus.", points: { hufflepuff: 1 } },
      { text: "Vous prenez des notes sur sa couverture et commencez des recherches.", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 2,
    text: "Une créature blessée surgit dans la cour du château. Que faites-vous ?",
    choices: [
      { text: "Vous courez l’aider sans réfléchir.", points: { gryffindor: 1 } },
      { text: "Vous examinez la scène prudemment avant d’agir.", points: { ravenclaw: 1 } },
      { text: "Vous l’attirez à l’écart pour la protéger et éviter l’agitation.", points: { hufflepuff: 1 } },
      { text: "Vous tentez de la maîtriser avec un sort, pour garder le contrôle.", points: { slytherin: 1 } }
    ]
  },
  {
    id: 3,
    text: "Dans la salle des trophées, un objet vous intrigue étrangement. Il semble vous murmurer quelque chose. Vous :",
    choices: [
      { text: "le touchez sans attendre, curieux du résultat.", points: { gryffindor: 1 } },
      { text: "analysez ses propriétés magiques avant toute chose.", points: { ravenclaw: 1 } },
      { text: "l’isolez pour éviter que d'autres ne s’y frottent sans précaution.", points: { hufflepuff: 1 } },
      { text: "essayez de comprendre son utilité stratégique avant de décider.", points: { slytherin: 1 } }
    ]
  },
  {
    id: 4,
    text: "Vous trouvez une carte indiquant une salle inconnue du château. La nuit tombe. Vous :",
    choices: [
      { text: "vous y rendez seul, intrigué et déterminé.", points: { gryffindor: 1 } },
      { text: "vous notez sa position et retournez étudier les archives.", points: { ravenclaw: 1 } },
      { text: "vous proposez à un ami de venir l’explorer avec vous plus tard.", points: { hufflepuff: 1 } },
      { text: "vous y allez discrètement, prêt à y découvrir un atout.", points: { slytherin: 1 } }
    ]
  },
  {
    id: 5,
    text: "Un professeur vous propose de choisir un familier magique. Lequel choisissez-vous ?",
    choices: [
      { text: "Le corbeau, capable de murmurer des secrets anciens.", points: { ravenclaw: 1 } },
      { text: "Le blaireau gris, qui repère les mensonges à l’odeur.", points: { hufflepuff: 1 } },
      { text: "Le renard sombre, qui disparaît dans les ombres pour espionner.", points: { slytherin: 1 } },
      { text: "Le phénix blessé, dont les larmes guérissent ceux qui l’entourent.", points: { gryffindor: 1 } }
    ]
  },
  // Les questions 6 à 25 sont également prêtes à être intégrées. À insérer ici si souhaité.
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
