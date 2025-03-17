const KnockoutStage = () => {
  return (
    <div className="p-4 font-sans">
      <h2 className="text-xl font-bold mb-4">Bracket</h2>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border p-1 text-center text-blue-500">Round of 16</th>
            <th className="border p-1 text-center text-blue-500">Quarter-finals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-xs text-blue-500">3 December – Al Rayyan (KIS)</td>
            <td></td>
          </tr>
          <tr>
            <td className="border p-1 font-bold flex justify-between relative">
              <span className="flex gap-1">
                <img src="/src/assets/holanda.svg" alt="Netherlands" className="w-6 h-4" />
                <span className="text-purple-800">Netherlands</span>
              </span>
              <span>3</span>
              {/* Updated connector */}
              <span className="absolute right-[-20px] top-1/2 h-[120%] border-r-2 border-black w-2 -translate-y-[10%]"></span>
              <span className="absolute right-[-20px] top-full w-[20px] border-t-2 border-black"></span>
            </td>
            <td rowSpan={4} className="border p-1 relative">
              <div className="text-xs text-blue-500">9 December – Lusail</div>
              <div className="font-bold flex justify-between">
                <span className="flex gap-1">
                  <img src="https://flagcdn.com/ar.svg" alt="Argentina" className="w-6 h-4" />
                  <span className="text-blue-500">Argentina</span> (p)
                </span>
                <span>2 (4)</span>
              </div>
              <div className="flex gap-1">
                <img src="" alt="Netherlands" className="w-6 h-4" />
                Netherlands 2 (3)
              </div>
              {/* Vertical connector in quarter-finals */}
              <div className="absolute left-[-21px] top-0 bottom-0 w-2 border-r-2 border-black"></div>
            </td>
          </tr>
          <tr>
            <td className="border p-1 flex justify-between">
              <span className="flex gap-1">
                <img src="https://flagcdn.com/us.svg" alt="United States" className="w-6 h-4" />
                <span className="text-blue-500">United States</span>
              </span>
              <span>1</span>
            </td>
          </tr>
          <tr>
            <td className="text-xs text-blue-500">3 December – Al Rayyan (ABAS)</td>
          </tr>
          <tr>
            <td className="border p-1 font-bold flex justify-between relative">
              <span className="flex gap-1">
                <img src="https://flagcdn.com/ar.svg" alt="Argentina" className="w-6 h-4" />
                <span className="text-blue-500">Argentina</span>
              </span>
              <span>2</span>
              {/* Updated connector */}
              <span className="absolute right-[-20px] bottom-1/2 h-[120%] border-r-2 border-black w-2 translate-y-[10%]"></span>
              <span className="absolute right-[-20px] bottom-full w-[20px] border-t-2 border-black"></span>
            </td>
          </tr>
          <tr>
            <td className="border p-1 flex justify-between">
              <span className="flex gap-1">
                <img src="https://flagcdn.com/au.svg" alt="Australia" className="w-6 h-4" /> Australia
              </span>
              <span>1</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default KnockoutStage;