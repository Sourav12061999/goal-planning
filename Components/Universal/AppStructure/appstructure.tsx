import React, { useState } from "react";
import {
  AppShell,
  Text,
} from "@mantine/core";
import useStyles from "./styles";
import Drawer from "../Drawer/drawer";
import Appbar from "../Appbar/appbar";
type Props ={
 children?:JSX.Element
}
export default function Appstructure({children}:Props) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <AppShell
      className={classes.main}
      navbar={
        <Drawer opened={opened}/>
      }
      header={
        <Appbar opened={opened} setOpened={setOpened}/>
      }
    >
      {
        children
      }
    </AppShell>
  );
}
