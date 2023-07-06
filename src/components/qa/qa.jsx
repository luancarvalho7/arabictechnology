import "./qa.css";
import { QCard } from "./qCard";

export function Qa() {
  return (
    <section id="qa" className="spacing">
      <div id="qaText" className="sectionHeader">
        <h3 className="sectionMinTitle greenText">VANTAGENS</h3>
        <h1 className="sectionMText">Dúvidas frequentes</h1>
        <p className="txtP">
          Confira algumas das dúvidas mais frequentes a respeito do Guia
          ChatGPT:
        </p>
      </div>

      <div id="qaContent">
        <QCard
          question={"Quais são as formas de pagamento?"}
          answer={
            "Assim que a sua compra for confirmada, você receberá um e-mail com o seu acesso ao Ebook. Os pagamentos realizados por boleto, podem demorar até 2 dias úteis para serem confirmados."
          }
        />
      </div>
    </section>
  );
}
