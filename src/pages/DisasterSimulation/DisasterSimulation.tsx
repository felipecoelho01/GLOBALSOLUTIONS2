import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DisasterSimulation.css';

interface SimulationScenario {
    id: number;
    type: string;
    title: string;
    description: string;
    location: string;
    severity: 'low' | 'medium' | 'high';
    timeLimit: number;
    currentTime: number;
    isActive: boolean;
    completed: boolean;
}

interface SafeZone {
    id: number;
    name: string;
    capacity: number;
    currentOccupancy: number;
    distance: string;
    isRecommended: boolean;
}

const DisasterSimulation = () => {
    const [activeScenario, setActiveScenario] = useState<SimulationScenario | null>(null);
    const [timer, setTimer] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [selectedRoute, setSelectedRoute] = useState<string>('');
    const [alertSent, setAlertSent] = useState<boolean>(false);

    const scenarios: SimulationScenario[] = [
        {
            id: 1,
            type: 'earthquake',
            title: 'Terremoto Magnitude 6.2',
            description: 'Um terremoto de magnitude moderada atingiu a região. Evacuação imediata necessária.',
            location: 'Centro da Cidade',
            severity: 'high',
            timeLimit: 180,
            currentTime: 0,
            isActive: false,
            completed: false
        },
        {
            id: 2,
            type: 'flood',
            title: 'Enchente Severa',
            description: 'Chuvas intensas causaram alagamentos. Busque terrenos elevados.',
            location: 'Zona Ribeirinha',
            severity: 'medium',
            timeLimit: 240,
            currentTime: 0,
            isActive: false,
            completed: false
        },
        {
            id: 3,
            type: 'fire',
            title: 'Incêndio Florestal',
            description: 'Incêndio se espalhando rapidamente. Evacuação preventiva necessária.',
            location: 'Área Rural',
            severity: 'high',
            timeLimit: 120,
            currentTime: 0,
            isActive: false,
            completed: false
        }
    ];

    const safeZones: SafeZone[] = [
        {
            id: 1,
            name: 'Estádio Municipal',
            capacity: 5000,
            currentOccupancy: 1200,
            distance: '2.3 km',
            isRecommended: true
        },
        {
            id: 2,
            name: 'Centro de Convenções',
            capacity: 3000,
            currentOccupancy: 800,
            distance: '3.7 km',
            isRecommended: false
        },
        {
            id: 3,
            name: 'Escola Municipal Norte',
            capacity: 1500,
            currentOccupancy: 400,
            distance: '1.8 km',
            isRecommended: true
        }
    ];

    const routes = [
        { id: 'route1', name: 'Rota A - Avenida Principal', risk: 'low', time: '15 min' },
        { id: 'route2', name: 'Rota B - Vias Secundárias', risk: 'medium', time: '20 min' },
        { id: 'route3', name: 'Rota C - Rodovia', risk: 'high', time: '12 min' }
    ];

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (activeScenario && activeScenario.isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(timer => {
                    if (timer <= 1) {
                        finishSimulation();
                        return 0;
                    }
                    return timer - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [activeScenario, timer]);

    const startScenario = (scenarioId: number) => {
        const scenario = scenarios.find(s => s.id === scenarioId);
        if (scenario) {
            setActiveScenario({
                ...scenario,
                isActive: true
            });
            setTimer(scenario.timeLimit);
            setScore(0);
            setShowResults(false);
            setSelectedRoute('');
            setAlertSent(false);
        }
    };

    const finishSimulation = () => {
        if (activeScenario) {
            setActiveScenario({
                ...activeScenario,
                isActive: false,
                completed: true
            });
            calculateScore();
            setShowResults(true);
        }
    };

    const calculateScore = () => {
        let totalScore = 0;

        // Pontos por tempo restante
        totalScore += timer * 2;

        // Pontos por enviar alerta
        if (alertSent) totalScore += 200;

        // Pontos por escolher rota segura
        if (selectedRoute === 'route1') totalScore += 300;
        else if (selectedRoute === 'route2') totalScore += 150;

        setScore(totalScore);
    };

    const sendAlert = () => {
        setAlertSent(true);
        alert('Alerta de emergência enviado com sucesso!');
        setScore(prev => prev + 200);
    };

    const selectRoute = (routeId: string) => {
        setSelectedRoute(routeId);
        const route = routes.find(r => r.id === routeId);
        if (route) {
            if (route.risk === 'low') {
                setScore(prev => prev + 300);
            } else if (route.risk === 'medium') {
                setScore(prev => prev + 150);
            }
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="simulation-container">
            <div className="container-fluid">
                <div className="simulation-header">
                    <div className="container">
                        <h1><i className="fas fa-map-marked-alt me-3"></i>Simulação de Desastres</h1>
                        <p>Treine suas habilidades de resposta a emergências em cenários realistas</p>
                    </div>
                </div>

                {!activeScenario && (
                    <div className="container">
                        <div className="scenarios-grid">
                            <h2 className="mb-4">Escolha um Cenário</h2>
                            <div className="row g-4">
                                {scenarios.map(scenario => (
                                    <div key={scenario.id} className="col-lg-4 col-md-6">
                                        <div className={`scenario-card ${scenario.type}`}>
                                            <div className="scenario-header">
                                                <div className={`scenario-icon ${scenario.type}`}>
                                                    <i className={
                                                        scenario.type === 'earthquake' ? 'fas fa-mountain' :
                                                            scenario.type === 'flood' ? 'fas fa-water' :
                                                                'fas fa-fire'
                                                    }></i>
                                                </div>
                                                <div className={`severity-badge ${scenario.severity}`}>
                                                    {scenario.severity === 'high' ? 'Alto' :
                                                        scenario.severity === 'medium' ? 'Médio' : 'Baixo'} Risco
                                                </div>
                                            </div>
                                            <h3>{scenario.title}</h3>
                                            <p>{scenario.description}</p>
                                            <div className="scenario-details">
                                                <div className="detail-item">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>{scenario.location}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <i className="fas fa-clock"></i>
                                                    <span>{formatTime(scenario.timeLimit)}</span>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary w-100"
                                                onClick={() => startScenario(scenario.id)}
                                            >
                                                <i className="fas fa-play me-2"></i>
                                                Iniciar Simulação
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeScenario && !showResults && (
                    <div className="container">
                        <div className="row">
                            {/* Simulation Control Panel */}
                            <div className="col-lg-4">
                                <div className="control-panel">
                                    <div className="scenario-info">
                                        <h3>{activeScenario.title}</h3>
                                        <p>{activeScenario.description}</p>
                                        <div className="timer-display">
                                            <i className="fas fa-clock"></i>
                                            <span className={timer <= 30 ? 'urgent' : ''}>{formatTime(timer)}</span>
                                        </div>
                                        <div className="score-display">
                                            <i className="fas fa-star"></i>
                                            <span>{score} pontos</span>
                                        </div>
                                    </div>

                                    <div className="emergency-actions">
                                        <h4>Ações de Emergência</h4>
                                        <button
                                            className={`btn btn-danger w-100 mb-3 ${alertSent ? 'disabled' : ''}`}
                                            onClick={sendAlert}
                                            disabled={alertSent}
                                        >
                                            <i className="fas fa-exclamation-triangle me-2"></i>
                                            {alertSent ? 'Alerta Enviado' : 'Enviar Alerta'}
                                        </button>

                                        <button
                                            className="btn btn-success w-100 mb-3"
                                            onClick={finishSimulation}
                                        >
                                            <i className="fas fa-check me-2"></i>
                                            Finalizar Simulação
                                        </button>

                                        <Link to="/emergency" className="btn btn-warning w-100">
                                            <i className="fas fa-phone me-2"></i>
                                            Contatos de Emergência
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Map and Routes */}
                            <div className="col-lg-8">
                                <div className="simulation-map">
                                    <div className="map-header">
                                        <h4>Mapa da Região</h4>
                                        <div className="map-legend">
                                            <span className="legend-item danger">
                                                <i className="fas fa-circle"></i> Zona de Perigo
                                            </span>
                                            <span className="legend-item safe">
                                                <i className="fas fa-circle"></i> Zona Segura
                                            </span>
                                            <span className="legend-item evacuation">
                                                <i className="fas fa-circle"></i> Rota de Evacuação
                                            </span>
                                        </div>
                                    </div>

                                    <div className="map-area">
                                        <div className="map-content">
                                            <div className={`disaster-zone ${activeScenario.type}`}>
                                                <i className={
                                                    activeScenario.type === 'earthquake' ? 'fas fa-mountain' :
                                                        activeScenario.type === 'flood' ? 'fas fa-water' :
                                                            'fas fa-fire'
                                                }></i>
                                                <span>Zona de Desastre</span>
                                            </div>

                                            {safeZones.map(zone => (
                                                <div key={zone.id} className={`safe-zone ${zone.isRecommended ? 'recommended' : ''}`}>
                                                    <i className="fas fa-shield-alt"></i>
                                                    <span>{zone.name}</span>
                                                    <small>{zone.distance}</small>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="route-selection">
                                        <h5>Selecione uma Rota de Evacuação</h5>
                                        <div className="routes-list">
                                            {routes.map(route => (
                                                <div
                                                    key={route.id}
                                                    className={`route-option ${selectedRoute === route.id ? 'selected' : ''} ${route.risk}`}
                                                    onClick={() => selectRoute(route.id)}
                                                >
                                                    <div className="route-info">
                                                        <strong>{route.name}</strong>
                                                        <span className="route-time">{route.time}</span>
                                                    </div>
                                                    <div className={`risk-indicator ${route.risk}`}>
                                                        {route.risk === 'low' ? 'Baixo Risco' :
                                                            route.risk === 'medium' ? 'Médio Risco' : 'Alto Risco'}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showResults && activeScenario && (
                    <div className="container">
                        <div className="results-panel">
                            <div className="results-header">
                                <h2><i className="fas fa-trophy me-3"></i>Simulação Concluída!</h2>
                                <div className="final-score">
                                    <span className="score-number">{score}</span>
                                    <span className="score-label">pontos</span>
                                </div>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="performance-breakdown">
                                        <h4>Análise de Performance</h4>
                                        <div className="performance-item">
                                            <span>Tempo de Resposta</span>
                                            <span className={timer > 60 ? 'good' : 'warning'}>
                                                {timer > 60 ? 'Excelente' : 'Pode Melhorar'}
                                            </span>
                                        </div>
                                        <div className="performance-item">
                                            <span>Alerta Enviado</span>
                                            <span className={alertSent ? 'good' : 'error'}>
                                                {alertSent ? 'Sim' : 'Não'}
                                            </span>
                                        </div>
                                        <div className="performance-item">
                                            <span>Rota Escolhida</span>
                                            <span className={
                                                selectedRoute === 'route1' ? 'good' :
                                                    selectedRoute === 'route2' ? 'warning' : 'error'
                                            }>
                                                {selectedRoute === 'route1' ? 'Ótima Escolha' :
                                                    selectedRoute === 'route2' ? 'Escolha Razoável' :
                                                        selectedRoute === 'route3' ? 'Escolha Arriscada' : 'Não Selecionada'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="recommendations">
                                        <h4>Recomendações</h4>
                                        <ul>
                                            {!alertSent && <li>Sempre envie alertas de emergência o mais rápido possível</li>}
                                            {selectedRoute !== 'route1' && <li>Prefira rotas com menor risco, mesmo que sejam mais longas</li>}
                                            {timer <= 30 && <li>Pratique mais para melhorar seu tempo de resposta</li>}
                                            <li>Continue praticando diferentes cenários para aprimorar suas habilidades</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="results-actions">
                                <button
                                    className="btn btn-primary me-3"
                                    onClick={() => {
                                        setActiveScenario(null);
                                        setShowResults(false);
                                    }}
                                >
                                    <i className="fas fa-redo me-2"></i>
                                    Nova Simulação
                                </button>
                                <Link to="/dashboard" className="btn btn-success">
                                    <i className="fas fa-tachometer-alt me-2"></i>
                                    Voltar ao Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DisasterSimulation;