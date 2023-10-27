import FooterColumn from './FooterColumn';
import './Footer.css'

function Footer() {
    return (
    <footer>
        <section id="footerColumns">
            <FooterColumn title={"DECATHLON EMPRESA"} footerLinks={["Quiénes somos","Canal ético","Trabaja con nosotros","Sala de prensa","Decathlon afilados",
            "Decathlon Marketplace","Vende en Decathlon.es","Sostenibilidad","Innovación"]} />
            <FooterColumn title={"COMPRA"} footerLinks={["Método de entrega/Gasto de envío","Métodos de pago","Preguntas frecuentes","Envío Canarias, Ceuta, Melilla, Andorra","Single Day",
            "Regalos para deportistas","Rebajas","Botas de futbol"]} />
            <FooterColumn title={"POST-COMPRA"} footerLinks={["Cambios y devoluciones","Factura formato electrónico","Tu opinión cuenta","Comunicados seguridad","Tax free",
            "Clasificación de nuestros productos","Servicio de montaje"]} />
            <FooterColumn title={"SERVICIOS"} footerLinks={["Alquiler","Soporte técnico","Tarjeta regalo","Clubes, colegios y empresas","Personalización","Financiación","Extensión de garantía",
            "Equipaciones clubes","postventa"]} />
            <FooterColumn title={"VENTAJAS"} footerLinks={["Decathlon live","Ventajas y servicios","Decathlon segunda vida","Revender mis productos"]} />
        </section>
        <section></section>
        <section></section>
    </footer>
    );
}




export default Footer;