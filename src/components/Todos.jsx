import React, { useState, useEffect } from "react";
import { database } from "../appwrite/appwrite";

const Todos = () => {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTodos = database.listDocuments(
      "6391c36ae492700a2489",
      "6391c452b3e4a3a0ab97"
    );

    getTodos.then(
      function (res) {
        setTodos(res.documents);
      },
      function (error) {
        console.log(error);
      }
    );
    setLoader(false);
  }, []);
  const deleteTodo = (id)=>{
    const promise = database.deleteDocument("6391c36ae492700a2489",
    "6391c452b3e4a3a0ab97", id);

    promise.then(function(res){
      console.log(res.listDocuments)
    },function(error){
      console.log(error);
    })
    window.location.reload()
  }
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos &&
            todos.map((item) => (
              <div key={item.$id}>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span className="text-red-400 cursor-pointer"
                     onClick={()=>{
                      deleteTodo(item.$id)
                     }}>Delete</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Todos;
