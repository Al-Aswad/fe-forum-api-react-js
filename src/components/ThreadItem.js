import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ThreadItem() {
  return (
    <div className="rounded-md bg-white p-4">
      <div className="text-slate-300 uppercase font-semibold text-md">head</div>
      <div className="py-4">
        <h3 className="text font-medium text-lg">
          <Link to="/threads/sasas">Error when create Post, how to fix that ?</Link>
        </h3>
      </div>
      <div className="flex gap-2 items-center">
        <span className="icon">
          <AiOutlineArrowUp />
        </span>
        <span className="icon">
          <AiOutlineArrowDown />
        </span>
        <p className="text">
          1 menit lalu.
          {' '}
          <span>200 Balasan</span>
        </p>

      </div>
    </div>
  );
}

export default ThreadItem;
