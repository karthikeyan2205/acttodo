import { useLocation } from "react-router-dom"
function Header()
{
    const user=useLocation()

    return(
        <div>
            <h1 className="text-3xl font-medium">Hello {user.state.users}</h1>
            <p>I help you manage your activities :)</p>
        </div>
    )
}

export default Header