import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <button onClick={
                () => {
                    setCounter((c) => c + 1);
                    setCounter((c) => c + 1);
                    console.log(counter);
                }
            }>
                Increment
            </button>

            <h1>Counter: {counter}</h1>
        </div>
    )
}