/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { postedAt } from '../utils';
import VoteUp from './VoteUp';
import VoteDown from './VoteDown';
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '../states/threads/action';

function ThreadItem({
  id, title, body, category, createdAt, ownerId, totalComments,
  user, upVotesBy, downVotesBy, authUser,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isVoteUp, setIsVoteUp] = useState(false);
  const [isVoteDown, setIsVoteDown] = useState(false);

  const { name, avatar } = user;

  useEffect(() => {
    if (upVotesBy.includes(authUser)) {
      setIsVoteUp(true);
    }
    if (downVotesBy.includes(authUser)) {
      setIsVoteDown(true);
    }
  }, []);

  // console.log('up', upVotesBy);

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const onUpVote = (threadId) => {
    setIsVoteUp(!isVoteUp);
    setIsVoteDown(false);
    dispatch(asyncUpVoteThread(threadId, authUser));
  };

  const onNetralVote = (threadId) => {
    setIsVoteUp(false);
    setIsVoteDown(false);
    dispatch(asyncNeutralVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    setIsVoteDown(!isVoteDown);
    setIsVoteUp(false);
    dispatch(asyncDownVoteThread(threadId));
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
        {
        isVoteUp
          ? (
            <VoteUp active id={id} action={onNetralVote} length={upVotesBy.length} />
          )
          : (
            <VoteUp id={id} action={onUpVote} length={upVotesBy.length} />
          )
        }

        {
        isVoteDown
          ? (
            <VoteDown id={id} action={onNetralVote} active length={downVotesBy.length} />
          )
          : (
            <VoteDown id={id} action={onDownVote} length={downVotesBy.length} />
          )
        }
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
