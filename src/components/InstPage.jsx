import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/MyButton';
import WithAnim from './WithAnim';
import DivAnim from './DivAnim'
// Функция Click, которая устанавливает состояние показа в false и перенаправляет пользователя на '/quiz' через 1 секунду
function Click(setShow, navigate) {
  setShow(false);
  setTimeout(() => navigate('/quiz'), 1000);
}
// Компонент InstPage
const InstPage = () => {
  // Использование хука состояния для управления видимостью
  const [show, setShow] = useState(true);
  // Использование хука навигации
  const navigate = useNavigate();
  return (
    <div className="container">
      <DivAnim isVisible={show} setIsVisible={setShow}>
        <p>
          You'll need to answer several questions. With your answers, 
          I can choose the right line for you. The answer will be based on your playstyle, 
          what type of heroes you like, etc. You can get the exact answer after gaining experience in the game.
        </p>
        <MyButton onClick={() => Click(setShow, navigate)}>OK!</MyButton>
      </DivAnim>
    </div>
  )
}
export default WithAnim(InstPage);
