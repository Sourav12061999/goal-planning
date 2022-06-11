import React from "react";
import { Navbar, Text, MediaQuery } from "@mantine/core";
interface Props {
  opened: boolean;
}
function Drawer(props: Props) {
  const { opened } = props;
  return (
    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
      <Navbar
        hidden={!opened}
        p="md"
        width={{ sm: 200, lg: 300 }}
        style={{position:"fixed",left:0}}
      >
        <Text>Application navbar</Text>
      </Navbar>
    </MediaQuery>
  );
}

export default Drawer;
