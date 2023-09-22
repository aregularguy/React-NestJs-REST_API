import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import HomePage1 from './Components/Form';
import FormPage from './Components/FormPage';
import Result from './Components/Result';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/form/:username" element={<FormPage />} />
        <Route exact path="/form" element={<FormPage />} />
        <Route exact path="/result" element={<Result />} />
    </Routes>
</Router>
);

