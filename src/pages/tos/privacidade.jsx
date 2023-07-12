import "./tos.css"
import { Topic } from "./topic"
import sSvg from "../../../favicon.svg"

const polArray = [
    { "topic": "Seu perfil pessoal", "text": "Quando solicitamos informações sobre você, nosso principal objetivo é oferecer serviços mais personalizados. Nós respeitamos a sua privacidade e não vendemos, nem alugamos, tampouco compartilhamos seu nome e informações pessoais com outras organizações. Ao fornecer suas informações pessoais e foto, você compreende e consente com a equipe da OakAI o uso da sua imagem, foto, vídeo e comentários. Essas informações estão disponíveis em seu perfil público e em nossa comunidade, onde você também verá as dos outros membros. Você tem a opção de negar o uso das suas informações ao atualizar suas escolhas em “Privacidade” – “Configurações de Conta”. De tempos em tempos, nós poderemos usar algumas informações de clientes em nossos materiais de marketing. No entanto, nunca faremos isso sem antes entrar em contato com você e receber um consentimento por escrito." }, { "topic": "Medidas de segurança", "text": "A segurança de seus dados pessoais é importante para nós. A OakAI segue os padrões aceitos na indústria para proteger as suas informações pessoais que nos são enviadas tanto durante a transmissão quanto após o recebimento. Quando você insere informações sensíveis (como seu cartão de crédito) em nossos formulários, elas são criptografadas para transmissão usando a tecnologia SSL (Secure Socket Layer). Se você descobrir uma cobrança fraudulenta em sua fatura feita em nome da OakAI, por favor, contate-nos pelo e-mail suporte@oakai.com.br e reporte o caso imediatamente para a administradora do cartão, seguindo os procedimentos padrões deles. OakAI faz uso de fóruns, murais e salas de bate-papo. Lembre-se de que qualquer informação que você divulga por esses meios se torna pública. Sempre tenha cautela com as informações pessoais que você fornece a qualquer pessoa nesses contextos. Também insistimos na verificação da senha ao fazer login, para que você e seus dados estejam protegidos contra acessos sem autorização. Se você parar de usar o computador por muito tempo sem encerrar a sua sessão no OakAI, ela será encerrada automaticamente após certo tempo. Apenas funcionários que precisem da informação para realizar certas tarefas (como cobrança ou atendimento ao cliente, por exemplo) têm acesso a informações pessoais. Os servidores nos quais armazenamos suas informações são mantidos em ambiente seguro." }, { "topic": "Por que coletamos suas informações", "text": "​A OakAI coleta e usa informações sobre você para administrar nosso negócio, fornecer os produtos e serviços que você solicita, comunicar ofertas especiais e serviços da OakAI, e cumprir com leis e regulamentações." }, { "topic": "Mudanças em nossa Política de Privacidade", "text": "​A OakAI se reserva o direito de modificar esta Política de Privacidade a qualquer momento, então, por favor, revise-a frequentemente. Caso façamos mudanças materiais em como coletamos, usamos ou compartilhamos suas informações pessoais, nós notificaremos você por e-mail (enviado ao endereço de e-mail especificado na sua conta) ou postaremos uma notificação em nosso site antes que as mudanças se tornem efetivas. Em qualquer caso, seu uso continuado do nosso site ou dos nossos serviços após a publicação de qualquer modificação da nossa Política de Privacidade significará que você concorda com os termos da Política de Privacidade modificada." }]



export function Privacidade() {
    return (
        <main id="tosPage" className="spacing">

            <header id="tosHeading">
                <img src={sSvg} id="tosLogo" />
                <h1> POLÍTICA DE PRIVACIDADE </h1>
                <h3>A segurança das suas informações é muito importante para nós.</h3></header>

            <div id="tosContent">
                {polArray.map(current => (
                    <Topic
                        key={polArray.indexOf(current)}
                        topic={current.topic}
                        text={current.text}
                    />))}
            </div>

        </main>
    )
}