// import { Card, FormField, Form, Button, CardFooter } from "grommet";

// export default function Login({ setUser }) {
//   const handleFormSubmit = (values) => {
//     fetch("http://127.0.0.1:4050/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data.user);
//       })
//       .catch(alert);
//   };

//   return (
//     <Card
//       margin="20px"
//       flex="grow"
//       height="large"
//       width="medium"
//       background="light-6"
//     >
//       <h1>Login</h1>
//       <Form
//         onChange={handleFormSubmit}
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//       >
//         <FormField
//           onChange={handleFormSubmit}
//           label="Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please enter a valid email address",
//             },
//           ]}
//         ></FormField>
//         <FormField
//           onChange={handleFormSubmit}
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please enter your password",
//             },
//           ]}
//         ></FormField>
//         <br />
//         <CardFooter>
//           <Button  type="submit">
//             Login
//           </Button>
//         </CardFooter>
//       </Form>
//     </Card>
//   );
// }
