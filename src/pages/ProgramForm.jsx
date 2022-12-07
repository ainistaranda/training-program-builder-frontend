import { useState, Link } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grommet,
  Form,
  Button,
  TextInput,
  Box,
  Menu,
  Card,
  CardHeader,
  CardBody,
  FormField,
  CardFooter,
} from "grommet";

export default function ProgramForm({ value }) {
  const [form, setForm] = useState({});
  const [days, setDays] = useState();
  const [goal, setGoal] = useState();
  // const [experience, setExperience] = useState();

  const handleDropdown = (prop, label) => {
    //setGoal('Strength')
    setForm({ ...form, [prop]: label });
  };

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    console.log("form", form);
    // fetch('https://program-builder-api.web.app/users',
    fetch("http://127.0.0.1:4050/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        navigate("/trainingprogram");
      })
      .catch((err) => console.error(err));
  };

  // const handleForm = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   setForm({ ...form, [e.target.name]: e.target.value, value });
  // };

  return (
    <Card margin='20px' flex="grow" height="small" width="medium" background="light-6">
      <CardHeader pad="medium">sign up</CardHeader>
      <CardBody pad="large">
        <Form
          action="submit"
          value={form}
          onChange={(nextValue) => setForm(nextValue)}
          onReset={() => setForm({})}
          onSubmit={handleFormSubmit}
        >
          <FormField label="email">
            <TextInput
              name="email"
              value={form.email}
              // onChange={handleForm}
            />
          </FormField>
          <FormField label="Password">
            <TextInput
              name="password"
              value={form.password}
              type="password"
              // onChange={handleForm}
            />
          </FormField>
          <Menu
            // onChange={handleForm}
            // name="goal"
            hoverIndicator
            value={form.goal}
            label="Goal"
            items={[
              {
                label: "Hypertrophy",
                onClick: () => {
                  handleDropdown("goal", "Hypertrophy");
                },
              },
              {
                label: "Strength",
                onClick: () => {
                  handleDropdown("goal", "Strength");
                },
              },
            ]}
          />
          {form?.goal && <p>{form?.goal}</p>}
          <Menu
            hoverIndicator
            label="Number of Days Per Week"
            items={[
              {
                label: "3",
                onClick: () => {
                  handleDropdown("days", "3");
                },
              },
              {
                label: "4",
                onClick: () => {
                  handleDropdown("days", "4");
                },
              },
            ]}
          />
          {form?.days && <p>{form?.days} days</p>}
          <Menu
            hoverIndicator
            label="Training Experience"
            items={[
              {
                label: "Novice",
                onClick: () => {
                  handleDropdown("experience", "Novice");
                },
              },
              {
                label: "Intermediate",
                onClick: () => {
                  handleDropdown("experience", "Intermediate");
                },
              },
            ]}
          />
          {form?.experience && <p>{form?.experience}</p>}
          <CardFooter direction="row" gap="medium" alignSelf="center">
            <Button
              primary
              type="submit"
              // onClick={handleFormSubmit}
              label="Submit"
            />
            <Button type="reset" label="Reset" />
          </CardFooter>
        </Form>
      </CardBody>
    </Card>
  );
}
