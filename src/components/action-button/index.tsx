import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

export const ActionButton = (props: any) => {
    return (
        <Link to="/entre-em-contato">
            <Button variant="primary" size='lg'>
                {props.children}
            </Button>
        </Link>
    )
} 