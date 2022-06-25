import React from 'react'
import { data } from './tab.data'
import TabComponent from '../../../Universal/Tab/tab'
function main() {
  return (
    <div>
      <TabComponent data={data}/>
    </div>
  )
}

export default main