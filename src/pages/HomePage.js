/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import { Button, Skeleton, Stack } from '@chakra-ui/react';
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
  const [_threads, setThreads] = useState([]);
  const [threadTemp, setThreadTemp] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  useEffect(() => {
    addUserToThreads();
    setCategories(groupByCount(threads, 'category'));
  }, [threads, authUser, users]);

  function addUserToThreads() {
    const threadLists = threads.map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
      authUser: authUser ? authUser.id : null,
    }));

    setThreads(threadLists);
    setThreadTemp(threadLists);
  }

  function search(q) {
    const filteredList = _threads.filter((thread) => thread.category.toLowerCase()
      .includes(q.toLowerCase()));

    setThreadTemp(filteredList);
  }

  if (threads.length === 0 && users.length === 0) {
    return (
      <section className="home-page">
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </section>
    );
  }

  return (
    <section className="home-page">
      <Threads threads={threadTemp} />
      <section className="w-2/12 flex flex-col gap-6">
        <Link to="/threads/create" className="w-full">
          <Button className="w-full" isFullWidth leftIcon={<FiPlusSquare />} colorScheme="blue" variant="solid">
            Buat Thread
          </Button>
        </Link>

        <div className="flex flex-col gap-2">
          <button type="button" className=" text font-medium btn btn-active hover:shadow-sm" onClick={() => addUserToThreads()}>All</button>
          {
            categories.map((category, i) => (
              <button key={i} className="text font-medium btn hover:bg-slate-200" onClick={() => search(category.name)}>
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
