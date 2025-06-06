import { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmergencyContacts.css';

interface EmergencyContact {
  id: number;
  name: string;
  phone: string;
  type: string;
  description: string;
  available24h: boolean;
  icon: string;
}

interface HelpRequest {
  name: string;
  phone: string;
  location: string;
  emergencyType: string;
  description: string;
  urgency: string;
}

const EmergencyContacts = () => {
  const [activeTab, setActiveTab] = useState<'contacts' | 'help'>('contacts');
  const [helpRequest, setHelpRequest] = useState<HelpRequest>({
    name: '',
    phone: '',
    location: '',
    emergencyType: '',
    description: '',
    urgency: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const emergencyContacts: EmergencyContact[] = [
    {
      id: 1,
      name: 'Bombeiros',
      phone: '193',
      type: 'fire-rescue',
      description: 'Incêndios, resgates, emergências médicas',
      available24h: true,
      icon: 'fas fa-fire'
    },
    {
      id: 2,
      name: 'Polícia Militar',
      phone: '190',
      type: 'police',
      description: 'Segurança pública, crimes em andamento',
      available24h: true,
      icon: 'fas fa-shield-alt'
    },
    {
      id: 3,
      name: 'SAMU',
      phone: '192',
      type: 'medical',
      description: 'Emergências médicas, ambulâncias',
      available24h: true,
      icon: 'fas fa-ambulance'
    },
    {
      id: 4,
      name: 'Polícia Civil',
      phone: '197',
      type: 'police',
      description: 'Investigações, ocorrências não urgentes',
      available24h: true,
      icon: 'fas fa-user-shield'
    },
    {
      id: 5,
      name: 'Defesa Civil',
      phone: '199',
      type: 'civil-defense',
      description: 'Desastres naturais, evacuações',
      available24h: true,
      icon: 'fas fa-hard-hat'
    },
    {
      id: 6,
      name: 'Centro de Informações Toxicológicas',
      phone: '0800 722 6001',
      type: 'medical',
      description: 'Intoxicações, envenenamentos',
      available24h: true,
      icon: 'fas fa-flask'
    },
    {
      id: 7,
      name: 'Polícia Rodoviária Federal',
      phone: '191',
      type: 'highway',
      description: 'Acidentes em rodovias federais',
      available24h: true,
      icon: 'fas fa-road'
    },
    {
      id: 8,
      name: 'Disque Denúncia',
      phone: '181',
      type: 'denunciation',
      description: 'Denúncias anônimas de crimes',
      available24h: true,
      icon: 'fas fa-phone-volume'
    }
  ];

  const emergencyTypes = [
    { value: 'fire', label: 'Incêndio' },
    { value: 'flood', label: 'Enchente' },
    { value: 'earthquake', label: 'Terremoto' },
    { value: 'medical', label: 'Emergência Médica' },
    { value: 'accident', label: 'Acidente' },
    { value: 'other', label: 'Outro' }
  ];

  const callNumber = (phone: string) => {
    // Simular chamada telefônica
    alert(`Chamando ${phone}...`);
    window.open(`tel:${phone}`, '_self');
  };

  const handleHelpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio da solicitação
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setHelpRequest({
        name: '',
        phone: '',
        location: '',
        emergencyType: '',
        description: '',
        urgency: 'medium'
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHelpRequest(prev => ({ ...prev, [name]: value }));
  };

  const getLocationAutomatically = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setHelpRequest(prev => ({
            ...prev,
            location: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`
          }));
        },
        (error) => {
          console.log(error);
          alert('Erro ao obter localização. Por favor, insira manualmente.');
        }
      );
    } else {
      alert('Geolocalização não suportada pelo navegador.');
    }
  };

  return (
    <div className="emergency-container">
      <div className="container">
        <div className="emergency-header">
          <h1><i className="fas fa-phone-alt me-3"></i>Contatos de Emergência</h1>
          <p>Acesso rápido aos serviços de emergência e formulário de solicitação de ajuda</p>
        </div>

        {/* Navigation Tabs */}
        <div className="emergency-tabs">
          <button 
            className={`tab-button ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            <i className="fas fa-phone me-2"></i>
            Contatos
          </button>
          <button 
            className={`tab-button ${activeTab === 'help' ? 'active' : ''}`}
            onClick={() => setActiveTab('help')}
          >
            <i className="fas fa-life-ring me-2"></i>
            Solicitar Ajuda
          </button>
        </div>

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="contacts-section">
            <div className="emergency-alert">
              <div className="alert-icon">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="alert-content">
                <h3>⚠️ IMPORTANTE</h3>
                <p>
                  Em situações de extrema urgência, ligue diretamente para <strong>193 (Bombeiros)</strong>, 
                  <strong>192 (SAMU)</strong> ou <strong>190 (Polícia)</strong>. 
                  Use este sistema apenas para situações não críticas.
                </p>
              </div>
            </div>

            <div className="contacts-grid">
              {emergencyContacts.map(contact => (
                <div key={contact.id} className={`contact-card ${contact.type}`}>
                  <div className="contact-header">
                    <div className={`contact-icon ${contact.type}`}>
                      <i className={contact.icon}></i>
                    </div>
                    {contact.available24h && (
                      <span className="availability-badge">24h</span>
                    )}
                  </div>
                  
                  <h3>{contact.name}</h3>
                  <p className="contact-description">{contact.description}</p>
                  
                  <div className="contact-phone">
                    <span className="phone-number">{contact.phone}</span>
                  </div>
                  
                  <button 
                    className={`call-button btn-${contact.type}`}
                    onClick={() => callNumber(contact.phone)}
                  >
                    <i className="fas fa-phone me-2"></i>
                    Ligar Agora
                  </button>
                </div>
              ))}
            </div>

            <div className="additional-info">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="info-card">
                    <h4><i className="fas fa-map-marker-alt me-2"></i>Pontos de Encontro</h4>
                    <ul>
                      <li>Estádio Municipal - Zona Norte</li>
                      <li>Centro de Convenções - Centro</li>
                      <li>Escola Municipal Sul - Zona Sul</li>
                      <li>Parque Central - Zona Leste</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-card">
                    <h4><i className="fas fa-route me-2"></i>Rotas de Evacuação</h4>
                    <ul>
                      <li>Rota Norte: Via Expressa → BR-101</li>
                      <li>Rota Sul: Av. Principal → Rod. Santos</li>
                      <li>Rota Leste: Marginal → SP-070</li>
                      <li>Rota Oeste: Centro → Rod. Castello</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Request Tab */}
        {activeTab === 'help' && (
          <div className="help-section">
            {showSuccess && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h4>Solicitação Enviada com Sucesso!</h4>
                  <p>Sua solicitação foi recebida. Em breve entraremos em contato.</p>
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-8">
                <div className="help-form-card">
                  <h3><i className="fas fa-life-ring me-2"></i>Formulário de Solicitação de Ajuda</h3>
                  
                  <form onSubmit={handleHelpSubmit} className="help-form">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nome Completo *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={helpRequest.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Telefone *</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={helpRequest.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">Localização *</label>
                      <div className="location-input">
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          name="location"
                          placeholder="Endereço ou coordenadas"
                          value={helpRequest.location}
                          onChange={handleInputChange}
                          required
                        />
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={getLocationAutomatically}
                        >
                          <i className="fas fa-map-marker-alt"></i>
                        </button>
                      </div>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="emergencyType" className="form-label">Tipo de Emergência *</label>
                        <select
                          className="form-select"
                          id="emergencyType"
                          name="emergencyType"
                          value={helpRequest.emergencyType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Selecione...</option>
                          {emergencyTypes.map(type => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="urgency" className="form-label">Nível de Urgência *</label>
                        <select
                          className="form-select"
                          id="urgency"
                          name="urgency"
                          value={helpRequest.urgency}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="low">Baixa</option>
                          <option value="medium">Média</option>
                          <option value="high">Alta</option>
                          <option value="critical">Crítica</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Descrição da Situação *</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows={4}
                        placeholder="Descreva detalhadamente a situação de emergência..."
                        value={helpRequest.description}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-danger btn-lg w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Enviar Solicitação
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-4">
                <div className="help-info-card">
                  <h4><i className="fas fa-info-circle me-2"></i>Informações Importantes</h4>
                  
                  <div className="info-item">
                    <h5>⏱️ Tempo de Resposta</h5>
                    <p>Situações críticas: 5-10 minutos<br/>
                       Situações normais: 15-30 minutos</p>
                  </div>
                  
                  <div className="info-item">
                    <h5>📋 Prepare-se</h5>
                    <p>Tenha em mãos documentos, medicamentos essenciais e aguarde em local seguro.</p>
                  </div>
                  
                  <div className="info-item">
                    <h5>📞 Acompanhamento</h5>
                    <p>Você receberá uma ligação em até 5 minutos para confirmar os detalhes.</p>
                  </div>

                  <div className="emergency-actions">
                    <h5>Ações Rápidas</h5>
                    <Link to="/simulation" className="btn btn-primary w-100 mb-2">
                      <i className="fas fa-play me-2"></i>
                      Praticar Simulação
                    </Link>
                    <Link to="/dashboard" className="btn btn-secondary w-100">
                      <i className="fas fa-tachometer-alt me-2"></i>
                      Voltar ao Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyContacts; 