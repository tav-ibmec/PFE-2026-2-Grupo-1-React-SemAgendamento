function Contato({ titulo, tituloId, subtitulo = 'ENTRE EM CONTATO', paragrafos = [], detalhes = [], decoracaoLateral, mapaEmbed }) {
  return (
    <section className="contact-section" id="contato" aria-labelledby={tituloId}>
      {decoracaoLateral && <img className="side-decoration deco-wide deco-left" src={decoracaoLateral} alt="" loading="lazy" />}
      <div className="content-wrap contact-panel oto-contact-panel">
        {/* Informações de contato */}
        <div className="contact-copy">
          <p className="eyebrow">{subtitulo}</p>
          <h2 id={tituloId}>{titulo}</h2>
          {paragrafos.map((paragrafo, i) => <p key={i}>{paragrafo}</p>)}
          <address>
            <ul className="contact-details">
              {detalhes.map((item) => (
                <li key={item.rotulo}>
                  <img className="contact-icon-slot" src={item.icone} alt="" loading="lazy" />
                  <span className="contact-content">
                    <span className="contact-label">{item.rotulo}</span>
                    <a href={item.href} {...(item.novaAba ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{item.texto}</a>
                  </span>
                </li>
              ))}
            </ul>
          </address>
        </div>
        {/* Mapa da unidade */}
        {mapaEmbed && <iframe className="contact-map" title="Localização da empresa no Google Maps" src={mapaEmbed} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}
      </div>
    </section>
  );
}

export default Contato;
