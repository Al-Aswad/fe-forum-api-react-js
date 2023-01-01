/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncDownVoteComment, asyncNeutralVoteComment, asyncUpVoteComment } from '../states/threadDetails/action';
import { postedAt } from '../utils';
import UserProfile from './UserProfile';
import VoteDown from './VoteDown';
import VoteUp from './VoteUp';

function CommentItem({ comment, threadId }) {
  const {
    id, owner, content, createdAt, upVotesBy, downVotesBy,
  } = comment;

  const dispatch = useDispatch();
  const [isVoteUp, setIsVoteUp] = useState(false);
  const [isVoteDown, setIsVoteDown] = useState(false);

  const onUpVote = (_threadId, commentId) => {
    setIsVoteUp(!isVoteUp);
    setIsVoteDown(false);
    dispatch(asyncUpVoteComment({ threadId: _threadId, commentId }));
  };

  const onNetralVote = (_threadId, commentId) => {
    setIsVoteUp(false);
    setIsVoteDown(false);
    dispatch(asyncNeutralVoteComment({ threadId: _threadId, commentId }));
  };

  const onDownVote = (_threadId, commentId) => {
    setIsVoteDown(!isVoteDown);
    setIsVoteUp(false);
    dispatch(asyncDownVoteComment({ threadId: _threadId, commentId }));
  };

  return (
    <div className="mt-4 flex flex-col gap-2 ring-1 ring-sky-300 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <UserProfile name={owner.name} avatar={owner.avatar} />
        <p>{postedAt(createdAt)}</p>
      </div>
      <div>
        {content}
      </div>
      <div className="flex gap-2 items-center">
        <VoteUp id={threadId} commentId={id} active action={onUpVote} length={upVotesBy.length} />
        <VoteDown
          id={threadId}
          commentId={id}
          active
          action={onDownVote}
          length={downVotesBy.length}
        />
      </div>
    </div>
  );
}

export default CommentItem;
