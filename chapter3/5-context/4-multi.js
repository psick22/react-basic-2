import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
  const [name, setName] = useState('');
  return (
    <div>
      <ThemeContext.Provider value='light'>
        <UserContext.Provider value={name}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </UserContext.Provider>
      </ThemeContext.Provider>
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
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <p
      style={{ color: theme === 'dark' ? 'gray' : 'green' }}
    >{`${username}님 안녕하세요`}</p>
  );
}
