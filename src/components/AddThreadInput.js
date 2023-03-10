/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import { useState } from 'react';
import useInput from '../hooks/useInput';

function AddThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useState('');

  return (
    <form className="flex flex-col gap-4">
      <input className="input" type="text" value={title} onChange={onTitleChange} placeholder="Judul" />
      <input className="input" type="text" value={category} onChange={onCategoryChange} placeholder="Kategori" />
      <div
        data-testid="threadInputBody"
        contentEditable
        className="input h-40"
        data-placeholder="Body"
        onInput={(e) => onBodyChange(e.target.innerHTML)}
      />
      <button type="button" className="btn-primary" onClick={() => addThread({ title, category, body })}>Buat</button>
    </form>
  );
}

AddThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default AddThreadInput;
