import React, {useReducer, useMemo, useState, useContext} from 'react'
import Button from '../Layout/Button/Button';
import {UserContext} from '../../App';
import './Seats.scss';

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'manual':
        return {count: parseInt(action.value)};  
      default:
        throw new Error();
    }
}

function generateSeats(number){
  for (var i = 0; i < 100000000; i++) {};
  console.log("Hello");
  let li = []
  for (let i = 1; i <= number; i++) {
      li.push(Math.pow(i, i));
  }
  return li;
}

const Seats = () => {

    const {loggedIn, setLoggedIn} = useContext(UserContext);
    const {user, authenticated} = loggedIn;

    const [confirmState, setConfirmState] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count:0});

    const memorizedValue = useMemo(() => generateSeats(confirmState), [confirmState]);

    const handleClick = () => setConfirmState(state.count);

    return (
        <>
        {/* {
          null.map(()=>console.log(null))
        } */}
            <h1 className="text-center">Register for Seats
            {
              authenticated ? (<span>{' '}as {user}</span>): null
            }
            </h1>
            <div className="container">
                <div className="seats_selection">
                    <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
                        <input type="number" name="seats" value={state.count} onChange={(e) => dispatch({type: 'manual', value: e.target.value})}/>
                    <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
                </div>
                <Button onClick={handleClick} disabled={!authenticated}>Confirm Seat</Button>
                <div className="Seats">
                  {
                    memorizedValue.map(number => <span key={number} className="lead">{number}</span>)
                  }
                </div>
            </div>
        </>
    )
}

export default Seats;