import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({ username: 'unknown', helloCount: 0 });
const setUserContext = createContext(() => {});

export default function App() {
  const [user, setUser] = useState({ username: 'mike', helloCount: 0 });
  return (
    <div>
      <setUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </setUserContext.Provider>
    </div>
  );
}

const Profile = React.memo(() => {
  console.log('profile render');
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  const setUser = useContext(setUserContext);
  const { username, helloCount } = useContext(UserContext);
  return (
    <>
      <p>{`${username}님 안녕하세요`}</p>
      <p>{`인사 횟수 : ${helloCount}`}</p>
      <button onClick={() => setUser({ username, helloCount: helloCount + 1 })}>
        인사하기
      </button>
    </>
  );
}
