import { useContext } from "react"
import { useHistory, Link } from "react-router-dom"
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import { signOut } from "../../lib/api/auth";
import { AuthContext } from "../../Router";

const useStyles = makeStyles(() => ({
  linkBtn: {
    textTransform: "none"
  }
}))

const AuthButtons = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const classes = useStyles();
  const histroy = useHistory();

  const handleSignOut = async () => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        histroy.push("/signin")

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!loading) {
    if (isSignedIn) {
      return (
        <Button
          color="inherit"
          className={classes.linkBtn}
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      )
    } else {
      return (
        <>
          <Button
            component={Link}
            to="/signin"
            color="inherit"
            className={classes.linkBtn}
          >
            Sign in
          </Button>
          <Button
            component={Link}
            to="/signup"
            color="inherit"
            className={classes.linkBtn}
          >
            Sign Up
          </Button>
        </>
      )
    }
  } else {
    return <></>
  }
}

export default AuthButtons;
