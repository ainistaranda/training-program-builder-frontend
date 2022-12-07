import { Button, RoutedButton as GrommetRoutedButton, } from "grommet"
import Login from "./LoginPage"

export default function Home(props) {
  return (
    <div>
      <Login/>
      <GrommetRoutedButton
      size="large" color="lime" label="Get Started" path="/form" />
    </div>

  )
}