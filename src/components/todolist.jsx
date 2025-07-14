
import Todoitem from "../components/todoitem.jsx"
function Todolist(props)
{
    const act=props.act
    const setact=props.setact
    return(
        <div className="bg-[#BDB4E4] border rounded p-3 flex-grow">
                <h1 className="text-2xl font-medium">Today Activity</h1>
                
                {act==0?<p>you haven`t added anything yet</p>:""}
                {
                    act.map(function(item,index){
                        return (<Todoitem index={index+1} act={act} setact={setact} id={item.id} item={item.activity}></Todoitem>)
                    })
                }
            </div>
    )
}

export default Todolist