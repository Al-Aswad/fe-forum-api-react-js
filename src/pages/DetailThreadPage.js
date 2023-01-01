import { useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import CommentItem from '../components/CommentItem';
import CommentInput from '../components/CommentInput';
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetails/action';
import { postedAt } from '../utils';

function DetailThreadPages() {
  const { id } = useParams();

  const {
    threadDetail = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    if (id) {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [id, dispatch]);

  const onAddComment = ({ content, threadId }) => {
    dispatch(asyncAddComment({ content, threadId }));
  };

  return (
    <section className="detail-thread-page">
      <div className="rounded-md bg-white py-4 px-6 w-full">
        <div className="text flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="rounded-full w-10" src={threadDetail?.owner.avatar} alt="img" />
            <h3 className="font-semibold text-md">
              Posted by
              {' '}
              {threadDetail?.owner.name}
            </h3>
          </div>
          <div>
            <p className="text text-sm">{postedAt(threadDetail?.createdAt)}</p>
          </div>
        </div>

        <div className="py-4">
          <div className="text font-medium text-lg">
            <h3 className="text-slate-300">{threadDetail?.category}</h3>
            <h3 className="mb-4">{threadDetail?.title}</h3>
          </div>
          <div>
            <div>
              {threadDetail ? parse(threadDetail?.body) : ''}
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
              {threadDetail?.totalComments ? threadDetail?.totalComments : 0}
              {' '}
              Balasan
            </span>
          </p>
        </div>

        <div className="mt-4">
          <h3 className="mb-2">Beri Komentar</h3>
          <CommentInput addComment={onAddComment} threadId={threadDetail?.id} />
        </div>

        <div className="rounded-md bg-white py-4 w-full">
          <h3 className="text texl-xl font-semibold">
            Komentar(
            {threadDetail?.comments.length}
            )
          </h3>
          {
            threadDetail?.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          }
        </div>

      </div>

    </section>
  );
}

export default DetailThreadPages;
