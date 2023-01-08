import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddThreadInput from '../components/AddThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const {
    authUser,
    // isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, category, body }) => {
    // @TODO: dispatch async action to add thread
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  function checkAuth() {
    if (authUser === null) {
      navigate('/login');
    }
  }

  useEffect(() => {
    checkAuth();
  }, [authUser]);

  return (
    <section className="add-thread-page">
      <article className="flex flex-col">
        <h1 className="font-semibold text-xl text">Buat Thread </h1>
        <div className="rounded-md p-10 bg-white md:w-[600px] sm:w-full mt-4">
          <AddThreadInput addThread={onAddThread} />
        </div>
      </article>
    </section>
  );
}

export default AddThreadPage;
