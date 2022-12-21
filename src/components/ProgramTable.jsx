import {
  DataTable,
  Box,
  Text,
  Select,
  FormField,
  TextInput,
  CheckBox,
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

function Example() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      checked={checked}
      label="DONE"
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

function Dropdown({
  setChangedValue,
  options,
  user,
  setLoadOne,
  movement1ExerciseValue,
}) {
  const [value, setValue] = useState(options[0]);

  function handleChange(option) {
    setValue(option);
    setChangedValue(options.indexOf(option));
    if (user) setLoadOne(user[1][0].exercise[movement1ExerciseValue].weight);
  }

  return (
    <Select
      size="xsmall"
      options={options}
      value={value}
      onChange={({ option }) => handleChange(option)}
    />
  );
}

export default function ProgramTable({ day, user, setUser }) {
  const [movement1ExerciseValue, setMovement1ExerciseValue] = useState(0);
  const [movement2ExerciseValue, setMovement2ExerciseValue] = useState(0);
  const [movement3ExerciseValue, setMovement3ExerciseValue] = useState(0);
  const [loadOne, setLoadOne] = useState();

  const handleChange = (obj, e) => {
    let user1 = { ...user };
    user1.days[day.day - 1].movements[obj.movements].exercise[
      obj.exercise
    ].weight = e.target.value;
    setUser(user1);
  };

  const changeWeight = (obj, e) => {
    console.log(day.movements[0].exercise[movement1ExerciseValue].weight);

    user.days[day.day - 1].movements[obj.movements].exercise[
      obj.exercise
    ].weight = e.target.value;
    console.log({ user });
    fetch(`http://127.0.0.1:4050/users/${user._id}`, {
      // fetch(`https://program-builder-api.web.app/users/${user._id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
      })
      .catch(console.error);
  };

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
            onBlur={(e) =>
              changeWeight(
                { day, movements: 0, exercise: movement1ExerciseValue },
                e
              )
            }
            onChange={(e) =>
              handleChange(
                { day, movements: 0, exercise: movement1ExerciseValue },
                e
              )
            }
            value={day.movements[0].exercise[movement1ExerciseValue].weight}
            placeholder="lb/kg"
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
          user={user}
          setLoadOne={setLoadOne}
          movement1ExerciseValue={movement1ExerciseValue}
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
          <TextInput
            onBlur={(e) =>
              changeWeight(
                { day, movements: 1, exercise: movement2ExerciseValue },
                e
              )
            }
            onChange={(e) =>
              handleChange(
                { day, movements: 1, exercise: movement2ExerciseValue },
                e
              )
            }
            value={day.movements[1].exercise[movement2ExerciseValue].weight}
            placeholder="lb/kg"
          />
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
          <TextInput
            onBlur={(e) =>
              changeWeight(
                { day, movements: 2, exercise: movement3ExerciseValue },
                e
              )
            }
            onChange={(e) =>
              handleChange(
                { day, movements: 2, exercise: movement3ExerciseValue },
                e
              )
            }
            value={day.movements[2].exercise[movement3ExerciseValue].weight}
            placeholder="lb/kg"
          />
        </FormField>
      ),
      RPE: day.movements[2].exercise[movement3ExerciseValue].rpe,
    },
  ];

  return (
    <div className="program-container">
      <Box
        className="program-card"
        align="center"
        margin="10px 0px 0px 0px"
        round="small"
        pad="small"
      >
        Day {day.day}
        <DataTable
          alignSelf="center"
          background="black"
          margin="small"
          columns={columns}
          data={tableData}
        />
        <Example />
      </Box>
    </div>
  );
}
