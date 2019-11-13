import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`WelcomeScreen correctly renders after launch`, () => {
  const tree = renderer.create(<WelcomeScreen
    count={0}
    time={0}
    onStartButtonClick={jest.fn()}
  />)
.toJSON();
  expect(tree).toMatchSnapshot();
});
