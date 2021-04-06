import React, {useReducer} from 'react'
import Button from '../Layout/Button/Button';
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

const Seats = () => {

    const [state, dispatch] = useReducer(reducer, {count:0});

    const e = () => {}
    return (
        <>
            <h1 class="text-center">Register for Seats</h1>
            <div class="container">
                <div class="seats_selection">
                    <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
                        <input type="number" name="seats" value={state.count} onChange={(e) => dispatch({type: 'manual', value: e.target.value})}/>
                    <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
                </div>
                <Button onClick={e}>Confirm Seat</Button>
            </div>
        </>
    )
}

export default Seats;