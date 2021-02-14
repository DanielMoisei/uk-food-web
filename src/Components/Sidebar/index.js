import React, {useContext}  from "react"

import {DataContext} from "../../dataContext.js"

import ThinSidebar from "./ThinSidebar"
import WideSidebar from "./WideSidebar"

function Sidebar() {

  const {isSidebarExpanded} = useContext(DataContext)

  return (
    <>
      <ThinSidebar />
      {/* isSidebarExpanded ? <WideSidebar /> : null */}
      <WideSidebar />
    </>
  )
}

export default Sidebar
