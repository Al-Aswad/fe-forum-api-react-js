/* eslint-disable react/prop-types */
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { postedAt } from '../utils';

// "id": "thread-1",
// "title": "Thread Pertama",
// "body": "Ini adalah thread pertama",
// "category": "General",
// "createdAt": "2021-06-21T07:00:00.000Z",
// "ownerId": "users-1",
// "upVotesBy": [],
// "downVotesBy": [],
// "totalComments": 0

function ThreadItem({
  id, title, body, category, createdAt, ownerId, totalComments, user,
}) {
  const { name, avatar } = user;

  return (
    <div className="rounded-lg bg-white p-4">

      <div className="text flex justify-between items-center">
        {/* {category} */}
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

      <div className="py-4">
        <h3 className="text font-medium text-lg">
          <Link to="/threads/sasas">{title}</Link>
          <h3 className="text-slate-300 mb-2">{category}</h3>
        </h3>
        <div>
          <p>
            {parse(body)}
          </p>
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
