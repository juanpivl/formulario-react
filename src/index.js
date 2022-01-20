import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react/cjs/react.production.min';
import { App } from "./app";
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<App />, divRoot);