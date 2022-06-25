import React,{useState} from "react";
import { Tabs, TabList, Tab, TabPanel, TabPanels,useColorModeValue } from "@chakra-ui/react";
import { TabType } from "./tab.types";
interface Props {
  data: Array<TabType>;
}
function TabComponent({ data }: Props) {
  const [currTab, setCurrTab] = useState(0);
  return (
    <Tabs bg={useColorModeValue("gray.50", "gray.800")} isFitted variant="enclosed">
      <TabList mb="1em">
        {data.map((element, index) => (
          <Tab onClick={() => setCurrTab(index)} bg={index===currTab?useColorModeValue("gray.50", "gray.800"):"white"} key={index}>{element.heading}</Tab>
        ))}
      </TabList>
      <TabPanels>
      {data.map(({Component}, index) => (
          <TabPanel key={index}>
              <Component/>
          </TabPanel>
      ))}
      </TabPanels>
    </Tabs>
  );
}

export default TabComponent;
