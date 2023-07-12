import './footer.css';
import sSvg from "../../../favicon.svg"
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer>
            <div id="fContent">
                <img src={sSvg} alt="" id="footerLogo"/>

                <div className="fMain">
                    <Link to="/tos">Termos de Uso</Link>
                    <Link to="/privacidade">Políticas de Privacidade</Link>
                </div>
                <div className="fAdvice">
                    <p className="txtP">
                        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
                    </p>
                </div>
            </div>
        </footer>
    )
}