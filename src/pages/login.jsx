import { useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Login(props) {

  const users=props.users
  const navigate=useNavigate()
  const { states }=useLocation()
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [Ruser,setRuser]=useState(true)
  const [Rlogin,setRlogin]=useState(false)
  
  function handleusername(evt) {
    setusername(evt.target.value);
  }

  function handlepassword(evt) {
    setpassword(evt.target.value);
  }

  function handlelogin() {
    users.forEach(function(item) {
      var userfound=false

      if (item.user === username && item.pass === password) {
        setRlogin(true)
        userfound=true
        setRuser(true)
        setTimeout(() => {
          navigate("/landing",{state:{users:username}})
        }, 500);
        
      } 

      if(userfound==false)
      {
        setRuser(false)
        setRlogin(false)
      }
    });
  }

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className=" mb-2 font-medium text-3xl">Hey Hi</h1>

        {Ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">username is not found</p>}        
        <div className="flex flex-col">
          <input
            type="text"
            value={username}
            onChange={handleusername}
            placeholder="username"
            className="outline-yellow-500 my-2 w-52 p-1 rounded-lg bg-[#EFEFEF] border border-black border-solid"
          />

          <input
            type="text"
            value={password}
            onChange={handlepassword}
            placeholder="password"
            className="outline-yellow-500 my-2 w-52 p-1 rounded-lg bg-[#EFEFEF] border border-black border-solid"
          />

          <button
            onClick={handlelogin}
            className="bg-[#8272DA] w-24 py-1 rounded-lg font-medium my-1"
          >
            Login
          </button>

          {Rlogin?<p className="text-green-500">Login successfull</p>:("")}
          <p>
            Don`t have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
