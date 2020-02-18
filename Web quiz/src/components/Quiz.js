import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Questão</h2>
          <div className="question-number">{step}</div>
          <div className="description">de <span>{totalQuestions}</span></div>
        </div>
        <h1>APC Investimentos</h1>
        <div className="score-container">
          <h2>Pontuação</h2>
          <div className="score">{score}</div>
          <div className="description">pontos</div>
        </div>
      </header>

      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Quiz;
