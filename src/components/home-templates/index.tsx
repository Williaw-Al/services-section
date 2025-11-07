import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router'

export const HomeTemplates = () => {
    return (
        <Link to="/modelos-sites" className='templates-button'>
            <div className='template-box-container'>
                <Card className='template-box box-left' />
                <Card className='template-box box-center' />
                <Card className='template-box box-right' />
            </div>
            <Button>Ver Templates</Button>
        </Link>
    )
}