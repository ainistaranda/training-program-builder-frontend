import { Box, Menu, Heading } from "grommet";
import { Menu as MenuIcon } from "grommet-icons"

const AppBar = (props) => (
  
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
      />
  )

  export default function NavBar() {
    return (
      <AppBar>
      <Heading size ="large" level="2" margin="none" color="lime">Header</Heading>
    <Menu
      icon={<MenuIcon color="black" />}
      dropBackground="light-2"
      items={[
        { label: 'Create Program', onClick: () => {} },
        { label: '', onClick: () => { } },
        // { label: 'Log Out', onClick: () => {} },
      ]}
    />
      </AppBar>
    )
  }
