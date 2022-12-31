/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Threads from '../components/Threads';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { groupByCount } from '../utils';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    if (threads.length > 0) {
      setCategories(groupByCount(threads, 'category'));
    }
  }, [dispatch]);

  const threadLists = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser ? authUser.id : null,
  }));

  return (
    <section className="home-page">
      <Threads threads={threadLists} />
      <section className="w-2/12 flex flex-col gap-6">
        <Link to="/threads/create" className="btn-create_thread" auth>
          <FiPlusSquare />
          {' '}
          Buat Thread
        </Link>

        <div className="flex flex-col gap-2">
          <button type="button" className=" text font-medium btn btn-active hover:shadow-sm">All</button>
          {
            categories.map((category, i) => (
              <button key={i} className="text font-medium btn hover:bg-slate-200">
                {category.name}
                (
                {category.count}
                )
              </button>
            ))
          }
        </div>
      </section>
    </section>
  );
}

export default HomePage;
