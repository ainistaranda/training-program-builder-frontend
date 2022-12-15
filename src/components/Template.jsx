import { CheckBox } from "grommet";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProgramTable from "./ProgramTable";

export default function Template({ user, setUser }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log("template", user);
  // useEffect(() => {
  //   // fetch("https://program-builder-api.web.app/program")
  //   fetch(`http://127.0.0.1:4050/users/${user[0]._id}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setData(data[0]);
  //   })
  //   .catch((err) => console.log(err));
  // }, []);


  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      {user &&
        user.days.map((day, index) => {
          return (
            <ProgramTable setUser={setUser} user={user} key={index} day={day} />
          );
        })}
    </>
  );
}

