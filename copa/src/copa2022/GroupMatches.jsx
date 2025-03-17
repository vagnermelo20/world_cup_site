import getCountryFlag from "../utils/getCountryFlag"; // Importa a função para buscar bandeiras

const GroupMatches = ({ matches = [] }) => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-bold mb-2">Resultados dos Jogos</h3>

      {matches.length === 0 ? (
        <p className="text-gray-500">Nenhum jogo disponível para este grupo.</p>
      ) : (
        matches.map((match, index) => (
          <div key={index} className="mb-4 text-xs border-b pb-2">
            {/* Data e horário */}
            <p className="font-semibold">{match.date} - {match.time}</p>

            {/* Jogo e placar */}
            <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <img 
                    src={getCountryFlag(match.home_team)} 
                    alt={`${match.home_team} flag`} 
                    className="w-5 h-3 mr-1 object-cover"
                  />
                  <span className="font-bold">{match.home_abbreviation}</span>
                </div>
                {/* Título de Gols */}
                {match.goals && match.goals.filter(goal => goal.team === match.home_team).length > 0 && (
                  <div className="mt-1">
                    <h4 className="text-xs font-medium text-gray-600 mb-1">Gols:</h4>
                    {/* Gols do time da casa */}
                    {match.goals
                      .filter(goal => goal.team === match.home_team)
                      .map((goal, idx) => (
                        <p key={idx} className="text-gray-700 text-xs mb-1">
                          {goal.player} {goal.minute} 
                          {goal.type && <span className="text-gray-500"> ({goal.type})</span>}
                          {goal.assist && <span className="text-gray-500"> (Assist: {goal.assist})</span>}
                        </p>
                      ))}
                  </div>
                )}
              </div>

              <span className="font-bold text-lg">
                {match.home_score} - {match.away_score}
              </span>

              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span className="font-bold">{match.away_abbreviation}</span>
                  <img 
                    src={getCountryFlag(match.away_team)} 
                    alt={`${match.away_team} flag`} 
                    className="w-5 h-3 ml-1 object-cover"
                  />
                </div>
                {/* Título de Gols */}
                {match.goals && match.goals.filter(goal => goal.team === match.away_team).length > 0 && (
                  <div className="mt-1">
                    <h4 className="text-xs font-medium text-gray-600 mb-1">Gols:</h4>
                    {/* Gols do time visitante */}
                    {match.goals
                      .filter(goal => goal.team === match.away_team)
                      .map((goal, idx) => (
                        <p key={idx} className="text-gray-700 text-xs mb-1">
                          {goal.player} {goal.minute} 
                          {goal.type && <span className="text-gray-500"> ({goal.type})</span>}
                          {goal.assist && <span className="text-gray-500"> (Assist: {goal.assist})</span>}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {/* Estádio, público e árbitro */}
            <p>{match.stadium}</p>
            <p>Attendance: {match.attendance}</p>
            <p>Referee: {match.referee}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default GroupMatches;
  