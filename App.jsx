import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
const App=()=>{
    const[inputList,setinputList]=useState("");
    const[items,setitems]=useState([]);
    const itemEvent=(event)=>{
        setinputList(event.target.value );

    } 
    const listOfItems=()=>{
        setitems((olditems)=>{
            return[...olditems,inputList];
        })
        setinputList("");
    }
    const deleteitems=(id)=>{
        console.log("deleted");
        setitems((olditems)=>{
            return olditems.filter((arrElement,index)=>{
                return  index!==id;
            })
        })

    }
    return (
    <>
    <div className="main_div">
        <div className="div">
        <br/>
        <h1 className="h1"> ToDo List</h1>
        <br/>
        <input className="input"  type="text" placeholder="Enter Here" onChange={itemEvent}
            value={inputList}
        />
        <button className="button" onClick={listOfItems}> + </button>

        <ol className="ol">
        
           {items.map((itemval,index)=>{
              return  <ToDoLists 
              key={index} 
              id={index} 
              text={itemval}
              onSelect={deleteitems}

                />
           }   )}
        </ol>
        </div>

    </div>

    </>
    )

};
export default App;