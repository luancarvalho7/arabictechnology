import { Button } from "../cta/button/button";
import "./qa.css";
import { QCard } from "./qCard";

export function Qa() {

  let faqs = [
    {
      id: 1,
      question: "Como vou ter acesso?",
      answer: "Assim que a sua compra for confirmada, você receberá um e-mail com o seu acesso ao Ebook. Os pagamentos realizados por boleto, podem demorar até 2 dias úteis para serem confirmados."
    },
    {
      id: 2,
      question: "Posso aprender a usar o ChatGPT mesmo sem nenhuma experiência com IA?",
      answer: "Com certeza sim! O ebook tem um capítulo completo apenas para guiar qualquer um, até os que não fazem a mínima ideia do que é Inteligência Artificial, a usar o ChatGPT com maestria e se preparar para a Era da Inteligência Artificial."
    },
    {
      id: 3,
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias de garantia para testar o Ebook. Veja com seus próprios olhos o quão eficiente e completo é, e experimente sem nenhum tipo de compromisso. Se você não gostar (o que é muito difícil), basta mandar um e-mail solicitando seu reembolso imediato."
    },
    {
      id: 4,
      question: "Quais são os métodos de pagamento?",
      answer: "Você pode realizar o pagamento por Cartão de Crédito, Boleto Bancário, PIX, PayPal, Google Pay, Samsung Pay e Débito Bancário."
    },
    {
      id: 5,
      question: "O ebook serve pare pessoas avançadas?",
      answer: "Sim! O ebook oferece estratégias e técnicas raras que podem ajudar até os mais experientes com ChatGPT e IA a elevarem o seu nível de conhecimento, produtividade e eficiência, Sem contar os prompts bônus e os jailbreaks exclusivos!"
    },
    {
      id: 6,
      question: "Vou precisar assinar a versão paga do ChatGPT para aplicar os conhecimentos?",
      answer: "Não, não é necessário. Embora a versão paga possua mais recursos, todas as dicas, estratégias e ensinamentos do ebook podem ser aplicadas na versão gratuita, sem precisar gastar um centavo. Se você quiser entender o lado “Plus” do ChatGPT, você terá acesso a um capítulo bônus explicando as principais diferenças e como abusar de suas ferramentas especiais."
    }
  ];


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
        {
          faqs.map(current => <QCard
            key={current.id} 
            question={current.question}
            answer={current.answer}/>
          )
        }
        <QCard
          question={"Quais são as formas de pagamento?"}
          answer={
            "Assim que a sua compra for confirmada, você receberá um e-mail com o seu acesso ao Ebook. Os pagamentos realizados por boleto, podem demorar até 2 dias úteis para serem confirmados."
          }
        />
      </div>

      <Button />

    </section>
  );
}
