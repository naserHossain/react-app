import React, { useState } from "react";
import Button from "../components/buttons/Button";
import DisplayCount from "../components/display-count/DisplayCount";
import Layout from "../components/layout/Layout";
import UpdateIncrementDecrement from "../components/update-input/UpdateIncrementDecrement";
const About = () => {
    const [count, setCount] = useState(null);
    const [incrementValue, setIncrementValue] = useState(10);
    const [decrementValue, setDecrementValue] = useState(5);

    function increment() {
        setCount(count + incrementValue);
        // state[1](state[0] + 1);
    }

    function decrement() {
        setCount(count - decrementValue);
    }

    function handleIncrementChange(e) {
        setIncrementValue(parseInt(e.target.value));
    }

    function handleDecrementChange(e) {
        setDecrementValue(parseInt(e.target.value));
    }

    return (
        <div>
            <Layout>
                <DisplayCount count={count} />
                <UpdateIncrementDecrement
                    incrementValue={incrementValue}
                    decrementValue={decrementValue}
                    handleIncrementChange={handleIncrementChange}
                    handleDecrementChange={handleDecrementChange}
                />
                <Button increment={increment} decrement={decrement} />
            </Layout>
        </div>
    );
};

export default About;
