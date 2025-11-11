import { useTheme } from "../../contexts/theme-context";
import '../../assets/styles/header.css'
import { LinkReturnHome } from "../link-return-home";

import { useLocation } from "react-router";
import { motion } from "motion/react";

export const HeaderThemeToggler = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation()

    const excludeLinkLocations = ['/', '/teu-espaco-virtual']
    const showLink = !excludeLinkLocations.includes(location.pathname)

    return (
        <header className="header">
            <LinkReturnHome show={showLink} />

            <div className="theme-toggler-container">
                <span>Trocar tema</span>
                <button className="theme-toggler" onClick={toggleTheme}
                    style={
                        theme === 'light' ?
                            { justifyContent: 'flex-start' } :
                            { justifyContent: 'flex-end' }
                    }>
                    <motion.div className="handle"
                        layout
                        transition={{
                            type: "spring",
                            visualDuration: 0.2,
                            bounce: 0.2,
                        }}
                    />
                </button>
            </div>
        </header>
    )
}