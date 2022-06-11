import Appbar from "./appbar";
import { useState } from "react";
export default {
    title: "Universal/Appbar",
    component:Appbar,
};

export function withBurger(){
    const [opened, setOpened] = useState<boolean>(false)
    return (
        <>
        <Appbar opened={opened} setOpened={setOpened}/>
        </>
    )
}