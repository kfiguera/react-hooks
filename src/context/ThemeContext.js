import React from "react";

const themes = {
    light: {
        color: "black",
        backgroundColor: "white"
    },
    dark: {
        color: "white",
        backgroundColor: "#3a3a3a"
    }
};

const ThemeContext = React.createContext(themes.dark);

export {ThemeContext, themes};