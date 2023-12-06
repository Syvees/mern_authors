import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorsList from './components/AuthorsList';
import AuthorForm from './components/AuthorForm';
import Update from './components/Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/authors" default element={<AuthorsList/>} />
            <Route path="/authors/new" element={<AuthorForm/>} />
            <Route path="/authors/edit/:id" element={<Update/>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;