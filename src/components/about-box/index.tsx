import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export const AboutBox = () => {
    return (
        <section className="about-box-container">
            <h1 className='title'>Bem-Vindo!</h1>
            <Card border="primary" className='about-box'>
                <p className='call'>Vamos construir uma página web funcional e pronta para evoluir com o teu Negócio.</p>
                <p>Esteja na palma da mão dos seus clientes e dê o próximo passo digital!</p>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Por que ter uma página na internet pro meu negócio?</Accordion.Header>
                        <Accordion.Body>
                            Ter o próprio site significa ter uma "casa digital". É um espaço de liberdade onde ninguém pode mudar ou limitar seu alcance.
                            <br />
                            <br />
                            Você consegue organizá-lo do jeito que preferir, centralizando as informações do teu negócio para todos os clientes de forma interativa e profissional.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Já tenho Instagram, TikTok e/ou Facebook, por que investir também em um site?</Accordion.Header>
                        <Accordion.Body>
                            As redes sociais são ótimas para engajamento, mas o site é um espaço exclusivo, onde você controla o conteúdo, o design e a experiência do usuário como um todo.
                            <br />
                            <br />
                            Em conjunto com o site, suas redes se tornam ainda mais poderosas, onde seu cliente consegue achar todas as informações do negócio de maneira centralizada, organizada e confiável.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Como um site pode ajudar o meu negócio a crescer?</Accordion.Header>
                        <Accordion.Body>
                            Um site bem feito amplia teu alcance à novos clientes, facilita a divulgação do negócio e aumenta a presença em mecanismos de busca, como o Google.
                            <br />
                            <br />
                            Ele também gera confiança e profissionalismo, onde o cliente consegue achar todas informações que precisa em um só lugar, podendo ser compartilhado em qualquer lugar.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Criar um site é caro?</Accordion.Header>
                        <Accordion.Body>
                            Eu consigo criar um site simples e eficiente por um ótimo custo-benefício, pensado nas necessidades e interesses que o negócio pede.
                            <br />
                            <br />
                            Após uma conversa inicial para resolver essa etapa, consigo apresentar o valor e prazo que respeitem o investimento.
                            <br />
                            <br />
                            Além do site, os serviço de hospedagem e domínio também devem ser levados em conta, mas ofereço suporte durante todo o processo.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Meu negócio é muito pequeno, preciso de um site?</Accordion.Header>
                        <Accordion.Body>
                            Nunca é cedo para começar a ter uma presença digital mais forte. O site vai te ajudar na visibilidade, passando credibilidade e oferecendo uma maneira ágil de divulgar tudo sobre o negócio em um só lugar, sendo conveniente ao cliente.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Preciso de um site mesmo trabalhando apenas na rua/cidade/estado?</Accordion.Header>
                        <Accordion.Body>
                            Sim! Um site ajuda a divulgar o teu trabalho mesmo para quem não o conhece pessoalmente. Além disso, podemos limitar o alcance do site para onde desejar, sem afetar o alcance das redes sociais.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>E se eu quiser algo simples, só uma página de divulgação, não um site completo?</Accordion.Header>
                        <Accordion.Body>
                            Então você está no lugar certo. Começar simples é o melhor caminho para estar presente online, e caso possua redes sociais fortes, podemos fazer um "site vitrine" para divulgá-los mais profissionalmente.
                            <br />
                            <br />
                            O site é seu, então poderá expandir e atualizá-lo no futuro conforme o negócio for crescendo e evoluindo.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Qual o processo para o site ficar pronto?</Accordion.Header>
                        <Accordion.Body>
                            Começamos com uma conversa inicial para a escolha do template visual e as necessidades do projeto, avaliando a complexidade do site.
                            <br />
                            <br />
                            Logo em seguida eu apresento todo o planejamento, valor e prazo para o desenvolvimento do site.
                            <br />
                            <br />
                            Com tudo em mãos e aprovado os termos, trabalhamos juntos durante o desenvolvimento, pois acredito que o diálogo em todas etapas do processo é importante para o resultado final.
                            <br />
                            <br />
                            Sua página estará online rapidamente, com um link e QR Code prontos para serem usados e divulgados aos clientes e além!
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Preciso ter conhecimentos técnicos para gerenciar o site depois? Como eu consigo manter ele?</Accordion.Header>
                        <Accordion.Body>
                            Não! Você não precisa ter nenhum conhecimento técnico para gerenciar o site. Quando eu finalizar o código do site, trabalharemos juntos na hospedagem e no domínio.
                            <br />
                            <br />
                            Tanto a hospedagem quanto o domínio serão mantidos no nome da empresa ou responsável, mas ofereço suporte no começo para organizar e deixar tudo pronto para o site bombar na web.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Existe garantia?</Accordion.Header>
                        <Accordion.Body>
                            Sim! Ofereço tanto serviço de manutenção quanto suporte na hospedagem e domínio pelo período de 60 dias após a entrega do projeto, onde fico à disposição para atualizar, modificar e resolver erros sem custo adicional.
                            <br />
                            <br />
                            Esse período pode ser renovado posteriormente mediante pagamento de um valor mensal.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <p className='call'>Interessado? Veja alguns templates de sites ou aperte no botão abaixo e aumente sua presença digital!</p>
            </Card>
        </section>
    )
}