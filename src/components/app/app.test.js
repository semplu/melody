import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import gameQuestions from '../../mocks/questions';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App
    errorCount={0}
    gameTime={0}
    questions={gameQuestions}
  />)
.toJSON();
  expect(tree).toMatchSnapshot();
});
