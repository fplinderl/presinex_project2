import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../Firebase/conect';
export const login = createAsyncThunk('users/login', async (payload) => {
	var data;
	await auth
		.signInWithEmailAndPassword(payload.email, payload.password)
		.then((userCredential) => {
			data = userCredential.user;
			localStorage.setItem('user_email', data.email);
		})
		.catch((error) => {
			data = error;
		});
	if (data.message) return { message: data.message, code: data.code };
	else return { email: data.email };
});
const userSlice = createSlice({
	name: 'user',
	initialState: {
		current: { email: localStorage.getItem('user_email') } || {},
		settings: {},
	},
	reducers: {
		logout(state) {
			localStorage.removeItem('user_email');
			state.current = {};
		},
	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.current = action.payload;
		},
	},
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
