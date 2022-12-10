import { Card, FormField, Form, Button, CardFooter } from "grommet";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate()

  const handleFormSubmit = (form) => {
    let stop

    fetch("http://127.0.0.1:4050/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    })
      .then((response) => {
        if(response.status === 401){
          alert('Invalid user or password');
          stop = true
        }
        return response.json()
      })
      .then((data) => { 
        if(!stop){  
          // console.log({data})
          setUser(data[0]);
          const userId = data[0]
          localStorage.setItem("userId", userId)
          navigate('/trainingprogram')
        }
      })
      .catch(alert);
  };

  return (
    <Card
      margin="20px"
      flex="grow"
      height="large"
      width="medium"
      background="light-6"
    >
      <h1>Login</h1>
      <Form
        // onChange={handleFormSubmit}
        onSubmit={handleFormSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <FormField
          // onChange={handleFormSubmit}
          label="Email"
          type="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter a valid email address",
            },
          ]}
        ></FormField>
        <FormField
          // onChange={handleFormSubmit}
          label="Password"
          type='password'
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        ></FormField>
        <br />
        <CardFooter>
          <Button type="submit">
            Login
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
