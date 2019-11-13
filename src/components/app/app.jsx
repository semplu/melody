import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import PropTypes from "prop-types";

class App extends React.PureComponent {


  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }


  static getScreen(step, props, onUserAnswer) {

    if (step === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={gameTime}
        count={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[step];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        screenIndex={step}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        screenIndex={step}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }


  render() {
    return App.getScreen(this.state.step, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.step + 1;
        const isEnd = nextIndex >= this.props.questions.length;

        return {
          step: !isEnd ? nextIndex : -1,
        };
      });
    });
  }


}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string,
    song: PropTypes.shape({
      artist: PropTypes.string,
      src: PropTypes.string,
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.string,
      picture: PropTypes.string,
      artist: PropTypes.string,
    })),
  })).isRequired,
};

export default App;
