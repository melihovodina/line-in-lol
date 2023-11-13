import InstPage from '../components/InstPage'
import MainPage from '../components/MainPage'
import Question from '../components/Question'
import ResultPage from '../components/ResultPage'
export const Links = [
    {path: '/main', component: MainPage, exact: true},
    {path: '/instructions', component: InstPage, exact: true},
    {path: '/quiz', component: Question, exact: true},
    {path: '/result', component: ResultPage, exact: true}
]