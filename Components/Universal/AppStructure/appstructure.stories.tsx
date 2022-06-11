import Appstructure from "./appstructure";
export default {
    title: "Universal/AppStructure",
    component: Appstructure,
};
export const  Basic = () => (
    <Appstructure>
        {
            <h1>I am a Heading</h1>
        }
    </Appstructure>
)