import React from 'react'

const CompA = () => {

    const [isDestroyComponent,setDestroyComponent]=React.useState<Boolean>(false);

  React.useEffect(()=>{
    return ()=>{
      console.log('hello');
      
    }
  },[isDestroyComponent])

    const btnDestroy=(e:any)=>{
        // console.log(e);
      if(!isDestroyComponent){
        setDestroyComponent(true);
      }
      
    }

  return (
    <React.Fragment>
        {!isDestroyComponent && (
          <button onClick={(e)=>{btnDestroy(e)}}>Destroy</button>

        )}

    </React.Fragment>
  )
}

export default CompA