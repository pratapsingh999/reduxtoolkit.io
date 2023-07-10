import React from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import { clearAllUsers } from '../store/slice/userSlice';


function DeleteAllUser() {

  const dispatch = useDispatch();


  const deleteUsers = () =>{
    // console.log("hi");
    dispatch(clearAllUsers());
  }

  return (
    <>
    <Wrapper>
      <button className=' btn Clear-btn' onClick={()=>deleteUsers()}>Clear users</button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.Clear-btn{
  text-transform : capitalize;
  background-color : #bd338a;
  margin-top : 3rem;
  margin-left : 60rem;
}x`


export default DeleteAllUser