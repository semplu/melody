import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';
import gameQuestions from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});


it(`ArtistQuestionScreen is correctly rendered after relaunch`, () => {

  const changeHandler = jest.fn();

  const ArtistQuestionscreen = shallow(<ArtistQuestionScreen
    question={gameQuestions[2]}
    screenIndex={2}
    onAnswer={changeHandler}
  />);


  const genreForm = ArtistQuestionscreen.find(`form.game__artist`);

  genreForm.simulate(`change`);

  expect(changeHandler).toHaveBeenCalledTimes(1);

});
