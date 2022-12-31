import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [comment, onCommentChange] = useInput('');
  return (
    <form className="flex flex-col gap-4">
      <div className="input h-20" contentEditable value={comment} onChange={onCommentChange} />
      <button type="button" className="btn-primary w-max" onClick={() => addComment({ comment })}>Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
