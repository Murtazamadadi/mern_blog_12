import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  currentUser:null,
  error:null,
  loading:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
        state.loading=true
        state.error=false
    },
    signInSuccess: (state,action) => {
      state.currentUser=action.payload
      state.error=null
      state.loading=false
    },
    signInFailure: (state,action) => {
      state.error=action.payload
      state.loading=false
    },
    updateStart:(state)=>{
      state.loading=true
      state.error=false
    },
    updateSucess:(state,action)=>{
      state.currentUser=action.payload
      state.loading=false
      state.error=null
    },
    updateFailure:(state,action)=>{
      state.error=action.payload
      state.loading=false
    }
  },
})

export const { signInStart,signInSuccess,signInFailure,updateStart,updateSucess,updateFailure } = userSlice.actions
export default userSlice.reducer