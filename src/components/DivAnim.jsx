import React from 'react';
import { CSSTransition } from 'react-transition-group';
// Компонент DivAnim, который принимает дочерние элементы, видимость и функцию установки видимости
const DivAnim = ({ children, isVisible, setIsVisible }) => {
  return (
    <CSSTransition
      in={isVisible} // состояние анимации зависит от isVisible
      timeout={1000} // время анимации составляет 1000 мс
      classNames="anim" // имя класса для стилей анимации
      unmountOnExit // удаляет элемент из DOM после окончания анимации выхода
    >
      <div className='divAnim'>
        {
        // отображение дочерних элементов
        }
        {children} 
      </div>
    </CSSTransition>
  );
};

export default DivAnim;
