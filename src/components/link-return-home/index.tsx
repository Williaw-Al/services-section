import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

export const LinkReturnHome = ({ show }: { show: boolean }) => {
    return (
        <div className="return-button" style={show ? { height: 'fit' } : { height: 0, overflow: "clip" }}>
            <Link to='/' >
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                Clique aqui para voltar
            </Link>
        </div>
    )
}