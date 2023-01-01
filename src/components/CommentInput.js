import PropTypes from 'prop-types';
import { useState } from 'react';

function CommentInput({ addComment, threadId }) {
  const [content, onCommentInput] = useState('cee');

  function onSubmitHandler(event) {
    event.preventDefault();

    if (content.length === 0) {
      alert('Tidak boleh kosong');
      return;
    }

    addComment({ content, threadId });
    onCommentInput('');
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
      <div className="input h-20" contentEditable value={content} onInput={(e) => onCommentInput(e.target.innerHTML)} />
      <button type="submit" className="btn-primary w-max">Kirim</button>
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
