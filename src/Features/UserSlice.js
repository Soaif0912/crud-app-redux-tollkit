import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Soaif"},
    {id: 2, name: "Joki"},
    {id: 3, name: "Falkon"},
    {id: 4, name: "Josep"}
];

const userSlice = createSlice({

    name: "users",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.push(action.payload);
        },
        updateUser:(state, action)=>{
            let {id, newName} = action.payload;
            let exitingUser = state.find(user=> user.id === id);
            if(exitingUser){
                exitingUser.name = newName;
            }
        },
        removeUser:(state, action)=>{
            return state.filter(user=> user.id !== action.payload.id);
        }
    }
})

export const selectAllUsers = (state)=> state.users;

export const {addUser, updateUser, removeUser} = userSlice.actions;

export default userSlice.reducer;