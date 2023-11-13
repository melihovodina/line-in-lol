import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, HashRouter} from "react-router-dom";
import { Links } from '../router' // Импортируем массив маршрутов

function AppRouter() {
  const navigate = useNavigate(); // Используем хук useNavigate для перехода по маршрутам

  useEffect(() => {
    navigate('/main')
  }, []);

  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default AppRouter // Экспортируем AppRouter как модуль по умолчанию
