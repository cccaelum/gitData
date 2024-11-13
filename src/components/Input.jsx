import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUsername } from '../redux/userSlice';

export function Input() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    return (
        <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={() => dispatch(changeUsername(username))}>Search</button>
        </div>
      );
}
