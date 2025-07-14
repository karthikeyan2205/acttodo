
import Header from "../components/header.jsx";
import Cards from "../components/cards.jsx";
import Todocontainer from "../components/todocontainer.jsx"
function Landing()
{
    return(
    <div className="bg-black p-16">

      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header />

        {/* Cards */}
        <div className="flex justify-between gap-7 flex-wrap my-5">
          <Cards bgcolor={"#8272DA"} title={23} subtitle={"chennai"}></Cards>
          <Cards bgcolor={"#FD6663"} title={"December"} subtitle={"14:55:00"} />
          <Cards bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>

        {/* Todocontainer */}
        <Todocontainer/>
        
      </div>
    </div>
    )
}

export default Landing