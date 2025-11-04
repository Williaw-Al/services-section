import Button from 'react-bootstrap/Button';

export const ActionButton = (props: any) => {
    return (
        <Button variant="primary">
            {props.children}
        </Button>
    )
} 