import PropTypes from 'prop-types';

function UserProfile({ name, avatar }) {
  return (
    <div className="flex items-center gap-2">
      <img className="rounded-full w-10" src={avatar} alt="img" />
      <h3 className="font-semibold text-md text">
        {name}
      </h3>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default UserProfile;
