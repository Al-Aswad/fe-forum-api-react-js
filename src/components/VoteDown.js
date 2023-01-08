import PropTypes from 'prop-types';
import { AiOutlineArrowDown } from 'react-icons/ai';

function VoteDown({
  id, length, action, active, commentId,
}) {
  return (
    <button type="button" className={active ? 'vote vote-active' : 'vote'} onClick={() => action(id, commentId)}>
      <AiOutlineArrowDown />
      <span className="text-sm ml-2">
        {length}
      </span>
    </button>
  );
}

VoteDown.defaultProps = {
  commentId: 'commentId',
  active: false,
};

VoteDown.propTypes = {
  id: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  commentId: PropTypes.string,
  active: PropTypes.bool,
};

export default VoteDown;
