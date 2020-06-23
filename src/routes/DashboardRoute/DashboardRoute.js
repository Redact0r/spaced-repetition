import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import UserService from "../../services/user-service";
import WordList from "../../components/WordList/WordList";
import "./Dashboard.css";

class DashboardRoute extends Component {
  static contextType = UserContext;
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
      this.context.setWords(data.words);
    });
  }

  render() {
    return (
      <section className="dashboard-main">
        {this.context.language}
        <WordList />
        {this.context.score}
        <div className="progressbar">Progress Bar here</div>
      </section>
    );
  }
}

export default DashboardRoute;
