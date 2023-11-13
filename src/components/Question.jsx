import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Questions, ResultContext } from './Arrs'
import MyButton from './UI/button/MyButton' 
import '../styles/index.css'
import WithAnim from './WithAnim';
const Question = () => {
    const navigate = useNavigate();
    const [top, setTop] = useState(0);
    const [mid, setMid] = useState(0);
    const [jungle, setJungle] = useState(0);
    const [adc, setAdc] = useState(0);
    const [support, setSupport] = useState(0);
    const { setResult } = React.useContext(ResultContext);   
    const [n, setN] = useState(0)
    const [qanim, setQanim] = useState(false)
    // Функция answer обновляет состояние в зависимости от выбранного ответа
    const answer = (question, answerNumber) => {
        setQanim(true)
        setTimeout(() => {
            setTop(top + question[`top${answerNumber}`])
            setMid(mid + question[`mid${answerNumber}`])
            setJungle(jungle + question[`jg${answerNumber}`])
            setAdc(adc + question[`adc${answerNumber}`])
            setSupport(support + question[`sup${answerNumber}`])
            if (n < Questions.length - 1) {
                setN(n + 1)
                setQanim(false)
            } else {
                calculateResult()
                setTimeout(() => navigate('/result'), 1000);
            }
        }, 1000)
    }
    // Функция calculateResult вычисляет результат на основе текущего состояния
    const calculateResult = () => {
        const scores = { top, mid, jungle, adc, support }
        let maxScore = 0
        let maxRole = ''
        for (const role in scores) {
            if (scores[role] > maxScore) {
                maxScore = scores[role]
                maxRole = role
            }
        }
        setResult(maxRole)
    }
    return(
        <div className="container">
            {Questions.map((question, i) => (
                n === i &&
                <div className={`container ${qanim ? 'qanim-out' : 'qanim-in'}`}>
                    <p>
                        {question.quest}
                    </p>
                    <div className='answer'>
                        <MyButton onClick={() => answer(question, 1)}> {question.answ1} </MyButton>
                        <MyButton onClick={() => answer(question, 2)}> {question.answ2} </MyButton>  
                    </div>
                </div>
            ))}
        </div>
    )
}
export default WithAnim(Question)