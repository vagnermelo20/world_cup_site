const GroupMatches = ({ matches = [] }) => {
    return (
      <div className="mt-4">
        <h3 className="text-sm font-bold mb-2">Resultados dos Jogos</h3>
  
        {matches.length === 0 ? (
          <p className="text-gray-500">Nenhum jogo disponível.</p>
        ) : (
          matches.map((match, index) => (
            <div key={index} className="mb-4 text-xs border-b pb-2">
              {/* Data e horário fixo */}
              <p className="font-semibold">{match.date} - {match.time}</p>
  
              {/* Jogo e placar */}
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="mr-2">{match.home_flag}</span>
                    <span className="font-bold">{match.home_abbreviation}</span>
                  </div>
                  {/* Gols do time da casa */}
                  {match.goals
                    .filter(goal => goal.team === match.home_team)
                    .map((goal, idx) => (
                      <p key={idx} className="text-gray-700 text-xs">
                        {goal.player} ⚽ {goal.minute} {goal.type === "penalty" ? "(pen.)" : ""}
                      </p>
                    ))}
                </div>
  
                <span className="font-bold text-lg">
                  {match.home_score} - {match.away_score}
                </span>
  
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="font-bold">{match.away_abbreviation}</span>
                    <span className="ml-2">{match.away_flag}</span>
                  </div>
                  {/* Gols do time visitante */}
                  {match.goals
                    .filter(goal => goal.team === match.away_team)
                    .map((goal, idx) => (
                      <p key={idx} className="text-gray-700 text-xs">
                        {goal.player} ⚽ {goal.minute} {goal.type === "penalty" ? "(pen.)" : ""}
                      </p>
                    ))}
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
  