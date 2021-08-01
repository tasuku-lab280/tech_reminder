import React from "react"
import Snackbar from "@material-ui/core/Snackbar"

const AlertMessage = ({ open }) => {
  const handleCloseAlertMessage = () => {
    console.log('hoge');
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleCloseAlertMessage}
      >
        aaaaa
      </Snackbar>
    </>
  )
}

export default AlertMessage;
