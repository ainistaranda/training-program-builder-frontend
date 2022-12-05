import React, { useEffect, useState } from "react";
import {
  DropButton,
  DataTable,
  Box,
  Text,
  Button,
  Heading,
  Select,
} from "grommet";
import PropTypes from "prop-types";
import { Close } from "grommet-icons";
import ProgramTable from "./ProgramTable";

export default function Template() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    // fetch("https://program-builder-api.web.app/program")
    fetch("http://127.0.0.1:4050/program")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => console.log(err));
  }, []);
  
  console.log({ data });
  
  return (
    <>
      {data.map((day, index) => {
        return <ProgramTable key={index} day={day} />;
      })}

    </>
  );
}

{/* })} */}
{/* <Box align="center">
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
</Box> */}
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