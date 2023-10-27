function FooterColumn({title , footerLinks}) {
    return <section>
        <h3>{title}</h3>
        {footerLinks.map(name => <p className= "fLinks">{name} </p>)}
    </section>
}

export default FooterColumn