import Todolist from "../components/todolist.jsx"
import Todoform from "../components/todoform.jsx"
import { useState } from "react";
function Todocontainer()
{
    const [act,setact]=useState([{id:1,activity:"go to the college"},{id:2,activity:"go to"}])
    
    return(
        <div className="flex gap-5 flex-wrap">
            <Todoform act={act} setact={setact} />
            <Todolist act={act} setact={setact}/>
        </div>
    )
}

export default Todocontainer