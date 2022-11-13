import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const [emoji, setEmoji] = useState("🌞");

	const changeTheme = () => {
		if (!darkMode) {
			setDarkMode(false);
			setEmoji("🌙");
		} else {
			setDarkMode(true);
			setEmoji("🌞");
		}
	};
	return (
		<ThemeContext.Provider value={{ emoji, darkMode, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext };
