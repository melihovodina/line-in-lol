import React from 'react';
import { ResultContext } from './Arrs';
import WithAnim from './WithAnim';
const ResultPage = () => {
  // Использование контекста для доступа к результату
  const { result } = React.useContext(ResultContext);
  return (
    <div className='container'>
      <p>Your line is {result}</p>
    </div>
  );
};
export default WithAnim(ResultPage);