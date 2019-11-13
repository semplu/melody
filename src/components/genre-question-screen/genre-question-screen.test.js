import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';
import gameQuestions from '../../mocks/questions';

it(`ArtistQuestionScreen correctly renders after launch`, () => {

  const tree = renderer.create(<GenreQuestionScreen
    question={gameQuestions[0]}
    screenIndex={0}
    onAnswer={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();

});
