import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function AddThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="flex flex-col gap-4">
      <input className="input" type="text" value={title} onChange={onTitleChange} placeholder="Judul" />
      <input className="input" type="text" value={category} onChange={onCategoryChange} placeholder="Kategori" />
      <div contentEditable className="input h-40" placeholder="Body" />
      <button type="button" className="btn-primary" onClick={() => addThread({ title, category, body })}>Buat</button>
    </form>
  );
}

AddThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default AddThreadInput;
