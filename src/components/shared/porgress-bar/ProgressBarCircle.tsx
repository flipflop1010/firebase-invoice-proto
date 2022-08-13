import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const ProgressBarCircle = ({show=false}) => {

    const [open, setOpen] = React.useState<boolean>(show);

    React.useEffect(()=>{
        if(show){
          setOpen(true);
        }
      },[show])

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default ProgressBarCircle