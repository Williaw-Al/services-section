import { useTheme } from "../../contexts/theme-context";
import '../../assets/styles/header.css'
import { LinkReturnHome } from "../link-return-home";

import { useLocation } from "react-router";

export const HeaderThemeToggler = () => {
    const { toggleTheme } = useTheme();
    const location = useLocation()

    const excludeLinkLocations = ['/', '/teu-espaco-virtual']
    const showLink = !excludeLinkLocations.includes(location.pathname)

    return (
        <header className="header">
            <LinkReturnHome show={showLink} />
            <button className="theme-toggler" onClick={toggleTheme}>
                Obrigado
            </button>
        </header>
    )
}