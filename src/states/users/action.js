import api from '../../utils/api';

const ActionType = {
  RECEiVE_USER: 'RECEIVE_USER',
};
function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEiVE_USER,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error);
    }
  };
}

export {
  ActionType,
  asyncRegisterUser,
  receiveUsersActionCreator,
};
