import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login.js';
import { useState } from 'react';
import QuizComponent from './Pages/Quiz.js';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}>
        </Route>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/quiz" element={<QuizComponent setIsLoggedIn={setLoggedIn}/>} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
