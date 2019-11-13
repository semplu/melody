import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});


it(`WelcomeScreen is correctly rendered after relaunch`, () => {

  const clickHandler = jest.fn();

  const Welcomescreen = shallow(<WelcomeScreen
    time={7}
    count={4}
    onStartButtonClick={clickHandler}
  />);


  const startButton = Welcomescreen.find(`.welcome__button`);
  const preventDefault = jest.fn();

  startButton.simulate(`click`, {preventDefault});

  expect(clickHandler).toHaveBeenCalledTimes(1);

});
