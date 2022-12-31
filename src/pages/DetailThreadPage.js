import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import CommentItem from '../components/CommentItem';
import CommentInput from '../components/CommnetInput';

function DetailThreadPages() {
  return (
    <section className="detail-thread-page">
      <div className="rounded-md bg-white p-4 w-full">
        <div className="text-slate-300 uppercase font-semibold text-md">head</div>
        <div className="py-4">
          <h3 className="text font-medium text-lg">Error when create Post, how to fix that ?</h3>
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

        <div className="mt-4">
          <h3 className="mb-2">Beri Komentar</h3>
          <CommentInput />
        </div>

        <div className="rounded-md bg-white py-4 w-full">
          <h3 className="text texl-xl font-semibold">Komentar(0)</h3>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>

      </div>

    </section>
  );
}

export default DetailThreadPages;
