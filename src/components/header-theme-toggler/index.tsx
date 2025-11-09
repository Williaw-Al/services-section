import { useTheme } from "../../contexts/theme-context";
import '../../assets/styles/header.css'

export const HeaderThemeToggler = () => {
    const { toggleTheme } = useTheme();

    return (
        <header className="header">
            <button className="theme-toggler" onClick={toggleTheme}>
                Obrigado
            </button>
        </header>
    )
}