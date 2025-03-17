import { useState, useEffect } from "react";
import groupsData from "../data/2022/groups2022.json"; // Importa os dados dos grupos
import matchesData from "../data/2022/group_matches2022.json"; // Importa os resultados dos jogos
import GroupMatches from "./GroupMatches"; // Importa o componente dos jogos
import getCountryFlag from "../utils/getCountryFlag"; // Importa a função para buscar bandeiras

const GroupTable2022 = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(groupsData.groups);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {groups.map((group, index) => (
        <div key={index} className="mb-8">
          {/* Nome do Grupo */}
          <h2 className="text-lg font-bold mb-2">{group.name}</h2>

          {/* Tabela do Grupo */}
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-1">#</th>
                <th className="border p-1">País</th>
                <th className="border p-1">Pts</th>
                <th className="border p-1">P</th>
                <th className="border p-1">W</th>
                <th className="border p-1">D</th>
                <th className="border p-1">L</th>
                <th className="border p-1">GF</th>
                <th className="border p-1">GA</th>
                <th className="border p-1">GD</th>
                <th className="border p-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {group.teams.map((team, idx) => {
                let rowColor = "";
                let status = "";
                if (idx === 0 || idx === 1) {
                  rowColor = "bg-green-200";
                  status = "passed";
                } else {
                  rowColor = "bg-red-200";
                  status = "Elim.";
                }

                return (
                  <tr key={idx} className={`text-center ${rowColor}`}>
                    <td className="border p-1">{idx + 1}</td>
                    <td className="border p-1 font-bold">
                      <div className="flex items-center justify-center gap-1">
                        <img 
                          src={getCountryFlag(team.country)} 
                          alt={`${team.country} flag`} 
                          className="w-4 h-3 object-cover"
                        />
                        <span>{team.abbreviation}</span>
                      </div>
                    </td>
                    <td className="border p-1">{team.points}</td>
                    <td className="border p-1">{team.played}</td>
                    <td className="border p-1">{team.won}</td>
                    <td className="border p-1">{team.drawn}</td>
                    <td className="border p-1">{team.lost}</td>
                    <td className="border p-1">{team.goals_for}</td>
                    <td className="border p-1">{team.goals_against}</td>
                    <td className="border p-1">{team.goal_difference}</td>
                    <td className="border p-1 font-bold">{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Lista de Jogos do Grupo */}
          <div className="mt-4">
            {/* Passando os jogos do grupo específico, se existirem */}
            {matchesData[group.name] && <GroupMatches matches={matchesData[group.name]} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupTable2022;
