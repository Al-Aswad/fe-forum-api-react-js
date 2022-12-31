import { useEffect } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Threads from '../components/Threads';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadLists = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <Threads threads={threadLists} />
      <section className="w-2/12 flex flex-col gap-6">
        <Link to="/threads/create" className="btn-primary w-full shadow-md shadow-sky-600 py-2 flex justify-center items-center gap-2">
          <FiPlusSquare />
          {' '}
          Buat Thread
        </Link>
        <div className="flex flex-col gap-2">
          <button type="button" className=" text font-medium btn btn-active">All</button>
          <button type="button" className="text font-medium btn">React Js</button>
          <button type="button" className="text font-medium btn">React Js</button>
          <button type="button" className="text font-medium btn">React Js</button>
          <button type="button" className="text font-medium btn">React Js</button>
        </div>
      </section>
    </section>
  );
}

export default HomePage;
