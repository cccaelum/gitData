import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../redux/userSlice';

export function Input({username}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.login);
    return (
        <input
          type="text"
          value={username}
          onChange={(e) => dispatch(getUser(e.target.value))}
        />
      );
}
