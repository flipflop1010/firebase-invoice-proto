import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const SuccessToastr = ({message='',show=false}) => {
  const [is_open,setOpen]=React.useState<boolean>(show)

  React.useEffect(()=>{
    if(show){
      setOpen(true);
    }
  },[show])

  const handleClose=(e:any)=>{
    setOpen(false)
  }


  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical:'top',horizontal:'center' }}
        open={is_open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: '100%' }}>{message}</Alert>

      </Snackbar>


    </React.Fragment>
  )
}

export default SuccessToastr