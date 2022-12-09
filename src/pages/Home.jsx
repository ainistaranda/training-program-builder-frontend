import {Tip, Button, RoutedButton as GrommetRoutedButton, } from "grommet"


export default function Home() {
  return (
    <div className="home-button">
      <GrommetRoutedButton
      size="large" color="white" label="Get Started" path="/form"  />
    </div>

  )
}