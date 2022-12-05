import { Box, Button, Layer, Text } from "grommet";
// import { Layer } from "grommet-icons";
import { useState } from "react";

export default function HowToUse() {
  const [show, setShow] = useState();

  return (
    <Box>
      <Button label="Program Guide" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sint facilis doloribus inventore illo voluptas blanditiis voluptates fuga temporibus nesciunt assumenda excepturi eaque dignissimos nulla cupiditate dolore, odio fugit. At.</Text>
          <Button label="close" onClick={() => setShow(false)} />
        </Layer>
      )}
    </Box>
  );
}
