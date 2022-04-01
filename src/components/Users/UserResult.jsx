import { Loading, UserItem } from '../componentExport';
import { useGithubContext } from '../../context/github/GithubContext';

const UserResult = () => {
  const { users, loading } = useGithubContext();

  return loading ? (
    <Loading />
  ) : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
      {users.length > 0 &&
        users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
    </div>
  );
};

export default UserResult;
