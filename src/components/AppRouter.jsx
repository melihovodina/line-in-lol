import React, { useEffect } from 'react'
import { Routes, Route, useNavigate} from "react-router-dom";
import { Links } from '../router' // Импортируем массив маршрутов
// Определяем компонент AppRouter
function AppRouter() {
  const navigate = useNavigate(); // Используем хук useNavigate для перехода по маршрутам
  // Используем useEffect для перехода на '/main' при первом рендере
  useEffect(() => {
    navigate('/main')
  }, []);
  // Возвращаем компонент Routes, внутри которого мы отображаем все маршруты
  return (
    <Routes>
      {Links.map(route => { // Проходим по каждому маршруту в массиве Links
        return (
          <Route
            element={React.createElement(route.component)} // Создаем элемент для каждого компонента маршрута
            path={route.path} // Устанавливаем путь для каждого маршрута
            exact={route.exact} // Устанавливаем свойство exact для каждого маршрута
          />
        );
      })}
    </Routes>
  )
}
export default AppRouter // Экспортируем AppRouter как модуль по умолчанию
