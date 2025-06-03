import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const technologies = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178C6' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
    { name: 'Vite', icon: 'fas fa-bolt', color: '#646CFF' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' }
  ];

  const features = [
    {
      icon: 'fas fa-gamepad',
      title: 'Gamificação Educativa',
      description: 'Sistema de pontuação, níveis e conquistas para tornar o aprendizado mais envolvente e motivador.'
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Simulações Realistas',
      description: 'Cenários interativos de desastres naturais para prática em ambiente seguro e controlado.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Design Responsivo',
      description: 'Interface otimizada para todos os dispositivos, garantindo acesso em qualquer lugar.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Treinamento em Tempo Real',
      description: 'Simulações cronometradas que testam a velocidade de resposta em situações de emergência.'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Contatos de Emergência',
      description: 'Acesso rápido aos principais serviços de emergência e formulário de solicitação de ajuda.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Acompanhamento de Progresso',
      description: 'Dashboard detalhado com métricas de desempenho e evolução do aprendizado.'
    }
  ];

  const team = [
    {
      name: 'Equipe de Desenvolvimento',
      role: 'Desenvolvimento Full Stack',
      description: 'Responsável pela criação da arquitetura, interface e funcionalidades da aplicação.',
      icon: 'fas fa-code'
    },
    {
      name: 'Especialistas em Desastres',
      role: 'Consultoria Técnica',
      description: 'Profissionais da área de defesa civil que validaram os cenários e procedimentos.',
      icon: 'fas fa-hard-hat'
    },
    {
      name: 'UX/UI Designers',
      role: 'Experiência do Usuário',
      description: 'Criação de interfaces intuitivas e experiências de aprendizado eficazes.',
      icon: 'fas fa-palette'
    }
  ];

  const stats = [
    { number: '100%', label: 'Gratuito', icon: 'fas fa-gift' },
    { number: '24/7', label: 'Disponível', icon: 'fas fa-clock' },
    { number: '8+', label: 'Cenários', icon: 'fas fa-map' },
    { number: '∞', label: 'Tentativas', icon: 'fas fa-redo' }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="about-title">
                Sobre o <span className="text-gradient">DisasterGuard</span>
              </h1>
              <p className="about-description">
                Uma plataforma educativa inovadora que utiliza gamificação para ensinar 
                prevenção e resposta a desastres naturais, salvando vidas através do conhecimento.
              </p>
              <div className="about-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">
                      <i className={stat.icon}></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-visual">
                <div className="floating-card mission">
                  <i className="fas fa-bullseye"></i>
                  <h4>Nossa Missão</h4>
                  <p>Educar e preparar pessoas para enfrentar desastres naturais</p>
                </div>
                <div className="floating-card vision">
                  <i className="fas fa-eye"></i>
                  <h4>Nossa Visão</h4>
                  <p>Um mundo mais seguro através da educação preventiva</p>
                </div>
                <div className="floating-card values">
                  <i className="fas fa-heart"></i>
                  <h4>Nossos Valores</h4>
                  <p>Inovação, acessibilidade e impacto social</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="problem-solution">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Por que DisasterGuard?</h2>
              <p className="section-subtitle">
                Transformando a educação em prevenção de desastres através da tecnologia
              </p>
            </div>
          </div>
          
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="problem-card">
                <h3><i className="fas fa-exclamation-triangle me-2 text-danger"></i>O Problema</h3>
                <ul className="problem-list">
                  <li>Falta de educação preventiva adequada</li>
                  <li>Métodos tradicionais pouco envolventes</li>
                  <li>Dificuldade de acesso a treinamentos práticos</li>
                  <li>Falta de preparação para situações reais</li>
                  <li>Baixa retenção de conhecimento</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="solution-card">
                <h3><i className="fas fa-lightbulb me-2 text-success"></i>Nossa Solução</h3>
                <ul className="solution-list">
                  <li>Gamificação para maior engajamento</li>
                  <li>Simulações interativas e realistas</li>
                  <li>Acesso gratuito e universal</li>
                  <li>Aprendizado baseado em experiência</li>
                  <li>Sistema de progressão motivador</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Funcionalidades Principais</h2>
              <p className="section-subtitle">
                Tudo que você precisa para aprender prevenção de desastres de forma eficaz
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="tech-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Tecnologias Utilizadas</h2>
              <p className="section-subtitle">
                Construído com as melhores e mais modernas tecnologias web
              </p>
            </div>
          </div>
          
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card" style={{'--tech-color': tech.color} as React.CSSProperties}>
                <div className="tech-icon">
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Equipe Multidisciplinar</h2>
              <p className="section-subtitle">
                Profissionais dedicados a criar uma experiência educativa de qualidade
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {team.map((member, index) => (
              <div key={index} className="col-lg-4">
                <div className="team-card">
                  <div className="team-icon">
                    <i className={member.icon}></i>
                  </div>
                  <h4>{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Nosso Impacto</h2>
              <p className="impact-description">
                Acreditamos que a educação é a melhor ferramenta para prevenir tragédias. 
                Através do DisasterGuard, estamos capacitando pessoas a tomar decisões 
                informadas em situações de emergência.
              </p>
              
              <div className="impact-list">
                <div className="impact-item">
                  <i className="fas fa-users text-primary"></i>
                  <div>
                    <h5>Educação Acessível</h5>
                    <p>Democratizando o acesso ao conhecimento sobre prevenção de desastres</p>
                  </div>
                </div>
                
                <div className="impact-item">
                  <i className="fas fa-shield-alt text-success"></i>
                  <div>
                    <h5>Comunidades Preparadas</h5>
                    <p>Formando cidadãos capazes de proteger suas famílias e comunidades</p>
                  </div>
                </div>
                
                <div className="impact-item">
                  <i className="fas fa-globe text-info"></i>
                  <div>
                    <h5>Alcance Global</h5>
                    <p>Disponível para qualquer pessoa, em qualquer lugar do mundo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="impact-visual">
                <div className="impact-chart">
                  <div className="chart-item">
                    <div className="chart-bar" style={{height: '80%'}}>
                      <span>80%</span>
                    </div>
                    <label>Melhoria no Conhecimento</label>
                  </div>
                  <div className="chart-item">
                    <div className="chart-bar" style={{height: '95%'}}>
                      <span>95%</span>
                    </div>
                    <label>Satisfação dos Usuários</label>
                  </div>
                  <div className="chart-item">
                    <div className="chart-bar" style={{height: '60%'}}>
                      <span>60%</span>
                    </div>
                    <label>Tempo de Resposta</label>
                  </div>
                  <div className="chart-item">
                    <div className="chart-bar" style={{height: '90%'}}>
                      <span>90%</span>
                    </div>
                    <label>Recomendação</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Junte-se à Nossa Missão</h2>
              <p className="cta-description">
                Comece hoje mesmo sua jornada de aprendizado e torne-se um guardião contra desastres
              </p>
              <div className="cta-buttons">
                <Link to="/dashboard" className="btn btn-primary btn-lg me-3">
                  <i className="fas fa-play me-2"></i>
                  Começar Treinamento
                </Link>
                <Link to="/simulation" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-map-marked-alt me-2"></i>
                  Ver Simulações
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 