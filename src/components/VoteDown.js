import PropTypes from 'prop-types';
import { AiOutlineArrowDown } from 'react-icons/ai';

function VoteDown({
  id, length, action, active,
}) {
  return (
    <button type="button" className={active ? 'vote vote-active' : 'vote'} onClick={() => action(id)}>
      <AiOutlineArrowDown />
      <span className="text-sm ml-2">
        {length}
      </span>
    </button>
  );
}

VoteDown.propTypes = {
  id: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default VoteDown;
