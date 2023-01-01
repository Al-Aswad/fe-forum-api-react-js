import PropTypes from 'prop-types';
import { useState } from 'react';

function CommentInput({ addComment, threadId }) {
  const [content, onCommentInput] = useState('');

  return (
    <form className="flex flex-col gap-4">
      <div className="input h-20" contentEditable value={content} onInput={(e) => onCommentInput(e.target.innerHTML)} />
      <button type="button" className="btn-primary w-max" onClick={() => addComment({ content, threadId })}>Kirim</button>
    </form>
  );
}

CommentInput.defaultProps = {
  threadId: '',
};

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
  threadId: PropTypes.string,
};

export default CommentInput;
