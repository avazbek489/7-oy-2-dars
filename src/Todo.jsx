import React, { useEffect, useState } from "react";
import del from "./delete.svg";

function Todo() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    if (name) {
      setUsername([...username, { name, checked: false }]);
      localStorage.setItem(
        "todo",
        JSON.stringify([...username, { name, checked: false }])
      );
    }
    setName("");
  }

  useEffect(() => {
    const save = localStorage.getItem("todo");
    if (save) {
      setUsername(JSON.parse(save));
    }
  }, []);

  function handleDel(index) {
    const del = confirm("Rostdan ham shu task ni ochirasizmi?");
    if (del) {
      const filtUser = username.filter((e, i) => i != index);
      setUsername(filtUser);
      localStorage.setItem("todo", JSON.stringify(filtUser));
    }
  }

  function handleCheckbox(index) {
    const updatedTasks = username.map((el, i) =>
      i == index ? { ...el, checked: !el.checked } : el
    );
    setUsername(updatedTasks);
    localStorage.setItem("todo", JSON.stringify(updatedTasks));
  }

  const comTodo = username.filter((e) => e.checked).length;
  const prog = username.length ? (comTodo / username.length) * 100 : 0;

  return (
    <>
      <div className="p-5 w-[600px] bg-blue-400 rounded-xl mt-3 mx-auto">
        <h1 className="text-white text-3xl text-center font-bold">ToDo List</h1>
        <form className="flex mt-4 items-center gap-4">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="border border-[#789] p-2 pl-5 focus:outline-none rounded-lg w-full"
            placeholder="ToDo ni kiriting"
          />
          <button
            className="btn btn-sm w-[80px] h-[40px] bg-green-500 border-none text-white hover:bg-green-600"
            onClick={handleClick}
          >
            Add+
          </button>
        </form>
        {username.length > 0 &&
          username.map((e, index) => (
            <div
              key={index}
              className="border pt-3 bg-slate-200 mt-4 w-full h-[40px] rounded-md flex items-center justify-between px-4"
            >
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  checked={e.checked}
                  onChange={() => handleCheckbox(index)}
                  className="checkbox border-2 border-black"
                />
                <h6
                  className={`${
                    e.checked ? "line-through" : ""
                  } overflow-x-auto w-[400px] h-10 overflow-y-auto`}
                >
                  {e.name}
                </h6>
              </div>
              <button
                className="mb-3"
                onClick={() => {
                  handleDel(index);
                }}
              >
                <img src={del} alt="" />
              </button>
            </div>
          ))}
        {username.length > 0 && (
          <div className="w-full bg-gray-200 h-4 rounded mt-4">
            <div
              style={{ width: `${prog}%` }}
              className="bg-green-500 h-4 rounded"
            ></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
