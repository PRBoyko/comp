import produce from 'immer';
import React, { useReducer } from 'react';
import Button from '../../Button/Button';
import Panel from '../../Panel/Panel';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            state.count = state.count + 1;
            return
        case 'DEC':
            state.count = state.count - 1;
            return

        case 'RND':
            state.count = action.payload;
            state.valueToAdd = 0;
            return
        case 'CHANGE':
            state.valueToAdd = action.payload;
        default:
            return state
    }
}

function CounterPage({ initialCount }) {

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })

    function increment() {
        dispatch({ type: 'INC' })
    }

    function decrement() {
        dispatch({ type: "DEC" })
    }

    function handleChange(e) {
        const value = +e.target.value || 0;
        dispatch({ type: "CHANGE", payload: value })
    }

    function addCount(e) {
        e.preventDefault();
        dispatch({ type: "RND", payload: state.count + state.valueToAdd })
    }



    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button className='m-1' onClick={increment} secondary>Increase</Button>
                <Button className='m-1' onClick={decrement} secondary>Decrease</Button>
            </div>
            <form onSubmit={addCount}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ''} onChange={handleChange} type='number' className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button primary>Add</Button>
            </form>

        </Panel>
    );
}

export default CounterPage;