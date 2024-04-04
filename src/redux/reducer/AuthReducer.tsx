import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	stepTwo?: string;
	stepThree?: string;
}

const authState: AuthState = {
	stepTwo: "",
	stepThree: "",
};

export const authAdoption = createSlice({
	name: "auth",
	initialState: authState,
	reducers: {
		setStepTwo: (state, action) => {
			state.stepTwo = action.payload;
		},
		setStepThree: (state, action) => {
			state.stepThree = action.payload;
		},
	},
});

export const { setStepTwo, setStepThree } = authAdoption.actions;
export default authAdoption.reducer;
