import { DataTable, Box, Text, Select } from "grommet";
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
];

function Dropdown({ options }) {
  const [value, setValue] = useState(options[0]);

  return (
    <Select
      options={options}
      value={value}
      onChange={({ option }) => setValue(option)}
    />
  );
}

export default function ProgramTable({day}) {
  console.log(day.plan[0].movement);
  const tableData = [
    {
      name: day.plan[0].movement,
      Exercise:
      (
        <Dropdown
          options={[day.plan[0].exercise[0],day.plan[0].exercise[1],day.plan[0].exercise[2],
          ]}
        />
      ),
      Sets: "3",
      Reps: "5",
      Load: "",
    },
    {
      name: "Deadlift Variation",
      Exercise: (
        <Dropdown
          options={[
            "Conventional Deadlift",
            "Romanian Deadlift",
            "Good Mornings",
          ]}
        />
      ),
      Sets: "3",
      Reps: "5",
      Load: "",
    },
    {
      name: " Single Leg Variation",
      Exercise: (
        <Dropdown options={["Bulgarian Split Squats", "Lunges", "Step Up"]} />
      ),
      Sets: "3",
      Reps: "8",
      Load: "",
    },
  ];
  return (
    <>
      <Box align="center">
        Day {day.day}
        <DataTable
          alignSelf="center"
          background="white"
          margin="medium"
          border="top"
          size="small"
          columns={columns}
          data={tableData}
        />
      </Box>
    </>
  );
}
