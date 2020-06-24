import React, { Component } from 'react';
import LearningForm from '../../components/LearningForm/LearningForm';
import LearningGuess from '../../components/LearningGuess/LearningGuess';

class LearningCard extends Component {
  render() {
    const { word } = this.props;
    return (
      <div>
        <span>{word.nextWord}</span>
        <p>Your total score is: {word.totalScore}</p>
        <main>
          <LearningForm word={word} />
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
      </div>
    );
  }
}

export default LearningCard;
