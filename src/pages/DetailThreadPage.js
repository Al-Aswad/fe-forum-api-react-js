import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import CommentItem from '../components/CommentItem';
import CommentInput from '../components/CommentInput';
import {
  asyncAddComment, asyncDownVoteThread,
  asyncNeutralVoteThread, asyncReceiveThreadDetail,
  asyncUpVoteThread,
} from '../states/threadDetails/action';
import { postedAt } from '../utils';
import VoteUp from '../components/VoteUp';
import VoteDown from '../components/VoteDown';

function DetailThreadPages() {
  const { id } = useParams();
  const [isVoteUp, setIsVoteUp] = useState(false);
  const [isVoteDown, setIsVoteDown] = useState(false);

  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (threadDetail && authUser) {
      setIsVoteUp(threadDetail.upVotesBy.includes(authUser.id));
      setIsVoteDown(threadDetail.downVotesBy.includes(authUser.id));
    }
  }, [threadDetail, authUser]);

  const onAddComment = ({ content, threadId }) => {
    dispatch(asyncAddComment({ content, threadId }));
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

  if (threadDetail === null) {
    return null;
  }

  return (
    <section className="detail-thread-page">
      <div className="rounded-md bg-white py-4 px-6 w-full">
        <div className="text flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="rounded-full w-10" src={threadDetail.owner.avatar} alt="img" />
            <h3 className="font-semibold text-md">
              Posted by
              {' '}
              {threadDetail.owner.name}
            </h3>
          </div>
          <div>
            <p className="text text-sm">{postedAt(threadDetail.createdAt)}</p>
          </div>
        </div>

        <div className="py-4">
          <div className="text font-medium text-lg">
            <h3 className="text-slate-300">{threadDetail.category}</h3>
            <h3 className="mb-4">{threadDetail.title}</h3>
          </div>
          <div>
            <div>
              {threadDetail ? parse(threadDetail.body) : ''}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {
          isVoteUp
            ? (
              <VoteUp
                active
                id={threadDetail.id}
                action={onNetralVote}
                length={threadDetail.upVotesBy.length}
              />
            )
            : (
              <VoteUp
                id={threadDetail.id}
                action={onUpVote}
                length={threadDetail.upVotesBy.length}
              />
            )
          }

          {
          isVoteDown
            ? (
              <VoteDown
                id={threadDetail.id}
                action={onNetralVote}
                active
                length={threadDetail.downVotesBy.length}
              />
            )
            : (
              <VoteDown
                id={threadDetail.id}
                action={onDownVote}
                length={threadDetail.downVotesBy.length}
              />
            )
          }
          <p className="text">
            {' '}
            <span>
              {threadDetail.comments.length}
              {' '}
              Balasan
            </span>
          </p>
        </div>

        <div className="mt-4">
          <h3 className="mb-2">Beri Komentar</h3>
          {
            authUser === null
              ? (
                <div>
                  Silahkann
                  {' '}
                  <Link to="/login" className="underline">Login</Link>
                </div>

              )
              : (
                <CommentInput addComment={onAddComment} threadId={threadDetail.id} />

              )
          }
        </div>

        <div className="rounded-md bg-white py-4 w-full">
          <h3 className="text texl-xl font-semibold">
            Komentar(
            {threadDetail.comments.length}
            )
          </h3>
          {
            threadDetail.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          }
        </div>

      </div>

    </section>
  );
}

export default DetailThreadPages;
