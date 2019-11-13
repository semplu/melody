import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import gameQuestions from './mocks/questions';

const init = (questions) => {

  const settings = {
    gameTime: 7,
    errorCount: 4,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );

};

init(gameQuestions);
