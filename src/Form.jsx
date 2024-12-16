import React, { useEffect, useRef, useState } from "react";
import del from "./delete.svg";

function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const [username, setUsername] = useState([]);

  useEffect(() => {
    const save = localStorage.getItem("username");
    if (save) {
      setUsername(JSON.parse(save));
    }
  }, []);

  function validate() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    if (name.length <= 2) {
      alert("Ism kamida 3ta belgidan iborat bolishi kerak");
      return false;
    }
    if (email.length <= 3) {
      alert("Email kamida 4ta belgidan iborat bolishi shart");
      return false;
    }
    if (!email.includes("@")) {
      alert("Email notogri kiritilgan! Emailda '@' bolishi shart! ");
      return false;
    }
    if (!email.includes(".com")) {
      alert("Email notogri kiritilgan! Emailda '.com' bolishi shart!");
    }
    if (age < 5) {
      alert("Yosh kamida 5da bolishi shart!");
      return false;
    }
    if (age > 120) {
      alert("Yosh juda katta kopi blan 120 gacha kiriting!");
      return false;
    }
    return true;
  }

  function handleDelete(index) {
    const delConf = confirm("Rostdan ham shuni ochirmoqchimisiz???");
    if (delConf) {
      const remove = username.filter((e, i) => i != index);
      localStorage.setItem("username", JSON.stringify(remove));
      setUsername(remove);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const isvalid = validate();
    if (!isvalid) return;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;

    const general = [...username, { name, email, age }];
    localStorage.setItem("username", JSON.stringify(general));

    setUsername(general);

    nameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";
  }

  return (
    <>
      <form className="mx-auto flex flex-col border-2 p-5 w-[600px] rounded-lg bg-sky-300 gap-3">
        <h1 className="text-3xl text-white text-center font-extrabold">FORM</h1>
        <input
          required
          ref={nameRef}
          className="border focus:outline-none p-2 pl-5 rounded-lg w-full"
          type="text"
          placeholder="Ismingizni kiriting"
        />
        <input
          required
          ref={emailRef}
          className="border focus:outline-none p-2 pl-5 rounded-lg w-full"
          type="email"
          placeholder="Emailingizni kiriting"
        />
        <input
          required
          ref={ageRef}
          className="border focus:outline-none p-2 pl-5 rounded-lg w-full"
          type="number"
          placeholder="Yoshingizni kiriting"
        />
        <button onClick={handleClick} className="btn no-animation">
          Submit
        </button>

        <div className="mt-3">
          {username.length > 0 &&
            username.map((e, index) => {
              return (
                <div
                  key={index}
                  className="bg-blue-100 mt-3 border rounded-lg flex flex-col items-center gap-1 py-2"
                >
                  <h3 className="text-xl font-semibold">Name: {e.name}</h3>
                  <h3 className="text-lg font-medium">Email: {e.email}</h3>
                  <h3 className="text-lg font-semibold">Age: {e.age}</h3>
                  <button onClick={() => handleDelete(index)} className="mt-2">
                    <img src={del} alt="" />
                  </button>
                </div>
              );
            })}
        </div>
      </form>
    </>
  );
}

export default Form;
