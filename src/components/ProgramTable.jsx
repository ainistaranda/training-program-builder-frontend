import {
  DataTable,
  Box,
  Text,
  Select,
  FormField,
  TextInput,
  Form,
} from "grommet";
import { useState } from "react";

const columns = [
  {
    property: "name",
    header: <Text>Movement Pattern</Text>,
    primary: true,
  },
  {
    property: "Exercise",
    header: "Exercise",
  },
  {
    property: "Sets",
    header: "Sets",
  },
  {
    property: "Reps",
    header: "Reps",
  },
  {
    property: "Load",
    header: "Load",
  },
  {
    property: "RPE",
    header: "RPE",
  },
];

function Dropdown({ setChangedValue, options }) {
  const [value, setValue] = useState(options[0]);

  function handleChange(option) {
    setValue(option);
    setChangedValue(options.indexOf(option));
    console.log(options.indexOf(option));
  }
  return (
    <Select
      size="small"
      options={options}
      value={value}
      onChange={({ option }) => handleChange(option)}
    />
  );
}

// function loadInput() {
//   const [load, setLoad]
// }

export default function ProgramTable({ day }) {
  // console.log(day.movements[0].sets);
  const [movement1ExerciseValue, setMovement1ExerciseValue] = useState(0);
  const [movement2ExerciseValue, setMovement2ExerciseValue] = useState(0);
  const [movement3ExerciseValue, setMovement3ExerciseValue] = useState(0);
  const tableData = [
    {
      name: day.movements[0].movement,
      Exercise: (
        <Dropdown
          setChangedValue={setMovement1ExerciseValue}
          options={[
            day.movements[0].exercise[0].name,
            day.movements[0].exercise[1].name,
            day.movements[0].exercise[2].name,
          ]}
        />
      ),
      Sets: day.movements[0].exercise[movement1ExerciseValue].sets,
      Reps: day.movements[0].exercise[movement1ExerciseValue].reps,
      Load: (
        <FormField>
          <TextInput
            placeholder="lb/kg"
            // onChange=
          />
        </FormField>
      ),
      RPE: day.movements[0].exercise[movement1ExerciseValue].rpe,
    },
    {
      name: day.movements[1].movement,
      Exercise: (
        <Dropdown
          setChangedValue={setMovement2ExerciseValue}
          options={[
            day.movements[1].exercise[0],
            day.movements[1].exercise[1],
            day.movements[1].exercise[2],
          ]}
        />
      ),
      Sets: day.movements[1].exercise[movement2ExerciseValue].sets,
      Reps: day.movements[1].exercise[movement2ExerciseValue].reps,
      Load: (
        <FormField>
          <TextInput placeholder="lb/kg" />
        </FormField>
      ),
      RPE: day.movements[1].exercise[movement2ExerciseValue].rpe,
    },
    {
      name: day.movements[2].movement,
      Exercise: (
        <Dropdown
          setChangedValue={setMovement3ExerciseValue}
          options={[
            day.movements[2].exercise[0],
            day.movements[2].exercise[1],
            day.movements[2].exercise[2],
          ]}
        />
      ),
      Sets: day.movements[2].exercise[movement3ExerciseValue].sets,
      Reps: day.movements[2].exercise[movement3ExerciseValue].reps,
      Load: (
        <FormField>
          <TextInput placeholder="lb/kg" />
        </FormField>
      ),
      RPE: day.movements[2].exercise[movement3ExerciseValue].rpe,
    },
  ];
  return (
    <>
      <Box
        align="center"
        background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
        margin="10px 0px 0px 0px"
        round="small"
        pad="small"
      >
        Day {day.day}
        <DataTable
          alignSelf="center"
          background="black"
          margin="small"
          // border="top, side"
          // size="large"
          border={{
            color: "tableBorder",
            side: "vertical, side",
            size: ".5px",
          }}
          columns={columns}
          data={tableData}
        />
      </Box>
    </>
  );
}

// {
//   name: day.movements[2].movement,
//   Exercise:
//   (
//     <Dropdown
//     options={[day.movements[3].exercise[0],day.movements[3].exercise[1],day.movements[3].exercise[2],
//     ]}
//     />
//   ),
//   Sets: day.movements[2].exercise[0].sets,
//   Reps: day.movements[2].exercise[0].reps,
//   Load: "",
//   RPE: day.movements[2].exercise[0].rpe
// },

// {
//   name: "Deadlift Variation",
//   Exercise: (
//     <Dropdown
//       options={[
//         "Conventional Deadlift",
//         "Romanian Deadlift",
//         "Good Mornings",
//       ]}
//     />
//   ),
//   Sets: "3",
//   Reps: "5",
//   Load: "",
// },
// {
//   name: " Single Leg Variation",
//   Exercise: (
//     <Dropdown options={["Bulgarian Split Squats", "Lunges", "Step Up"]} />
//   ),
//   Sets: "3",
//   Reps: "8",
//   Load: "",
// },
