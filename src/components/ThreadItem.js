/* eslint-disable react/prop-types */
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, ownerId, totalComments, user,
}) {
  const navigate = useNavigate();

  const { name, avatar } = user;

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className="rounded-lg bg-white p-4">

      <div className="text flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="rounded-full w-10" src={avatar} alt="img" />
          <h3 className="font-semibold text-md">
            Posted by
            {' '}
            {name}
          </h3>
        </div>
        <div>
          <p className="text text-sm">{postedAt(createdAt)}</p>
        </div>
      </div>

      <div role="button" tabIndex={0} className="py-4" onClick={onThreadClick} onKeyDown={onThreadPress}>
        <div className="text font-medium text-lg">
          <h3>{title}</h3>
          <h3 className="text-slate-300 mb-2">{category}</h3>
        </div>
        <div>
          <div>
            {parse(body)}
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <span className="icon">
          <AiOutlineArrowUp />
        </span>
        <span className="icon">
          <AiOutlineArrowDown />
        </span>
        <p className="text">
          {' '}
          <span>
            {totalComments}
            {' '}
            Balasan
          </span>
        </p>
      </div>

    </div>
  );
}

export default ThreadItem;
