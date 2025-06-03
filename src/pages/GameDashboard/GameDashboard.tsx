import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GameDashboard.css';

interface UserProgress {
  level: number;
  xp: number;
  xpToNext: number;
  totalPoints: number;
  completedMissions: number;
  badges: string[];
}

const GameDashboard = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    level: 3,
    xp: 750,
    xpToNext: 250,
    totalPoints: 2450,
    completedMissions: 8,
    badges: ['first-mission', 'earthquake-expert', 'safety-champion']
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      message: 'Parabéns! Você completou a missão "Evacuação de Emergência"',
      time: '2 min atrás'
    },
    {
      id: 2,
      type: 'info',
      message: 'Nova simulação de terremoto disponível!',
      time: '1 hora atrás'
    }
  ]);

  const missions = [
    {
      id: 1,
      title: 'Simulação de Terremoto',
      description: 'Aprenda os procedimentos básicos durante um terremoto',
      difficulty: 'Fácil',
      xpReward: 100,
      status: 'available',
      icon: 'fas fa-mountain',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Plano de Evacuação',
      description: 'Crie e execute um plano de evacuação eficiente',
      difficulty: 'Médio',
      xpReward: 200,
      status: 'available',
      icon: 'fas fa-route',
      color: 'success'
    },
    {
      id: 3,
      title: 'Kit de Emergência',
      description: 'Monte um kit de emergência completo',
      difficulty: 'Fácil',
      xpReward: 150,
      status: 'completed',
      icon: 'fas fa-briefcase-medical',
      color: 'warning'
    },
    {
      id: 4,
      title: 'Resgate em Enchente',
      description: 'Simule operações de resgate durante enchentes',
      difficulty: 'Difícil',
      xpReward: 300,
      status: 'locked',
      icon: 'fas fa-water',
      color: 'info'
    }
  ];

  const achievements = [
    { name: 'Primeira Missão', icon: 'fas fa-flag-checkered', unlocked: true },
    { name: 'Especialista em Terremotos', icon: 'fas fa-mountain', unlocked: true },
    { name: 'Campeão da Segurança', icon: 'fas fa-shield-alt', unlocked: true },
    { name: 'Herói dos Desastres', icon: 'fas fa-medal', unlocked: false },
    { name: 'Mestre da Prevenção', icon: 'fas fa-crown', unlocked: false }
  ];

  const handleStartMission = (missionId: number) => {
    console.log(`Iniciando missão ${missionId}`);
    // Simular início da missão
    alert('Iniciando missão! Redirecionando para simulação...');
  };

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <div className="dashboard-container">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar with Progress */}
          <div className="col-lg-3 col-md-4">
            <div className="progress-sidebar">
              {/* User Progress Card */}
              <div className="progress-card">
                <div className="user-avatar">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>Guardian Level {userProgress.level}</h3>
                <div className="xp-bar">
                  <div className="xp-fill" style={{width: `${(userProgress.xp / (userProgress.xp + userProgress.xpToNext)) * 100}%`}}></div>
                </div>
                <p className="xp-text">{userProgress.xp} / {userProgress.xp + userProgress.xpToNext} XP</p>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <i className="fas fa-trophy text-warning"></i>
                    <div>
                      <span className="stat-number">{userProgress.totalPoints}</span>
                      <span className="stat-label">Pontos</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-tasks text-success"></i>
                    <div>
                      <span className="stat-number">{userProgress.completedMissions}</span>
                      <span className="stat-label">Missões</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="achievements-card">
                <h4><i className="fas fa-medal me-2"></i>Conquistas</h4>
                <div className="achievements-grid">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`achievement-badge ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                      title={achievement.name}
                    >
                      <i className={achievement.icon}></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 col-md-8">
            {/* Header */}
            <div className="dashboard-header">
              <h1><i className="fas fa-tachometer-alt me-3"></i>Painel de Controle</h1>
              <p>Bem-vindo de volta! Continue sua jornada de aprendizado em prevenção de desastres.</p>
            </div>

            {/* Notifications */}
            {notifications.length > 0 && (
              <div className="notifications-section">
                <h4><i className="fas fa-bell me-2"></i>Notificações</h4>
                {notifications.map(notification => (
                  <div key={notification.id} className={`notification ${notification.type}`}>
                    <div className="notification-content">
                      <p>{notification.message}</p>
                      <small>{notification.time}</small>
                    </div>
                    <button 
                      className="notification-close"
                      onClick={() => dismissNotification(notification.id)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div className="quick-actions">
              <h4><i className="fas fa-bolt me-2"></i>Ações Rápidas</h4>
              <div className="row g-3">
                <div className="col-md-3 col-sm-6">
                  <Link to="/simulation" className="quick-action-card">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Simulação</span>
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <Link to="/emergency" className="quick-action-card">
                    <i className="fas fa-phone-alt"></i>
                    <span>Emergência</span>
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="quick-action-card" onClick={() => alert('Kit de emergência em desenvolvimento!')}>
                    <i className="fas fa-briefcase-medical"></i>
                    <span>Kit Emergência</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="quick-action-card" onClick={() => alert('Relatórios em desenvolvimento!')}>
                    <i className="fas fa-chart-bar"></i>
                    <span>Relatórios</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Missions */}
            <div className="missions-section">
              <h4><i className="fas fa-flag me-2"></i>Missões Disponíveis</h4>
              <div className="row g-4">
                {missions.map(mission => (
                  <div key={mission.id} className="col-lg-6">
                    <div className={`mission-card ${mission.status}`}>
                      <div className="mission-header">
                        <div className={`mission-icon bg-${mission.color}`}>
                          <i className={mission.icon}></i>
                        </div>
                        <div className="mission-info">
                          <h5>{mission.title}</h5>
                          <p>{mission.description}</p>
                        </div>
                      </div>
                      <div className="mission-footer">
                        <div className="mission-details">
                          <span className={`difficulty ${mission.difficulty.toLowerCase()}`}>
                            {mission.difficulty}
                          </span>
                          <span className="xp-reward">
                            <i className="fas fa-star me-1"></i>
                            {mission.xpReward} XP
                          </span>
                        </div>
                        <button 
                          className={`btn btn-${mission.color} ${mission.status === 'locked' ? 'disabled' : ''}`}
                          onClick={() => mission.status === 'available' && handleStartMission(mission.id)}
                          disabled={mission.status === 'locked'}
                        >
                          {mission.status === 'completed' ? 'Concluída' : 
                           mission.status === 'locked' ? 'Bloqueada' : 'Iniciar'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard; 