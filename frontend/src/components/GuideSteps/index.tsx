/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';

import './styles.css';

const GuideSteps: React.FC = () => {
  const [atrairShow, setAtrairShow] = useState(false);
  const [converterShow, setConverterShow] = useState(false);
  const [venderShow, setVenderShow] = useState(false);
  const [encantarShow, setEncantarShow] = useState(false);

  return (
    <div id="panel">
      <div id="guide">
        <h1>Precisa de ajuda com seu négocio?</h1>
        <section className="firstSection" onClick={() => setAtrairShow(true)}>
          <p>(VISITANTES)</p>
          <h2>ATRAIR</h2>
        </section>
        <section
          className="secondSection"
          onClick={() => setConverterShow(true)}
        >
          <p>(LEADS)</p>
          <h2>CONVERTER</h2>
        </section>
        <section className="thirdSection" onClick={() => setVenderShow(true)}>
          <p>(OPORTUNIDADES)</p>
          <h2>VENDER</h2>
        </section>
        <section
          className="fourthSection"
          onClick={() => setEncantarShow(true)}
        >
          <p>(CLIENTES)</p>
          <h2>ENCANTAR</h2>
        </section>
      </div>
      {atrairShow ? (
        <div className="steps">
          <span onClick={() => setAtrairShow(false)}>X</span>
          <section className="firstSection">
            <p>BLOG + SEO</p>
            <p>PÁGINAS</p>
            <p>REDE SOCIAL</p>
            <p>ADWORDS</p>
          </section>
        </div>
      ) : (
        <div />
      )}
      {converterShow ? (
        <div className="steps">
          <span onClick={() => setConverterShow(false)}>X</span>
          <section className="secondSection">
            <p>CONTEÚDO RICO</p>
            <p>LANDING PAGES E FORM</p>
            <p>REDE SOCIAL</p>
            <p>ADWORDS</p>
          </section>
        </div>
      ) : (
        <div />
      )}
      {venderShow ? (
        <div className="steps">
          <span onClick={() => setVenderShow(false)}>X</span>
          <section className="thirdSection">
            <p>E-MAIL</p>
            <p>QUANTIFICAÇÃO DE LEADS</p>
            <p>INTEGRAÇÃO COM CRM</p>
            <p>ADWORDS</p>
          </section>
        </div>
      ) : (
        <div />
      )}
      {encantarShow ? (
        <div className="steps">
          <span onClick={() => setEncantarShow(false)}>X</span>
          <section className="fourthSection">
            <p>NEWSLETTER</p>
            <p>CONTEÚDO PERSONALIZADO</p>
            <p>PESQUISAS</p>
            <p>ADWORDS</p>
          </section>
        </div>
      ) : (
        <div />
      )}
      {/* <div id="steps">
        <section className="firstSection">
          <p>BLOG + SEO</p>
          <p>PÁGINAS</p>
          <p>REDE SOCIAL</p>
          <p>ADWORDS</p>
        </section>
        <section className="secondSection">
          <p>CONTEÚDO RICO</p>
          <p>LANDING PAGES E FORM</p>
          <p>REDE SOCIAL</p>
          <p>ADWORDS</p>
        </section>
        <section className="thirdSection">
          <p>E-MAIL</p>
          <p>QUANTIFICAÇÃO DE LEADS</p>
          <p>INTEGRAÇÃO COM CRM</p>
          <p>ADWORDS</p>
        </section>
        <section className="fourthSection">
          <p>NEWSLETTER</p>
          <p>CONTEÚDO PERSONALIZADO</p>
          <p>PESQUISAS</p>
          <p>ADWORDS</p>
        </section>
      </div> */}
    </div>
  );
};

export default GuideSteps;
