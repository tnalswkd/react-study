import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmout] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, SetUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // SetUserInput({
    //   // ...userInput을 해주는 이유는 위에와 같이 여러개의 단독 state를 쓰는 것이 아닌 한번에 useState를 해줄 경우
    //   // 선택한 거 이후에 날아갈 수 있기 때문에 spread 연산자를 이용하여 날아가지 않게 복사해주는것
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //   // 이전 상태에 기반하는 상황에서는 이렇게 작성하면 좋음 ex)카운터
    //   SetUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    //   });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmout(event.target.value);
    // SetUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // SetUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // 페이지가 reload 되지 않도록 하기 위해 작성
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmout('');
    setEnteredDate('');
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            // 양반향 바인딩
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-04-27'
            max='2024-12-31'
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
