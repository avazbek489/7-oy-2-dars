import React, { useRef, useState } from "react";

function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const [username, setUsername] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;

    setUsername((prev) => [...prev, { name, email, age }]);

    nameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";
  }

  return (
    <>
      <form className="flex flex-col border-2 p-5 w-[600px] rounded-lg bg-sky-300 gap-3">
        <h1 className="text-3xl text-white text-center font-extrabold">FORM</h1>
        <input
          ref={nameRef}
          className="border focus:outline-none p-2 pl-5 rounded-lg w-full"
          type="text"
          placeholder="Ismingizni kiriting"
        />
        <input
          ref={emailRef}
          className="border focus:outline-none p-2 pl-5 rounded-lg w-full"
          type="email"
          placeholder="Emailingizni kiriting"
        />
        <input
          ref={ageRef}
          className="border focus:outline-none p-2 pl-5 rounded-lg w-full"
          type="number"
          placeholder="Yoshingizni kiriting"
        />
        <button onClick={handleClick} className="btn ">
          Submit
        </button>

        <div className="mt-3">
          {username.length > 0 &&
            username.map((e, index) => {
              return (
                <div
                  key={index}
                  className="bg-blue-100 mt-2 border rounded-lg flex flex-col items-center gap-1 py-2"
                >
                  <h3 className="text-xl font-semibold">Name: {e.name}</h3>
                  <h3 className="text-lg font-medium">Email: {e.email}</h3>
                  <h3 className="text-lg font-semibold">Age: {e.age}</h3>
                </div>
              );
            })}
        </div>
      </form>
    </>
  );
}

export default Form;
