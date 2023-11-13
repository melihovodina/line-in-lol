import React from "react";
import classes from "./MyButton.module.css"
// Компонент MyButton, который принимает дочерние элементы и пропсы
const MyButton = ({children, ...props}) => {
    return (
        // Создание кнопки с применением стилей из CSS-модуля и передачей всех пропсов и дочерних элементов
        <button className={classes.myButton} {...props}>
            {children}
        </button>
    )
}

export default MyButton