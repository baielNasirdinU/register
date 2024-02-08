import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLoading:false,
    loggedIn:false,
    user:null ,
    error:null 
}

export const authSlice=createSlice({
    name:'authslice',
    initialState,
    reducers:{
        loginUserStart:state=>{
        state.isLoading=true
        },
        loginUserSuccess:state=>{
            state.loggedIn=true
            state.isLoading=false
        },
        loginUserFail:state=>{


        },
        //register
 
        registerUserStart:state=>{
        state.isLoading=true
        },
        registerUserSuccess:state=>{
            state.loggedIn=true
            state.isLoading=false
        },
        registerUserFail:state=>{
            state.error='error'
            state.isLoading=false
            
        }
    }


    
})
export const{loginUserStart,loginUserSuccess,loginUserFail, registerUserStart,registerUserSuccess,registerUserFail}=authSlice.actions

export default authSlice.reducer