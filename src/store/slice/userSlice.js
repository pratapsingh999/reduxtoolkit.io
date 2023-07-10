import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name :"user",
    initialState:[],
    reducers:{
       addUser(state , action ){
        state.push(action.payload);
        // console.log(action.payload);
       },

       removeUser(state , action){
        // let userIndeNum = state.indexOf(action.payload);
        // state.slice(userIndeNum , 1);
        state.splice(action.payload , 1);
        // console.log("hii" + action.payload); 
       },

       clearAllUsers(state , action){
        return [];
        // console.log("hi deleted");
       },

    },
});

console.log(userSlice);

export default userSlice.reducer;
export const {addUser,removeUser,clearAllUsers} = userSlice.actions ;
// export {userSlice};