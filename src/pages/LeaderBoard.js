function Leaderboard() {
  return (
    <section className="leaderboard-page">
      <div className="rounded-md bg-white w-full py-6 p-4 text-xl font-semibold text shadow-sm shadow-slate-400 mb-6">
        Top Member
      </div>

      <table className="table-auto">
        <thead>
          <tr className="border-b-2 border-slate-300">
            <th className="text-left pb-4">Member</th>
            <th className="text-right">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="text-right">Malcolm Lockyer</td>
          </tr>
          <tr>
            <td className="py-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="text-right">Malcolm Lockyer</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard;
