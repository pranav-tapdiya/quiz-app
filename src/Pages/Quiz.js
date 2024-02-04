import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizComponent = ( {setIsLoggedIn}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
 const navigate = useNavigate();
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswerCorrect(option === 'correct');
  };
  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      <h1>Quiz Component</h1>
      <p>Select the correct answer:</p>
      <button className={selectedOption === 'option1' ? 'selected' : ''} onClick={() => handleOptionClick('option1')}>Option 1</button>
      <button className={selectedOption === 'option2' ? 'selected' : ''} onClick={() => handleOptionClick('option2')}>Option 2</button>
      <button className={selectedOption === 'option3' ? 'selected' : ''} onClick={() => {handleOptionClick('option3');
        toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "bounce",
        
        });
    }}>Option 3</button>
      <button className={selectedOption === 'correct' ? 'selected' : ''} onClick={() => {
        toast('Correct Answer', { type: 'success' })
        handleOptionClick('correct')}}>Option 4</button>
      <button onClick={() => setSelectedOption(null)}>Reset</button>
      {selectedOption && (
        <p>
          You selected: {selectedOption}{' '}
          {isAnswerCorrect ? '(Correct answer!)' : '(Wrong answer!)'}
        </p>
      )}

      <button onClick={logout}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default QuizComponent;