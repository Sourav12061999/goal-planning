import React from 'react'
import { Header, MediaQuery, Burger, Text,useMantineTheme, } from '@mantine/core'
interface Props{
    opened:boolean,
    setOpened:Function,
}
function Appbar(props:Props) {
    const {opened,setOpened} = props;
    const theme = useMantineTheme();
  return (
    <Header height={90} style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o:boolean) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
  )
}

export default Appbar