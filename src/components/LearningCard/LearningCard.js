import React, { Component } from 'react';
import LearningForm from '../../components/LearningForm/LearningForm';
import LearningGuess from '../../components/LearningGuess/LearningGuess';

class LearningCard extends Component {
  render() {
    const { word } = this.props;
    return (
      <div className="learn-card">
        <span className="word-container">{word.nextWord}</span>
        <main>
          <div className="guess-form">
            <LearningForm word={word} />
          </div>
          <p>
            {' '}
            You have answered this word correctly {word.wordCorrectCount} times.
          </p>
          <p>
            {' '}
            You have answered this word incorrectly {
              word.wordIncorrectCount
            }{' '}
            times.
          </p>
        </main>
        <div className="score-wrap">
          <p>Your total score is: {word.totalScore}</p>
        </div>
      </div>
    );
  }
}

export default LearningCard;
