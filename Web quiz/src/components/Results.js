import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> Na Primeira Tentativa.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> Na Segunda Tentativa.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> Na Terceira Tentativa.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> Na Quarta Tentativa.</div>;
  
  return (
    <div className="results-container">
      <h2>Resultados</h2>
      <div>Você Respondeu...</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Sua pontuação total é <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Reiniciar Quiz</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
