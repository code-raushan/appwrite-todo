import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { database } from '../appwrite/appwrite'

const TodoForm = () => {
  const [todo, setTodo]=useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const promise = database.createDocument("6391c36ae492700a2489", "6391c452b3e4a3a0ab97", uuidv4(), {
      todo
    });
    promise.then(function(res){
      console.log(res);
    }, function(err){
      console.log(err)
    })
    window.location.reload()
    //e.target.reset()
  }
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        className="flex justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e)=>{
            setTodo(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm