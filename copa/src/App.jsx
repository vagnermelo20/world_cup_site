// import GroupTable2022 from "./copa2022/GroupTable2022"; // Importa a tabela dos grupos

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-xl font-bold text-center my-4">World Cup 2022</h1>
//       <GroupTable2022 /> {/* Exibe todas as tabelas e jogos */}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import GroupTable2022 from "./copa2022/GroupTable2022";
import KnockoutStage from "./copa2022/knockoutStage";

function App() {
  const [activeTab, setActiveTab] = useState("groups"); // Default to groups view

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4 bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
        Copa do Mundo FIFA 2022
      </h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-t-lg font-medium ${
            activeTab === "groups" 
              ? "bg-blue-600 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("groups")}
        >
          Fase de Grupos
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-t-lg font-medium ${
            activeTab === "knockout" 
              ? "bg-blue-600 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("knockout")}
        >
          Mata-mata
        </button>
      </div>
      
      {/* Content based on active tab */}
      {activeTab === "groups" ? (
        <GroupTable2022 />
      ) : (
        <KnockoutStage />
      )}
    </div>
  );
}

export default App;