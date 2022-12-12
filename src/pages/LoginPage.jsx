import { Card, FormField, Form, Button, CardFooter, Box } from "grommet";
import { useNavigate } from "react-router-dom";


export default function Login({ setUser }) {
  const navigate = useNavigate()

  const handleFormSubmit = (form) => {
    let stop
    fetch('https://program-builder-api.web.app/login', {
    // fetch("http://127.0.0.1:4050/login", {
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
    <div className="card-container">

    <Card
    className="card"
    margin="20px"
    flex="grow"
    height={{ max: 'medium' }}
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
        <Box pad="30px" direction="row" justify="between" gap="medium">
        <Button color={"#F8B819"} type="submit" primary label="Login" />
        <Button color={"#2D55A6"} type="reset" label="Reset" />
      </Box>
      </Form>
    </Card>  
          </div>
  );
}
