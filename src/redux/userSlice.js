import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    username: null,
    followers: null,
    publicRepos: null,
    avatar: null
  };

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            const {login, name, followers, public_repos, avatar_url} = action.payload;
            
            state.name = name;
            state.username = login;
            state.followers = followers;
            state.publicRepos = public_repos;
            state.avatar = avatar_url;
        },
        changeUsername: (state, action) => {
            state.username = action.payload; 
          },
    }
  })

  export const {getUser, changeUsername} = userSlice.actions
  export default userSlice.reducer;