import { useState } from 'react';
export function Click(){
    const [data,setData] = useState({
        title:"大王",
        content:"小王"
          })
        
        function clickEvent(){
          setData({
            ...data,
            title: "ztb"
          })
        }
    return (
        <>
        <div className="App">
        <div>{data.title}</div>
        <button onClick={clickEvent}>点击</button>
         </div>
         </>

    )    
        
}