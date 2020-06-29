import React, { Component } from 'react';
import LearningForm from '../../components/LearningForm/LearningForm';

class LearningCard extends Component {
  render() {
    const { word, setPrompt, guess, setGuess } = this.props;
    return (
      <div className="learn-card">
        <h2 className="learn-header">Translate the word:</h2>
        <span className="word-container">{word.nextWord}</span>
        <main>
          <LearningForm
            word={word}
            setPrompt={setPrompt}
            guess={guess}
            setGuess={setGuess}
          />
          <div className="DisplayScore-card">
            <p>Your total score is: {word.totalScore}</p>

            <p>
              {' '}
              You have answered this word correctly {word.wordCorrectCount}{' '}
              times.
            </p>
            <p>
              {' '}
              You have answered this word incorrectly {
                word.wordIncorrectCount
              }{' '}
              times.
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default LearningCard;
