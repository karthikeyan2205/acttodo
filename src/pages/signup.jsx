import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup(props)
{

  const users=props.users
  const setusers=props.setusers

  const navigate=useNavigate()

  const [Euser,setEuser]=useState("")
  const [Epassword,setEpassword]=useState("")
  const [Cpassword,setCpassword]=useState("")

  const [Errorconfirm,setErrorconfirm]=useState(true)
  const [Signupconfirm,setsignupconfirm]=useState(false)

  function handleuser(evt)
  {
    setEuser(evt.target.value)
  }

  function handlepassword(evt)
  {
    setEpassword(evt.target.value)
  }

  function handleCpassword(evt)
  {
    setCpassword(evt.target.value)
  }

  function adduser()
  {
    if(Epassword==Cpassword)
    {
      var password=Epassword
      setsignupconfirm(true)
      setErrorconfirm(true)

      setTimeout(() => {
        navigate("/")
      }, 500);

    }
    else{
      setErrorconfirm(false)
      setsignupconfirm(false)
    }
    setusers([...users,{user:Euser,pass:password}])
  }

    return(<div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className=" mb-2 font-medium text-3xl">Hey Hi</h1>
        <p className="mb-2">
          You can Signup here :)
        </p>

        <div className="flex flex-col">
          <input
            type="text"
            value={Euser}
            onChange={handleuser}
            placeholder="username"
            className="my-2 w-52 p-1 rounded-lg bg-[#EFEFEF] border border-black border-solid"
          />

          <input
            type="text"
            value={Epassword}
            onChange={handlepassword}
            placeholder="password"
            className="my-2 w-52 p-1 rounded-lg bg-[#EFEFEF] border border-black border-solid"
          />

          <input
            type="text"
            value={Cpassword}
            onChange={handleCpassword}
            placeholder="confirm password"
            className="my-2 w-52 p-1 rounded-lg bg-[#EFEFEF] border border-black border-solid"
          />

          {Errorconfirm?(""):<p className="text-red-500">Password is incorrect</p>}
          {Signupconfirm?<p className="text-green-500">Signup account created</p>:("")}

          <button onClick={adduser} className="bg-[#FCA201] w-24 py-1 rounded-lg font-medium my-1">
            Signup
          </button>
          <p>
            Already have an account? <Link className="underline" to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </div>)
}

export default Signup