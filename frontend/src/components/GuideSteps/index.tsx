import React from 'react';

import './styles.css';

const GuideSteps: React.FC = () => {
  return (
    <div id="panel">
      <div id="guide">
        <h1>Precisa de ajuda com seu négocio?</h1>
        <section>
          <p>(VISITANTES)</p>
          <h2>ATRAIR</h2>
        </section>
        <section>
          <p>(LEADS)</p>
          <h2>CONVERTER</h2>
        </section>
        <section>
          <p>(OPORTUNIDADES)</p>
          <h2>VENDER</h2>
        </section>
        <section>
          <p>(CLIENTES)</p>
          <h2>ENCANTAR</h2>
        </section>
      </div>
      <div id="steps">
        <section>
          <p>BLOG + SEO</p>
          <p>PÁGINAS</p>
          <p>REDE SOCIAL</p>
          <p>ADWORDS</p>
        </section>
        <section>
          <p>CONTEÚDO RICO</p>
          <p>LANDING PAGES E FORM</p>
          <p>REDE SOCIAL</p>
          <p>ADWORDS</p>
        </section>
        <section>
          <p>E-MAIL</p>
          <p>QUANTIFICAÇÃO DE LEADS</p>
          <p>INTEGRAÇÃO COM CRM</p>
          <p>ADWORDS</p>
        </section>
        <section>
          <p>NEWSLETTER</p>
          <p>CONTEÚDO PERSONALIZADO</p>
          <p>PESQUISAS</p>
          <p>ADWORDS</p>
        </section>
      </div>
    </div>
  );
};

export default GuideSteps;
