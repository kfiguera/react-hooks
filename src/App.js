import React from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import {ThemeContext, themes} from './context/ThemeContext';
import './App.css';

function App() {
    const [theme, setTheme] = React.useState(themes.dark);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={'App ' + theme}>
                <Header/>
                <Characters/>
            </div>
        </ThemeContext.Provider>

    );
}

export default App;
