import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../components/UserProfile';
import { asyncReceiveLeadeBoard } from '../states/LeaderBoard/action';

function Leaderboard() {
  const {
    leaderBoards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeadeBoard());
  }, [dispatch]);

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
          {
          leaderBoards.map((leaderboard) => (
            <tr key={leaderboard.user.id}>
              <td className="py-4">
                <UserProfile name={leaderboard.user.name} avatar={leaderboard.user.avatar} />
              </td>
              <td className="text-right">{leaderboard.score}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard;
