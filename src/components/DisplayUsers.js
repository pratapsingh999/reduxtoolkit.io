import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import { removeUser } from '../store/slice/userSlice';



function DisplayUsers() {

    const dispatch = useDispatch();

    const data = useSelector((state) =>{
       return state.users;
    })
    console.log(data);

    const deteleUser = (id) => {
        dispatch(removeUser(id))
    }
    // const deteleUser = (user) => {
    //     dispatch(removeUser(user))
    // }

  return (
    data.map((user,id)=>{
   return <li key={id}>
          {user}
   <button className='delete-btn' onClick={() => deteleUser(id)}>
    <AiTwotoneDelete className="delete-icon"/>
   </button>
   </li>
    })
  )
}

export default DisplayUsers; 