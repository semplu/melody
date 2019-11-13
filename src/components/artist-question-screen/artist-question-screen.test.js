import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';
import gameQuestions from '../../mocks/questions';

it(`ArtistQuestionScreen correctly renders after launch`, () => {

  const tree = renderer.create(<ArtistQuestionScreen
    question={gameQuestions[2]}
    screenIndex={2}
    onAnswer={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();

});
