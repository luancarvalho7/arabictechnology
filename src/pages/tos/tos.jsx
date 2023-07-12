import "./tos.css"
import { Topic } from "./topic"
import sSvg from "../../../favicon.svg"

const tosArray = [
    {
        topic: "Termos de Uso",
        text: "Seu acesso e uso deste site representam a aceitação expressa e irrestrita dos termos de uso descritos abaixo. Caso você não concorde com os termos, pedimos que não acesse nem utilize este website."
    },
    {
        topic: "Uso Legal",
        text: "O usuário poderá utilizar este site somente para propósitos legais. Este espaço não deve ser utilizado para publicar, enviar, distribuir ou divulgar conteúdos ou informação de caráter difamatório, obsceno ou ilícito, incluindo informações de propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem a expressa autorização do detentor desses direitos."
    },
    {
        topic: "Responsabilidades",
        text: "A OakAI se esforça para manter a qualidade, atualidade e autenticidade das informações do site, mas não se responsabiliza por eventuais falhas nos serviços ou inexatidão das informações oferecidas. A OakAI não assume o compromisso de atualizar as informações e se reserva o direito de alterar as condições de uso ou preços dos serviços e produtos oferecidos no site a qualquer momento."
    },
    {
        topic: "Acesso Gratuito",
        text: "O acesso a este site é gratuito. A OakAI poderá criar áreas de acesso exclusivo aos seus clientes ou para terceiros especialmente autorizados."
    },
    {
        topic: "Direitos de Modificação",
        text: "A OakAI reserva-se o direito, a seu critério, de modificar ou desativar o site, bem como limitar, cancelar ou suspender seu uso ou o acesso. Também estes Termos de Uso poderão ser alterados a qualquer tempo. Visite regularmente esta página e consulte os Termos então vigentes."
    },
    {
        topic: "Informações dos Usuários",
        text: "Qualquer material, informação, ou outras comunicações que forem transmitidas, enviadas ou publicadas neste site serão consideradas informação não confidencial. A OakAI não se responsabiliza pela violação aos direitos dos seus criadores."
    },
    {
        topic: "Limitação da Responsabilidade",
        text: "Os materiais são fornecidos neste website sem nenhuma garantia explícita ou implícita de comercialização ou adequação a qualquer objetivo específico. A OakAI não será responsabilizada por quaisquer danos que resultem do uso ou da incapacidade de usar os materiais."
    },
    {
        topic: "Direitos Autorais",
        text: "A OakAI não é responsável pela violação de direitos autorais decorrente de informações, documentos e materiais publicados neste website, comprometendo-se a retirá-los do ar assim que notificado da infração através do email suporte@oakai.com.br."
    },
    {
        topic: "Erros e Falhas",
        text: "A OakAI e/ou seus respectivos fornecedores não serão responsáveis por qualquer dano decorrente da impossibilidade de uso, perda de dados ou lucros, resultante do acesso e desempenho do site, dos serviços oferecidos ou de informações disponíveis neste site."
    },
    {
        topic: "Links para Terceiros",
        text: "A OakAI não é responsável pelo conteúdo de qualquer outro website indicado ou acessado por meio deste site."
    },
    {
        topic: "Propriedade Intelectual",
        text: "Os documentos, conteúdos e criações contidos neste website pertencem aos seus criadores e à OakAI. A autoria do conteúdo, material e imagens exibidos é protegida por leis nacionais e internacionais."
    }
]


export function Tos() {
    return (
        <main id="tosPage" className="spacing">

            <header id="tosHeading">
                <img src={sSvg} id="tosLogo" />
                <h1> TERMOS DE USO </h1>
                <h3>Seus Direitos e Termos para uso das informações estão detalhados aqui</h3></header>

            <div id="tosContent">
                {tosArray.map(current => (
                <Topic
                key={tosArray.indexOf(current)}
                topic={current.topic}
                text={current.text}
                />))}
            </div>

        </main>
    )
}