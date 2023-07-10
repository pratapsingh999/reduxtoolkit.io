import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import './UserDetails.css';
import { fakeUserData } from '../api';
import {useDispatch} from "react-redux";
import { addUser } from '../store/slice/userSlice';
import DisplayUsers from './DisplayUsers';

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser =(name) => {
         console.log(name);
         dispatch(addUser(name));
    }
  return (
    <>
        <div className="content">
            <div className="admin-table">
                <div className="admin-subtitel">List of user Details</div>
                <button className='btn add-btn' onClick={()=>addNewUser(fakeUserData())}>Add New Users</button>
            </div>
            <ul className='list'>
                <DisplayUsers/>
            </ul>
            <hr />
            <DeleteAllUser/>
        </div>
    </>
  );
};


export default UserDetails;




