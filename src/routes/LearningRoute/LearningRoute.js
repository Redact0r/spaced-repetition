import React, { Component } from 'react';
import LearningCard from '../../components/LearningCard/LearningCard';
import UserService from '../../services/user-service';
import './LearningRoute.css';
class LearningRoute extends Component {
  state = {
    //Sample --- Replace with actual api information
    word: {},
    err: '',
  };
  componentDidMount() {
    UserService.getWordCard()
      .then((data) => this.setState({ word: data }))
      .catch((data) => this.setState({ err: data }));
  }
  render() {
    return (
      <section>
        <h2 className="learn-header">Translate the word:</h2>
        <LearningCard word={this.state.word} score={this.state.score} />
      </section>
    );
  }
}

export default LearningRoute;
