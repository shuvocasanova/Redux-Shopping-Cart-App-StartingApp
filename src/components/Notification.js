import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiAction } from '../store/ui-slice';

const Notification = ({type, message}) => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);
    const handleClose = () => {
        dispatch(uiAction.showNotification({
            open: false,
        }))
    }
  return (
    <div>
        {notification.open && <Alert severity={type} onClose={handleClose}>{message}</Alert>}
    </div>
  )
}

export default Notification