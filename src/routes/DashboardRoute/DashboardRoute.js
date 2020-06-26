import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';
import WordList from '../../components/WordList/WordList';
import './Dashboard.css';

class DashboardRoute extends Component {
  static contextType = UserContext;
  state = {
    width: `${this.context.score}%`,
  };
  //gets my language and words progress from the server
  //shown my language
  //shown the words to learn for the language
  //shown my count for correct and incorrect responses for each word
  //given a button/link to start learning
  //shown the total score for guessing words correctly

  //GET Language = API call and then stores language and words into context

  componentDidMount() {
    UserService.getUserData().then((data) => {
      this.context.setLanguage(data.language.name);
      this.context.setScore(data.language.total_score);
      this.context.setWords(data.words);
    });
  }

  render() {
    return (
      <section className="dashboard-main">
        <div className="dashboard-header">
          <h2>{this.context.language}</h2>
          <p>Total correct answers: {this.context.score}</p>
          <Link className="btn" to="/learn">
            Start practicing
          </Link>
          <h3>Words to practice</h3>
        </div>
        <WordList />
      </section>
    );
  }
}

export default DashboardRoute;
