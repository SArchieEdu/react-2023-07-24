import { useState} from 'react';

export const Counter = ({ price }) => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>
                <button onClick={() => setCounter(count => count + 1)}>+</button>
                <div>{counter}</div>
                <button onClick={() => setCounter( count => count > 0 ? count - 1 : 0)}>-</button>
            </div>
            <div>
                <div><span>Sum:</span> {counter * price}</div>
            </div>
        </div>
    );
}