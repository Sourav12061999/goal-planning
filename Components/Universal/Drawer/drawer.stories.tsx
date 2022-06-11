import Drawer from "./drawer";
export default {
    title: "Universal/Drawer",
    component: Drawer,
};

export const opened = () =>(
    <Drawer opened={true}/>
)