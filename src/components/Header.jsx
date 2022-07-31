import {useState} from "react";

const Header = () => {
    const MIN_VALUE = 0;
    const MAX_VALUE = 10;
    const [darkMode, setDarkMode] = useState(false);
    const [count, setCount] = useState(0);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const increment = () => {
        if(count < MAX_VALUE) {
            setCount(count + 1);
        } else {
            setCount(MAX_VALUE);
        }
    }
    const decrement = () => {
        if(count > MIN_VALUE) {
            setCount(count - 1);
        } else {
            setCount(MIN_VALUE);
        }
    }
    return (
        <header className="Header">
            <h1>ReckHooks</h1>
            <button type="button" onClick={toggleDarkMode}>{ darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            <div>
                <button type="button" onClick={decrement}>-</button>{count}<button type="button" onClick={increment}>+</button>
            </div>


        </header>
    );
}

export default Header;