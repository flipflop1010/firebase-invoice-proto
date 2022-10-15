import React from 'react'

const CompB = () => {

    const [number,setNumber]=React.useState<any>([
        {index:1,name:'apple'},
        {index:2,name:'banana'},
        {index:3,name:'mango'},
        {index:4,name:'orange'},
    ])

    const reRender=(e:any)=>{
        let r=[...number];
        console.log(r);
        r=r.filter((item)=>item.index!=3);
        setNumber(r);
    }


  return (
    <div style={{ textAlign:'center' }}>
        <button onClick={reRender}>Re-render</button>
        {number.map((n:any)=>(<h1 key={n.index}>{n.name}</h1>))}
    </div>
  )
}

export default CompB