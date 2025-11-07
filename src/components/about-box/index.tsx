import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export const AboutBox = () => {
    return (
        <Card border="primary" className='about-box'>
            <p>Construo a tua ideia em uma página web funcional e pronta para evoluir com o teu Negócio.</p>
            <p>Esteja na palma da mão dos seus clientes e dê o seu próximo passo digital.</p>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Por que ter uma página na internet própria?</Accordion.Header>
                    <Accordion.Body>
                        Ter o teu próprio site significa ter a tua "casa digital", um espaço que ninguém pode mudar ou limitar seu alcance.
                        Tu poderá organizá-lo da maneira que preferir, centralizando as informações do teu negócio para os teus clientes de forma personalizada e profissional.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Já tenho Facebook e/ou Instagram, por que investir também em um site?</Accordion.Header>
                    <Accordion.Body>
                        As redes sociais são ótimas para engajamento, mas o site é o teu espaço exclusivo, onde você controla o conteúdo, o design e a experiência do usuário como um todo.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Como um site pode ajudar o meu negócio a crescer?</Accordion.Header>
                    <Accordion.Body>
                        Um site bem feito amplia teu alcance e torna mais fácil do teu negócio ser encontrado pelos mecanismos de busca, como o Google.
                        Ele também gera confiança e profissionalismo, onde o cliente consegue achar todas informações que precisa em um só lugar.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Criar um site é caro?</Accordion.Header>
                    <Accordion.Body>
                        Eu consigo criar um site simples e eficiente de ótimo custo-benefício, pensadas especificamente para empreendedores pequenos que buscam um espaço digital sem um grande investimento inicial.
                        Uso de templates e personalizações, entendendo as necessidades do teu negócio para respeitar o investimento.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Meu negócio é muito pequeno, preciso de um site?</Accordion.Header>
                    <Accordion.Body>
                        Diria que ainda mais sendo pequeno ou começando. O site ajuda na visibilidade, alcançando clientes que estão além das indicações e redes sociais.
                        Passando credibilidade e uma maneira ágil de divulgar tudo sobre o negócio.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Preciso de um site mesmo trabalhando apenas localmente?</Accordion.Header>
                    <Accordion.Body>
                        Sim! Um site ajuda a divulgar o teu trabalho mesmo para quem não conhece você pessoalmente, podendo limitar o alcance para a cidade e região.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>E se eu quiser algo simples, só uma página, não um site completo?</Accordion.Header>
                    <Accordion.Body>
                        Então você está no lugar certo. Começar simples é o melhor caminho para estar presente online.
                        Pode expandir e atualizar o projeto no futuro conforme o negócio for crescendo.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>Qual o processo para o site ficar pronto?</Accordion.Header>
                    <Accordion.Body>
                        Começamos com uma conversa inicial para a escolha do template visual e as necessidades do projeto, avaliando a complexidade do site.
                        Após isso, você estará online rapidamente, em menos de uma semana, com um link e QR Code prontos para serem usados e divulgados.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header>Preciso ter conhecimentos técnicos para gerenciar o site depois? Como eu consigo manter ele?</Accordion.Header>
                    <Accordion.Body>
                        Em primeiro momento eu faço a entrega do site, deixando todos os direitos e desenvolvimento com vocês.
                        Mas na necessidade de manutenção e hospedagem, ofereço suporte opcional com pagamento a cada 2 meses.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card>
    )
}