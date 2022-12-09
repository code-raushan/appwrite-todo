import React, {useState,useEffect} from 'react'
import {account} from '../appwrite/appwrite'
import { useNavigate, Link } from 'react-router-dom'
import Todos from './Todos'
import TodoForm from './TodoForm'
const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails]=useState();

  useEffect(()=>{
    const getData = account.get();
    getData.then(
      function(res){
        setUserDetails(res)
        console.log(res)
      },
      function(error){
        console.log(error)
      }
    )
  }, [])

  const logout = async()=>{
    try {
      await account.deleteSession("current");
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
          <TodoForm/>
          <Todos/>
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  )
}

export default Profile