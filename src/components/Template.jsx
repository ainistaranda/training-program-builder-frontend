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

{
  /* })} */
}
{
  /* <Box align="center">
  Day 2
  <DataTable
  background="white"
  margin="small"
  border="top"
  size="small"
  columns={columns}
  data={day2Data}
  />
  </Box>
  <Box align="center">
  Day 3
  <DataTable
  background="white"
  margin="small"
  border="top"
  size="small"
  columns={columns}
  data={day3Data}
  />
  </Box>
  <Box align="center">
  Day 4
  <DataTable
  background="white"
  margin="small"
  border="top"
  size="small"
  columns={columns}
  data={day4Data}
  />
</Box> */
}
// const data = [
//   {
//     name: 'Squat variation',
//     Exercise: <Dropdown options={['back Squat', 'front squat', 'goblet squat']} />,
//     Sets: "3",
//     Reps: "5",
//     Load: "",
//   },
//   {
//     name: "Deadlift Variation",
//     Exercise: <Dropdown options={['Conventional Deadlift', 'Romanian Deadlift', 'Good Mornings']} />,
//     Sets: "3",
//     Reps: "5",
//     Load: "",
//   },
//   {
//     name: " Single Leg Variation",
//     Exercise: <Dropdown options={['Bulgarian Split Squats', 'Lunges', 'Step Up']} />,
//     Sets: "3",
//     Reps: "8",
//     Load: "",
//   },
// ];

// const day2Data = [
//   {
//     name: "Horizontal Push",
//     Exercise: "",
//     Sets: "3",
//     Reps: "5",
//     Load: "",
//   },
//   {
//     name: "Horizontal Pull",
//     Exercise: "",
//     Sets: "3",
//     Reps: "5",
//     Load: "",
//   },
//   {
//     name: "Vertical Push",
//     Exercise: "",
//     Sets: "2",
//     Reps: "8",
//     Load: "",
//   },
//   {
//     name: "Vertical Pull",
//     Exercise: "",
//     Sets: "2",
//     Reps: "8",
//     Load: "",
//   },
//   {
//     name: "Flys",
//     Exercise: "",
//     Sets: "2",
//     Reps: "15",
//     Load: "",
//   },
// ];
// const day3Data = [
//   {
//     name: "Hip Hinge Variation",
//     Exercise: "",
//     Sets: "3",
//     Reps: "8",
//     Load: "",
//   },

//   {
//     name: "Leg Press Variation",
//     Exercise: "",
//     Sets: "3",
//     Reps: "8",
//     Load: "",
//   },
//   {
//     name: "Leg Extension",
//     Exercise: "",
//     Sets: "3",
//     Reps: "12",
//     Load: "",
//   },
//   {
//     name: "Leg Curl",
//     Exercise: "",
//     Sets: "3",
//     Reps: "12",
//     Load: "",
//   },
// ];
// const day4Data = [
//   {
//     name: "Horizontal Push",
//     Exercise: "",
//     Sets: "3",
//     Reps: "10",
//     Load: "",
//   },
//   {
//     name: "Horizontal Pull",
//     Exercise: "",
//     Sets: "3",
//     Reps: "10",
//     Load: "",
//   },
//   {
//     name: "Incline Push",
//     Exercise: "",
//     Sets: "2",
//     Reps: "12",
//     Load: "",
//   },
//   {
//     name: "Vertical Pull",
//     Exercise: "",
//     Sets: "2",
//     Reps: "12",
//     Load: "",
//   },
//   {
//     name: "Triceps",
//     Exercise: "",
//     Sets: "2",
//     Reps: "12",
//     Load: "",
//   },
//   {
//     name: "Biceps",
//     Exercise: "",
//     Sets: "2",
//     Reps: "12",
//     Load: "",
//   },
// ];
