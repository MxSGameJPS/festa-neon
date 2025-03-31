import { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoPopupOpen, setIsPromoPopupOpen] = useState(true);

  return (
    <div className="app">
      <div className="background-images">
        <div className="bg-image ruan-image">
          <img src="/RuanChocolate.jpeg" alt="Ruan Chocolate" />
        </div>
        <div className="bg-image dj-lippe-bg">
          <img src="/DjLippe.jpeg" alt="DJ Lippe" />
        </div>
        <div className="bg-image dj-moises-bg">
          <img src="/DjMoises.jpg" alt="DJ Moisés" />
        </div>
      </div>

      <div className="overlay"></div>
      <div className="particles"></div>

      <header className="main-header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-top"></div>
            <div className="logo">
              <span className="logo-part">LUX</span>
              <div className="logo-symbol">
                <div className="crown-top"></div>
                <div className="line-through"></div>
              </div>
              <span className="logo-part">LOUNGE BAR</span>
            </div>
            <div className="logo-bottom"></div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="event-date">
            <div className="date-circle">
              <div className="date-inner">
                <div className="date-content">
                  <span className="date-number">12</span>
                  <span className="date-divider">/</span>
                  <span className="date-number">04</span>
                </div>
              </div>
            </div>
            <div className="date-glow"></div>
          </div>

          <div className="neon-title">
            <div className="festa">festa</div>
            <div className="neon-text">NEON</div>
          </div>

          <div className="cta-button-container">
            <button className="buy-btn" onClick={() => setIsModalOpen(true)}>
              COMPRE SEU INGRESSO ANTECIPADO E GANHE UM PRESENTE!
            </button>
          </div>

          <div className="djs-container">
            <div className="dj-profile dj-moises">
              <div className="dj-circle">
                <img src="/DjMoises.jpg" alt="DJ Moisés PS" />
              </div>
              <div className="dj-name">
                <span className="dj-label">DJ MOISÉS PS</span>
              </div>
            </div>

            <div className="dj-profile dj-grazzi center-dj-profile">
              <div className="center-image">
                <img
                  src="/DjGrazziSantos.jpeg"
                  alt="DJ Grazzi Santos"
                  className="center-dj"
                />
              </div>
              <div className="dj-name pink-text">
                <span className="dj-label">DJ GRAZZI SANTOS</span>
              </div>
            </div>

            <div className="dj-profile dj-lippe">
              <div className="dj-circle">
                <img src="/DjLippe.jpeg" alt="DJ Lippe" />
              </div>
              <div className="dj-name">
                <span className="dj-label crown-icon">LIPPE</span>
              </div>
            </div>
          </div>
          <div className="show-info-container">
            <div className="show-with">SHOW COM RUAN CHOCOLATE</div>
            <div className="hot-niver">
              <span className="fire-icon">🔥</span>
              <span>HOT NIVER: JÉSSICA CASAL JÉV</span>
            </div>
          </div>
        </section>

        <section className="tickets-section">
          <div className="arrow left-arrow"></div>

          <div className="ticket-icons">
            <div className="ticket-category">
              <div className="person-icon couple-icon"></div>
              <div className="ticket-text">
                <div className="ticket-label">CASAL</div>
                <div className="ticket-price">ANTECIPADO</div>
                <div className="ticket-value">R$ 50,00</div>
                <div className="ticket-price-door">NA HORA</div>
                <div className="ticket-value-door">R$ 80,00</div>
              </div>
            </div>

            <div className="ticket-category">
              <div className="person-icon male-icon"></div>
              <div className="ticket-text">
                <div className="ticket-label">SOLTEIRO</div>
                <div className="ticket-price">ANTECIPADO</div>
                <div className="ticket-value">R$ 100,00</div>
                <div className="ticket-price-door">NA HORA</div>
                <div className="ticket-value-door">R$ 170,00</div>
              </div>
            </div>

            <div className="ticket-category">
              <div className="person-icon female-icon"></div>
              <div className="ticket-text">
                <div className="ticket-label">SOLTEIRA</div>
                <div className="ticket-price">ANTECIPADO</div>
                <div className="ticket-value">R$ 10,00</div>
                <div className="ticket-price-door">NA HORA</div>
                <div className="ticket-value-door">R$ 20,00</div>
              </div>
            </div>
          </div>

          <div className="arrow right-arrow"></div>
        </section>

        <div className="location-banner">NA LUX NOVO HAMBURGO</div>
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Comprar Ingressos</h3>
            <p>Entre em contato pelo WhatsApp:</p>
            <button className="whatsapp-btn">
              <span className="whatsapp-icon">📱</span>{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=5551991454337&text&type=phone_number&app_absent=0.me/5551993392983"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Moisés
              </a>
            </button>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {isPromoPopupOpen && (
        <div
          className="modal-overlay promo-overlay"
          onClick={() => setIsPromoPopupOpen(false)}
        >
          <div
            className="modal promo-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="promo-title">
              Quer ter um site profissional para seu evento ou empresa?
            </h3>
            <p className="promo-message">
              Aproveite a promoção exclusiva. Me chame agora
            </p>
            <div className="promo-contact">
              <p className="promo-name">Saulo Pavanello</p>
              <a href="https://wa.me/5551993392983" className="whatsapp-btn">
                <span className="whatsapp-icon">📱</span> (51) 99339-2983
              </a>
            </div>
            <button
              className="close-btn"
              onClick={() => setIsPromoPopupOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="cta-button-container">
        <button className="buy-btn" onClick={() => setIsModalOpen(true)}>
          COMPRE SEU INGRESSO ANTECIPADO E GANHE UM PRESENTE!
        </button>
      </div>
    </div>
  );
}

export default App;
