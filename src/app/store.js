import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Components/login/userSlice';
const rootReducer = {
	user: userReducer,
};
const store = configureStore({
	reducer: rootReducer,
});
export default store;
