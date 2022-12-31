import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import ThreadItem from './ThreadItem';

function Threads() {
  return (
    <section className="w-10/12 flex gap-4 flex-col">
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
      <ThreadItem />
    </section>
  );
}

export default Threads;
