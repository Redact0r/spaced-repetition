import React, { Component } from 'react';
import LearningForm from '../../components/LearningForm/LearningForm';

class LearningCard extends Component {
  render() {
    const { word, prompt } = this.props;
    return (
      <div className="learn-card">
        <h2 className="learn-header">Translate the word:</h2>
        <span className="word-container">{word.nextWord}</span>
        <main>
          <div className="guess-form">
            <LearningForm word={word} prompt={prompt} />
          </div>
          <div className="DisplayScore">
            <p>Your total score is: {word.totalScore}</p>
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
      </div>
    );
  }
}

export default LearningCard;
