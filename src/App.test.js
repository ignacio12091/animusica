import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routing from './routing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(routing, div);
  ReactDOM.unmountComponentAtNode(div);
});
