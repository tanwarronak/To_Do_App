import { useState } from "react";

const Iteminput = ({handleByAdd})=>{
    let [itemname,setitemname] = useState("");
    let [itemdate,setitemdate] = useState("");
    const nameadded = (event)=>{
        setitemname(event.target.value)
    }
    const dateadded = (event)=>{
        setitemdate(event.target.value)
    }

   const handleByclicked = ()=>{
        handleByAdd(itemname,itemdate);
        setitemname("");
        setitemdate("");
    }

    return <> <div className="p-2  d-flex justify-content-evenly">
    <input type="text" className="border border-primary" placeholder="Add your to do" value={itemname} onChange={nameadded} />
    <input type="date" className="border border-primary" value={itemdate} onChange={dateadded} />
    <button type="button" className="btn btn-success" onClick={handleByclicked}>Add</button>
    </div>
    </>
}

export default Iteminput;