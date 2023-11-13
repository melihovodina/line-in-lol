import React from 'react';
import { CSSTransition } from 'react-transition-group';
// Функция высшего порядка WithAnim, которая принимает компонент и возвращает новый компонент с анимацией
const WithAnim = (WrappedComponent) => {
  // Возвращаемый компонент является классовым компонентом React
  return class extends React.Component {
    // Инициализация состояния show в false
    state = {
      show: false
    }
    // После монтирования компонента состояние show устанавливается в true
    componentDidMount() {
      this.setState({ show: true });
    }
    // Метод render возвращает CSSTransition, который оборачивает переданный компонент
    render() {
      return (
        <CSSTransition
          in={this.state.show} // состояние анимации зависит от this.state.show
          timeout={1000} // время анимации составляет 1000 мс
          classNames="anim" // имя класса для стилей анимации
          unmountOnExit // удаляет элемент из DOM после окончания анимации выхода
          appear={true} // запускает анимацию входа при первом монтировании
        >
          {
          // рендеринг переданного компонента с его пропсами
          }
          <WrappedComponent {...this.props} />
        </CSSTransition>
      );
    }
  }
}
export default WithAnim;