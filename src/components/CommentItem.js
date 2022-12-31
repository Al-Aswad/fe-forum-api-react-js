/* eslint-disable react/prop-types */
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { postedAt } from '../utils';

function CommentItem({ comment }) {
  const { owner, content, createdAt } = comment;
  return (
    <div className="mt-4 flex flex-col gap-2 ring-1 ring-sky-300 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="rounded-full w-10" src={owner.avatar} alt="img" />
          <h3 className="font-semibold text-md text">
            {owner.name}
          </h3>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <div>
        {content}
      </div>
      <div className="flex">
        <span className="icon">
          <AiOutlineArrowUp />
        </span>
        <span className="icon">
          <AiOutlineArrowDown />
        </span>
      </div>
    </div>
  );
}

export default CommentItem;
