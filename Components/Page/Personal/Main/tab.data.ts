import {TabType} from "../../../Universal/Tab/tab.types";
import Form from "../Form/form";
import Prediction from "../Predictions/prediction";
export const data:Array<TabType>=[
    {
        heading:"My Details",
        Component:Form,
    },
    {
        heading:"My Predictions",
        Component:Prediction,
    },
    {
        heading:"My Goals",
        Component:Form,
    },
]