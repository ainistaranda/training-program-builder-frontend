import { Button, RoutedButton as GrommetRoutedButton, } from "grommet"

export default function Home(props) {
  return (
    <div>
      <GrommetRoutedButton size="large" color="lime" label="Get Started" path="/form" />
    </div>

  )
}