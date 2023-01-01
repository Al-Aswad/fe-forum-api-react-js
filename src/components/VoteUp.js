import PropTypes from 'prop-types';
import { AiOutlineArrowUp } from 'react-icons/ai';

function VoteUp({
  id, length, action, active, commentId,
}) {
  return (
    <button type="button" className={active ? 'vote vote-active' : 'vote'} onClick={() => action(id, commentId)}>
      <AiOutlineArrowUp />
      <span className="text-sm ml-2">
        {length}
      </span>
    </button>
  );
}

VoteUp.defaultProps = {
  commentId: 'commentId',
  active: false,
};

VoteUp.propTypes = {
  id: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.bool,
  commentId: PropTypes.string,
};

export default VoteUp;
