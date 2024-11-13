import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser }  from './redux/userSlice';
import { Input } from './components/Input'
import './App.css';

 function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      const {login, name, followers, public_repos, avatar_url} = data
      dispatch(getUser({login, name, followers, public_repos, avatar_url}))
    });
    }
  }, [username]);
  
  return (
  <>
  <div>
    <ul>
    <img src={user.avatar} alt={user.name}></img>
      <li>Name: {user.name}</li>
      <li>Username: {user.username}</li>
      <li>Followers: {user.followers}</li>
      <li>Public repos: {user.publicRepos}</li>
    </ul>
  </div>
    <Input />
  </>
  );
}

export default App;
