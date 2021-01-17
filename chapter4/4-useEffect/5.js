useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);

useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);
