import React, { useState, useEffect } from 'react';
import knockoutData from '../data/2022/knockout2022.json';

// Import flag SVG files
import getCountryFlag from '../utils/getCountryFlag';

const KnockoutStage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [stages, setStages] = useState([]);

  useEffect(() => {
    if (knockoutData && knockoutData.knockoutStages) {
      setStages(knockoutData.knockoutStages);
    }
  }, []);

  const handlePreviousPhase = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  const handleNextPhase = () => {
    if (currentPhase < stages.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const renderPenaltyShootout = (penalties) => {
    if (!penalties) return null;
    
    // Sort penalties by team to group them
    const homeTeamPenalties = penalties.filter(p => p.team === penalties[0].team);
    const awayTeamPenalties = penalties.filter(p => p.team !== penalties[0].team);
    
    return (
      <div className="mt-2 pt-2">
        <h4 className="text-xs font-medium text-gray-600 mb-2">Penalty Shootout:</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h5 className="text-xs font-semibold mb-1">{penalties[0].team}</h5>
            <div className="flex flex-col space-y-1">
              {homeTeamPenalties.map((penalty, idx) => (
                <div key={idx} className="flex items-center text-xs">
                  <span className={`inline-flex items-center justify-center w-4 h-4 mr-1 rounded-full ${penalty.scored ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                    {penalty.scored ? 
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    }
                  </span>
                  <span>{penalty.player}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-xs font-semibold mb-1">{awayTeamPenalties[0].team}</h5>
            <div className="flex flex-col space-y-1">
              {awayTeamPenalties.map((penalty, idx) => (
                <div key={idx} className="flex items-center text-xs">
                  <span className={`inline-flex items-center justify-center w-4 h-4 mr-1 rounded-full ${penalty.scored ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                    {penalty.scored ? 
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    }
                  </span>
                  <span>{penalty.player}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMatch = (match) => (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <img 
            src={getCountryFlag(match.home_team)} 
            alt={`${match.home_team} flag`} 
            className="w-6 h-4 object-cover"
          />
          <span className="text-sm font-medium">{match.home_team}</span>
          <span className="text-xs text-gray-500">({match.home_abbreviation})</span>
        </div>
        <span className="text-sm font-semibold">{match.home_score}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <img 
            src={getCountryFlag(match.away_team)} 
            alt={`${match.away_team} flag`} 
            className="w-6 h-4 object-cover"
          />
          <span className="text-sm font-medium">{match.away_team}</span>
          <span className="text-xs text-gray-500">({match.away_abbreviation})</span>
        </div>
        <span className="text-sm font-semibold">{match.away_score}</span>
      </div>
      
      {match.goals && match.goals.length > 0 && (
        <div className="border-t border-gray-100 pt-2 mt-2">
          <h4 className="text-xs font-medium text-gray-600 mb-1">Gols:</h4>
          <ul className="text-xs">
            {match.goals.map((goal, index) => (
              <li key={index} className="mb-1">
                {goal.player} {goal.minute} 
                {goal.type && <span className="text-gray-500"> ({goal.type})</span>}
                {goal.assist && <span className="text-gray-500"> (Assist: {goal.assist})</span>}
                <span className="text-gray-500"> • {goal.team}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Exibir o resultado dos pênaltis logo após os gols */}
      {match.penalties && (
        <div className="text-xs text-center bg-gray-100 rounded py-1 my-2">
          <strong>Pênaltis:</strong> {match.penalties}
        </div>
      )}
      
      {/* Exibir o shootout detalhado */}
      {match.penalty_shootout && renderPenaltyShootout(match.penalty_shootout)}
      
      <div className="text-xs text-gray-500 mt-2">
        {`${match.date} • ${match.time || 'Horário não definido'}`}
      </div>
      <div className="text-xs text-gray-500">
        {match.stadium}
      </div>
      {match.attendance && (
        <div className="text-xs text-gray-500">
          Público: {match.attendance}
        </div>
      )}
    </div>
  );

  if (stages.length === 0) {
    return <div className="text-center py-10">Carregando...</div>;
  }

  const currentStage = stages[currentPhase];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-6 items-center">
        <button 
          onClick={handlePreviousPhase}
          disabled={currentPhase === 0}
          className={`px-4 py-2 rounded font-medium shadow-sm ${
            currentPhase === 0 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-blue-700 text-white hover:bg-blue-800 transition-colors'
          }`}
        >
          Anterior
        </button>
        <h2 className="text-lg font-bold text-center">{currentStage.stage}</h2>
        <button 
          onClick={handleNextPhase}
          disabled={currentPhase === stages.length - 1}
          className={`px-4 py-2 rounded font-medium shadow-sm ${
            currentPhase === stages.length - 1 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-blue-700 text-white hover:bg-blue-800 transition-colors'
          }`}
        >
          Próximo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentStage.matches.map((match, index) => (
          <div key={index}>
            {renderMatch(match)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnockoutStage;