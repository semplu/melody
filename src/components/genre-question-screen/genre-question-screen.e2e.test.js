import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';
import gameQuestions from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});


it(`GenreQuestionScreen is correctly rendered after relaunch`, () => {

  const submitHandler = jest.fn();

  const GenreQuestionscreen = shallow(<GenreQuestionScreen
    question={gameQuestions[0]}
    screenIndex={0}
    onAnswer={submitHandler}
  />);


  const genreForm = GenreQuestionscreen.find(`form.game__tracks`);
  const preventDefault = jest.fn();

  genreForm.simulate(`submit`, {preventDefault});

  expect(submitHandler).toHaveBeenCalledTimes(1);

});
