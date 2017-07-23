import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Slide from './Slide';
import Somos from './Somos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slide />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Somos />, div);
});