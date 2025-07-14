import { useState } from "react"
function Todoform(props)
{
    const act=props.act
    const setact=props.setact
    const [text,settext]=useState("")
    function handlechange(evt)
    {
        settext(evt.target.value)
    }

    function change()
    {
        setact([...act,{id:act.length+1,activity:text}])
        settext("")
    }


    return(
        <div>
            <h1 className="text-2xl font-medium mb-3">Manage Activities</h1>
            <input value={text} onChange={handlechange} type="text" placeholder="Next Activity?" className="border border-black px-3 py-1"/>
            <button className="bg-black text-white px-1 py-1 border border-black" onClick={change}>Add</button>
        </div>
    )
}

export default Todoform