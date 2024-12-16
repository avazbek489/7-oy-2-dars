import React, { useEffect, useState } from "react";
import { post } from "./axios";

function Api() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    post("users")
      .then((response) => {
        if (response.status == 200) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {users.length > 0 &&
          users.map((value, index) => {
            return (
              <div
                key={index}
                className="border p-4 w-[400px] rounded-xl bg-cyan-200 flex flex-col items-center "
              >
                <h1 className="text-2xl font-bold text-gray-900">
                  Name: {value.name}
                </h1>
                <h2 className="text-xl font-medium text-gray-800">
                  Username: {value.username}
                </h2>
                <h5 className="text-base text-gray-700">
                  Email: {value.email}
                </h5>
                <h2 className="text-base text-gray-700">
                  CompanyName: {value.company.name}
                </h2>
                <h6 className="text-base text-gray-700">
                  City: {value.address.city}
                </h6>
                <p className="text-base text-gray-700">Phone: {value.phone}</p>
                {value.website && (
                  <h3>
                    Website:
                    <a
                      href={`http://${value.website}`}
                      target="_blank"
                      className="text-teal-500"
                    >
                      {value.website}
                    </a>
                  </h3>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Api;
