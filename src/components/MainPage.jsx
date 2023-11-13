import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/MyButton'
import DivAnim from './DivAnim';
import '../styles/index.css'
// Функция Click, которая устанавливает состояние показа в false и перенаправляет пользователя на '/instructions' через 1 секунду
function Click(setShow, navigate) {
  setShow(false);
  setTimeout(() => navigate('/instructions'), 1000);
}

const MainPage = () => {
  // Использование хука состояния для управления видимостью
  const [show, setShow] = useState(true);
  // Использование хука навигации
  const navigate = useNavigate();
  return (
    <div className="container">
      <DivAnim isVisible={show} setIsVisible={setShow}>
        <h1>What's your lane in LoL?</h1>
        <MyButton onClick={() => Click(setShow, navigate)}>Start</MyButton>
      </DivAnim>
    </div>
  )
}
export default MainPage;
