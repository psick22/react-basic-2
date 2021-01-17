import React, { useState } from 'react';
import useOnMounted from './useOnMounted';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
function Profile({ userId }) {
  const [user, setUser] = useState();
  useOnMounted(() => fetchUser(userId).then(data => setUser(data)));

  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, []);

  // ...
}

function fetchUser() {}
