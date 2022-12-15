import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  TextInput,
  Menu,
  Card,
  CardHeader,
  CardBody,
  FormField,
  CardFooter,
} from "grommet";

export default function ProgramForm({ value, setUser }) {
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
    // fetch('https://program-builder-api.web.app/users', {
    fetch("http://127.0.0.1:4050/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("SIGNUP DATA", data);
        setUser(data);
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
    <div className="signup-container">
      <Card
        margin="20px"
        flex="grow"
        height="small"
        width="medium"
        background="light-6"
      >
        <CardHeader justify="center" pad="small">
          Sign Up
        </CardHeader>
        <CardBody pad="large">
          <Form
            action="submit"
            value={form}
            onChange={(nextValue) => setForm(nextValue)}
            onReset={() => setForm({})}
            onSubmit={handleFormSubmit}
          >
            <FormField label="Email" type="email" name="email">
              <TextInput
                label="Email"
                type="email"
                name="email"
                value={form.email}
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid email address",
                  },
                ]}
              />
            </FormField>
            <FormField label="Password">
              <TextInput
                label="Password"
                type="password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
                value={form.password}
              />
            </FormField>
            <Menu
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
            {form?.goal && <p className="signup-choice">{form?.goal}</p>}
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
            {form?.days && <p className="signup-choice">{form?.days} days</p>}
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
            {form?.experience && (
              <p className="signup-choice">{form?.experience}</p>
            )}
            <CardFooter direction="row" gap="medium" alignSelf="center">
              <Button
                color={"#F8B819"}
                primary
                type="submit"
                label="Submit"
              />
              <Button color={"#2D55A6"} type="reset" label="Reset" />
            </CardFooter>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
