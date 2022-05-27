import { useState } from 'react'

export default function Example() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => setCounter(counter + 1)

    return (
        <div>
            <h2>Counter: {counter}</h2>
            
            <button onClick={incrementCounter}>
                Increment
            </button>
        </div>
    )
}