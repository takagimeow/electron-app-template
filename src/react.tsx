/* eslint-disable import/no-extraneous-dependencies */
// src/react.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import 'src/css/global.css';

const Index = () => <div>Hello React!</div>;

ReactDOM.render(<Index />, document.getElementById('app'));
