import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function Threads({ threads }) {
  console.log(threads);
  return (
    <section className="w-10/12 flex gap-4 flex-col">
      {
         threads.map((thread) => (
           <ThreadItem key={thread.id} {...thread} />
         ))
      }
    </section>
  );
}

const threadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

Threads.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
};

export default Threads;
