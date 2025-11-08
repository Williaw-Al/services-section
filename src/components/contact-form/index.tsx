import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "bed73c46-1789-4356-99c9-dcd3dadba4e2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            navigate("/");
        } else {
            setResult("Error");
        }
    };

    return (
        <div className='contact-form-container'>
            <h1>Preencha os dados abaixo para me mandar um e-mail!</h1>

            <Form onSubmit={onSubmit} className='contact-form'>
                <Form.Group controlId='name'>
                    <Form.Label>Seu Nome:</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" required />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Seu Email:</Form.Label>
                    <Form.Control type="email" placeholder="Seu email para contato" required />
                </Form.Group>
                <Form.Group controlId='message'>
                    <Form.Label>Mande uma mensagem:</Form.Label>
                    <Form.Control as="textarea" rows={4} style={{resize: 'none'}} placeholder='Escreva sua mensagem aqui...' required />
                </Form.Group>

                <input type="hidden" name="subject" value="Form recebido - Página Freelancer" />

                <Button variant="primary" type="submit">Enviar Mensagem</Button>

                <span>{result}</span>
            </Form>
        </div>
    );
}