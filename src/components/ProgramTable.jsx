import {
  DataTable,
  Box,
  Text,
  Select,
  FormField,
  TextInput,
  Tip
} from "grommet";
import { useState, useEffect } from "react";

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


// export default function handleWeight() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("")
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data);
//     })
//     .catch((err) => console.log(err));
//   }, []);

//   return (

//   )
// }


function Dropdown({ setChangedValue, options, user, setLoadOne, movement1ExerciseValue }) {
  const [value, setValue] = useState(options[0]);

  function handleChange(option) {
    setValue(option);
    setChangedValue(options.indexOf(option));
    
    
    if(user) setLoadOne(user[1][0].exercise[movement1ExerciseValue].weight)
    // console.log('selected option', {options, option})
      
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


export default function ProgramTable({ day, user, setUser }) {
  // console.log(day.movements[0].sets);
  // console.log('ProgramTable', user)
  const [movement1ExerciseValue, setMovement1ExerciseValue] = useState(0);
  const [movement2ExerciseValue, setMovement2ExerciseValue] = useState(0);
  const [movement3ExerciseValue, setMovement3ExerciseValue] = useState(0);
  const [loadOne, setLoadOne] = useState();

  // console.log({loadOne})
  const handleChange = (obj,e) =>{
    let user1 = {...user}
    user1.days[day.day-1].movements[obj.movements].exercise[obj.exercise].weight = e.target.value
    setUser(user1)
  }

  const changeWeight = (obj, e) =>{
    // console.log('CURRENT OBJ', obj)
    
    // changeWeight({day, movements: 0, exercise: movement1ExerciseValue }, e)}


    // const movementsArray = obj.day.movements
    // console.log(day.day)
    // console.log(obj.movements)
    // console.log(obj.exercise)
    console.log(day.movements[0].exercise[movement1ExerciseValue].weight)

    user.days[day.day-1].movements[obj.movements].exercise[obj.exercise].weight = e.target.value


    // fetch('https://program-builder-api.web.app/users',
    // fetch("http://127.0.0.1:4050/users",
  
  console.log({user})

    fetch(`http://127.0.0.1:4050/users/${user._id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
      .then((data) => {
        // setLoadOne(data)
      })
    .catch(console.error)
  }

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
            onBlur={(e)=> changeWeight({day, movements: 0, exercise: movement1ExerciseValue }, e)}
            onChange={(e)=> handleChange({day, movements: 0, exercise: movement1ExerciseValue}, e) }
            // placeholder={String(loadOne)}
            value={day.movements[0].exercise[movement1ExerciseValue].weight}
            
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
          onBlur={(e)=> changeWeight({day, movements: 1, exercise: movement2ExerciseValue }, e)}
          onChange={(e)=> handleChange({day, movements: 1, exercise: movement2ExerciseValue}, e) }
          value={day.movements[1].exercise[movement2ExerciseValue].weight}
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
          onBlur={(e)=> changeWeight({day, movements: 2, exercise: movement3ExerciseValue }, e)}
          onChange={(e)=> handleChange({day, movements: 2, exercise: movement3ExerciseValue}, e) }
          value={day.movements[2].exercise[movement3ExerciseValue].weight}
          />
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

          // border={{
          //   color: "tableBorder",
          //   side: "vertical, side",
          //   size: ".5px",
          // }}
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
