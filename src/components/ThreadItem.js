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

  const [showMore, setShowMore] = useState(false);
  const [isVoteUp, setIsVoteUp] = useState(false);
  const [isVoteDown, setIsVoteDown] = useState(false);

  const { name, avatar } = user;

  useEffect(() => {
    setIsVoteUp(upVotesBy.includes(authUser));
    setIsVoteDown(downVotesBy.includes(authUser));
  }, [authUser, upVotesBy, downVotesBy]);

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const onUpVote = (threadId) => {
    if (authUser === null) {
      alert('Silahkan login terlebih dahulu');
      return;
    }

    setIsVoteUp(!isVoteUp);
    setIsVoteDown(false);
    dispatch(asyncUpVoteThread(threadId, authUser));
  };

  const onNetralVote = (threadId) => {
    if (authUser === null) {
      alert('Silahkan login terlebih dahulu');
      return;
    }

    setIsVoteUp(false);
    setIsVoteDown(false);
    dispatch(asyncNeutralVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    if (authUser === null) {
      alert('Silahkan login terlebih dahulu');
      return;
    }

    setIsVoteDown(!isVoteDown);
    setIsVoteUp(false);
    dispatch(asyncDownVoteThread(threadId));
  };

  function removeTag(text) {
    return text.replace(/<[^>]+>/g, '');
  }

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

      <div className="py-4">
        <div
          role="button"
          tabIndex={0}
          className="text font-medium text-lg"
          onClick={onThreadClick}
          onKeyDown={onThreadPress}
        >
          <h3>{title}</h3>
          <h3 className="text-slate-300 mb-2">{category}</h3>
        </div>
        <div>
          <div>
            {showMore ? parse(body) : parse(removeTag(body).substring(0, 250))}
          </div>
          {removeTag(body).length > 250
            && (
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
              >
                <span className="underline">
                  {showMore ? 'Show less' : 'Show more'}
                </span>
              </button>
            )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <VoteUp
          id={id}
          active={isVoteUp}
          action={isVoteUp ? onNetralVote : onUpVote}
          length={upVotesBy.length}
        />
        <VoteDown
          id={id}
          active={isVoteDown}
          action={isVoteDown ? onNetralVote : onDownVote}
          length={downVotesBy.length}
        />
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
