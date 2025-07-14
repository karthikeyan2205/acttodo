function Todoitem(props)
{
    const act=props.act
    const setact=props.setact

    function handledelete(ids)
    {
        var temp=act.filter(function(item)
    {
        if(item.id===ids)
        {
            return false
        }
        else{
            return true
        }
    })

    setact(temp)
    }

    return(
        <div className="flex justify-between">
            <p>{props.index}.{props.item}</p>
            <button className="text-red-500" onClick={()=>{handledelete(props.id)}}>Delete</button>
        </div>
        
    )
}

export default Todoitem