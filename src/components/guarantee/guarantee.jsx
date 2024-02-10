import "./guarantee.css";
import gSvg from "../../../src/assets/svgs/guarantee.svg"
export function Guarantee() {
  return (
    <section id="guarantee" className="spacing">
      <img src={gSvg} id="iconGuarantee" />
      <h3 className="sectionMinTitle greenText">GARANTIA</h3>
      <h1 className="sectionMText">Garantía de Satisfacción Total de 7 Días</h1>
      <p className="txtP">
        Entra al juego con la confianza de que no hay nada que perder. Si en 7 días no sientes el poder corriendo por tus venas, si no te ves a ti mismo caminando por la senda del éxito y la dominación tecnológica como lo prometimos, te devolvemos cada centavo. Sin preguntas, sin complicaciones. Tu inversión es tan segura como el trono de los magnates de Dubái; no porque esperamos que retrocedas, sino para que avances con la audacia de los que saben que la victoria está asegurada. Prueba 'Arabic Mindset & Tech' y si no estás alucinando con la transformación, reclama tu dinero. Así de simple, así de confiado. Porque sabemos que una vez que pruebes el poder, no habrá vuelta atrás."
      </p>
    </section>
  );
}
