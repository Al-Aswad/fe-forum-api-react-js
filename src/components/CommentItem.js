import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function CommentItem() {
  return (
    <div className="mt-4 flex flex-col gap-2 ring-1 ring-sky-300 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex">
          <img src="../../public/logo192.png" alt="img" />
          <h3>Mahmud</h3>
        </div>
        <p>30 menit lalu</p>
      </div>
      <div>
        ini komentarnya
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
