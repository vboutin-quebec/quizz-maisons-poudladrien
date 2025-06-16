// src/QuizPage.js
import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    text: "Alors que vous traversez un couloir désert du château, un élève vous interpelle, essoufflé. Un sort interdit semble avoir été lancé dans une salle à proximité. Vous sentez encore la magie vibrer dans l'air.",
    choices: [
      { text: "Vous entrez immédiatement pour identifier le sort et désamorcer la situation.", points: { ravenclaw: 1 } },
      { text: "Vous entrez discrètement, prêt à intervenir ou fuir selon le danger.", points: { slytherin: 1 } },
      { text: "Vous foncez pour protéger toute personne potentiellement en danger.", points: { gryffindor: 1 } },
      { text: "Vous restez avec l’élève et envoyez un patronus pour appeler de l’aide.", points: { hufflepuff: 1 } }
    ]
  },
  {
    id: 2,
    text: "Vous êtes en excursion dans la Forêt interdite avec Hagrid. Un bruit sourd vous pousse à vous écarter du groupe. Une créature blessée gît au sol, menaçante.",
    choices: [
      { text: "Vous tentez de la calmer et d'évaluer ses blessures.", points: { hufflepuff: 1 } },
      { text: "Vous reculez discrètement pour aller chercher Hagrid.", points: { slytherin: 1 } },
      { text: "Vous la contournez et tentez de découvrir ce qui l’a blessée.", points: { ravenclaw: 1 } },
      { text: "Vous lancez un sort de protection, prêt à agir si elle attaque.", points: { gryffindor: 1 } }
    ]
  },
  {
    id: 3,
    text: "Vous surprenez des élèves complotant autour d’un objet magique interdit. En vous voyant, ils s’enfuient, laissant l’objet derrière eux.",
    choices: [
      { text: "Vous étudiez l’objet pour comprendre sa nature.", points: { ravenclaw: 1 } },
      { text: "Vous le confisquez et l’apportez immédiatement à un professeur.", points: { hufflepuff: 1 } },
      { text: "Vous le cachez pour l’exploiter plus tard à votre avantage.", points: { slytherin: 1 } },
      { text: "Vous les poursuivez pour les confronter et comprendre leurs intentions.", points: { gryffindor: 1 } }
    ]
  },
  {
    id: 4,
    text: "Lors d’un match de Quidditch, un Cognard s’échappe et fonce vers les spectateurs. Vous êtes le plus proche.",
    choices: [
      { text: "Vous plongez pour l’intercepter, quitte à être blessé.", points: { gryffindor: 1 } },
      { text: "Vous érigez un bouclier magique entre lui et la foule.", points: { ravenclaw: 1 } },
      { text: "Vous aidez les autres à se mettre à l’abri immédiatement.", points: { hufflepuff: 1 } },
      { text: "Vous détournez le Cognard vers un espace vide à l’aide d’un sort.", points: { slytherin: 1 } }
    ]
  },
  {
    id: 5,
    text: "On vous offre de choisir un familier magique exceptionnel. Lequel choisissez-vous ?",
    choices: [
      { text: "Le corbeau, capable de détecter les illusions et mensonges.", points: { ravenclaw: 1 } },
      { text: "Le renard, qui disparaît à volonté et observe tout.", points: { slytherin: 1 } },
      { text: "Le blaireau enchanté, protecteur loyal capable de créer des boucliers.", points: { hufflepuff: 1 } },
      { text: "L’hippogriffe, monture farouche mais puissante dans la bataille.", points: { gryffindor: 1 } }
    ]
  },
  {
    id: 6,
    text: "Une bibliothèque secrète a été découverte. On vous laisse choisir le premier grimoire que vous ouvrez.",
    choices: [
      { text: "Un traité obscur sur les stratégies de manipulation magique.", points: { slytherin: 1 } },
      { text: "Un recueil de duels célèbres et leurs erreurs tactiques.", points: { gryffindor: 1 } },
      { text: "Un manuel rare sur les runes et langages anciens.", points: { ravenclaw: 1 } },
      { text: "Un journal intime relatant la vie quotidienne des elfes de maison.", points: { hufflepuff: 1 } }
    ]
  },
  {
    id: 7,
    text: "Une explosion magique vient de se produire dans un couloir. Un élève inconscient gît au sol. Le danger n’est peut-être pas passé.",
    choices: [
      { text: "Vous courez le mettre à l’abri, au risque d’être blessé.", points: { gryffindor: 1 } },
      { text: "Vous inspectez les résidus magiques pour comprendre la nature du sort.", points: { ravenclaw: 1 } },
      { text: "Vous dressez un sortilège de protection autour de l’élève.", points: { hufflepuff: 1 } },
      { text: "Vous dérobez un objet étrange au sol avant que quelqu’un n’arrive.", points: { slytherin: 1 } }
    ]
  },
  {
    id: 8,
    text: "Un groupe d'inconnus encapuchonnés surgit à Pré-au-Lard et jette un sort de confusion collective. Les passants fuient en criant. L’un d’eux vous vise directement.",
    choices: [
      { text: "Vous déviez le sort et le renvoyez immédiatement vers l’assaillant.", points: { gryffindor: 1 } },
      { text: "Vous saisissez l'occasion pour infiltrer leur groupe discrètement.", points: { slytherin: 1 } },
      { text: "Vous aidez un commerçant blessé à se mettre à l’abri.", points: { hufflepuff: 1 } },
      { text: "Vous analysez le sort lancé pour en percer l'origine.", points: { ravenclaw: 1 } }
    ]
  },
  {
    id: 9,
    text: "Un professeur vous confie une mission : faire passer un objet fragile et précieux au travers d’un escalier piégé.",
    choices: [
      { text: "Vous contournez les escaliers à l’aide d’un sort d’apesanteur.", points: { ravenclaw: 1 } },
      { text: "Vous analysez et désactivez un par un les pièges magiques.", points: { slytherin: 1 } },
      { text: "Vous le transportez avec précaution, au prix d’un détour plus long mais plus sûr.", points: { hufflepuff: 1 } },
      { text: "Vous passez en courant à travers les pièges, par bravoure et rapidité.", points: { gryffindor: 1 } }
    ]
  },
  {
    id: 10,
    text: "Vous êtes plongé dans un duel contre un ancien Mangemort dans une ruelle étroite de Londres. La foule panique autour.",
    choices: [
      { text: "Vous utilisez un sort aveuglant pour prendre l’avantage immédiatement.", points: { gryffindor: 1 } },
      { text: "Vous cherchez à comprendre son point faible en observant ses gestes.", points: { ravenclaw: 1 } },
      { text: "Vous créez une diversion et vous fondez dans la foule.", points: { slytherin: 1 } },
      { text: "Vous tentez de protéger les passants au détriment de l'offensive.", points: { hufflepuff: 1 } }
    ]
  },
  {
    id: 11,
    text: "Charlie Weasley vous invite à une mission d’observation d’un nid de dragons en Roumanie. Soudain, un jeune dragon se blesse en tombant d’une falaise.",
    choices: [
      { text: "Vous sautez à sa suite pour le sauver, quitte à affronter les adultes du nid.", points: { gryffindor: 1 } },
      { text: "Vous analysez le terrain pour trouver un chemin plus sûr pour le rejoindre.", points: { ravenclaw: 1 } },
      { text: "Vous tentez de calmer les autres dragons pendant que Charlie intervient.", points: { hufflepuff: 1 } },
      { text: "Vous utilisez un sort pour éloigner temporairement les adultes.", points: { slytherin: 1 } }
    ]
  },
  // ...Etc. jusqu'à 25 (suivant les validations précédentes)
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
