import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const handleStartGame = () => {
    // Simular som de início do jogo
    console.log('Iniciando jogo de prevenção de desastres...');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="text-gradient">DisasterGuard</span>
                  <br />
                  <span className="subtitle">Educação que Salva Vidas</span>
                </h1>
                <p className="hero-description">
                  Aprenda a prevenir e responder a desastres naturais através de 
                  simulações interativas e gamificação. Transforme conhecimento em ação!
                </p>
                <div className="hero-buttons">
                  <Link 
                    to="/dashboard" 
                    className="btn btn-primary btn-lg hero-btn"
                    onClick={handleStartGame}
                  >
                    <i className="fas fa-play me-2"></i>
                    Começar Agora
                  </Link>
                  <Link 
                    to="/about" 
                    className="btn btn-outline-light btn-lg hero-btn ms-3"
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-animation">
                <div className="disaster-icons">
                  <div className="icon-float earthquake">
                    <i className="fas fa-mountain"></i>
                  </div>
                  <div className="icon-float flood">
                    <i className="fas fa-water"></i>
                  </div>
                  <div className="icon-float fire">
                    <i className="fas fa-fire"></i>
                  </div>
                  <div className="icon-float tornado">
                    <i className="fas fa-wind"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">O Problema dos Desastres Naturais</h2>
              <p className="section-subtitle">
                Entenda por que a educação preventiva é crucial
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="problem-card">
                <div className="problem-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h3>90% dos Desastres</h3>
                <p>São relacionados ao clima e podem ser prevenidos com educação adequada</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="problem-card">
                <div className="problem-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Milhões Afetados</h3>
                <p>Anualmente, milhões de pessoas são impactadas por falta de preparo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="problem-card">
                <div className="problem-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Custos Crescentes</h3>
                <p>Prejuízos econômicos aumentam a cada ano por falta de prevenção</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Nossa Solução</h2>
              <p className="section-description">
                O DisasterGuard combina gamificação com educação para criar uma experiência 
                de aprendizado envolvente e eficaz sobre prevenção de desastres.
              </p>
              <div className="solution-features">
                <div className="feature-item">
                  <i className="fas fa-gamepad text-primary"></i>
                  <div>
                    <h4>Gamificação Inteligente</h4>
                    <p>Aprenda através de jogos e desafios interativos</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-map-marked-alt text-success"></i>
                  <div>
                    <h4>Simulações Realistas</h4>
                    <p>Pratique cenários de emergência em ambiente seguro</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-trophy text-warning"></i>
                  <div>
                    <h4>Sistema de Recompensas</h4>
                    <p>Ganhe pontos e conquistas ao completar missões</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="solution-visual">
                <div className="game-preview">
                  <div className="preview-screen">
                    <div className="preview-header">
                      <div className="preview-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="preview-content">
                      <div className="progress-bars">
                        <div className="progress-item">
                          <span>Terremotos</span>
                          <div className="progress">
                            <div className="progress-bar bg-primary" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div className="progress-item">
                          <span>Enchentes</span>
                          <div className="progress">
                            <div className="progress-bar bg-success" style={{width: '70%'}}></div>
                          </div>
                        </div>
                        <div className="progress-item">
                          <span>Incêndios</span>
                          <div className="progress">
                            <div className="progress-bar bg-warning" style={{width: '60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Comece Sua Jornada de Aprendizado</h2>
              <p className="cta-description">
                Junte-se a milhares de pessoas que já estão se preparando para um futuro mais seguro
              </p>
              <Link 
                to="/dashboard" 
                className="btn btn-lg btn-gradient"
                onClick={handleStartGame}
              >
                <i className="fas fa-rocket me-2"></i>
                Iniciar Treinamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
