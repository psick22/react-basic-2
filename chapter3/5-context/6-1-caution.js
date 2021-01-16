import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({ username: 'unknwon', age: 0 });

export default function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  return (
    <div>
      <UserContext.Provider value={{ username, age }}>
        <Profile />
      </UserContext.Provider>
    </div>
  );
}
