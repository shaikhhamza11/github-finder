import { useState } from 'react';
import { useGithubContext } from '../../context/github/GithubContext';
import { Actions } from './../../constants/Actions';
import { useAlertContext } from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';
const UserSearch = () => {
  const [text, setText] = useState('');
  const { users, dispatch } = useGithubContext();
  const { setAlert } = useAlertContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'set-loading' });
    if (text === '') {
      setAlert('Please enter something', 'error', 3000);
    } else {
      const users = await searchUsers(text);
      dispatch({ type: 'get-users', payload: { users } });
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-20 bg-gray-200 input input-lg text-black'
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                type='submit'
                className=' absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => {
              dispatch({ type: Actions.CLEAR_USERS });
              setText('');
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
