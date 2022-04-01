import { useState, useEffect } from 'react';

const UserSearch = () => {
  const [text, setText] = useState('');
  useEffect(() => console.log(text), [text]);

  const handleGithub = () => {
    // const response= await axios.get()
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-8 gap-8'>
      <div>
        <form>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-20 bg-gray-200 input input-lg text-black'
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                className=' absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                onClick={handleGithub}
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className='btn btn-ghost btn-lg' onClick={() => setText('')}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
