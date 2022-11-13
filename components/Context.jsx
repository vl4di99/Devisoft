import React, { createContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)
    const [emoji, setEmoji] = useState("🌞")
    const [mounted, setMounted] = useState(false)

    const changeTheme = () => {
        if (darkMode) {
            setDarkMode(false)
            setEmoji("🌞")
        } else {
            setDarkMode(true)
            setEmoji("🌙")
        }
    }

    useEffect(() => setMounted(true), [])
    if (mounted) {
        return (
            <ThemeContext.Provider value={{ emoji, darkMode, changeTheme }}>
                {children}
            </ThemeContext.Provider>
        )
    } else return null
}

export { ThemeContext }
