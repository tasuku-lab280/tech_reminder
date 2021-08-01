import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  iconButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  linkBtn: {
    textTransform: "none"
  }
}))

const AuthButtons = () => {
  const classes = useStyles();
  const loading = false;
  const isSignedIn = false;
  const handleSignOut = () => {
    console.log('ログアウト');
  }

  if (!loading) {
    if (isSignedIn) {
      return (
        <Button
          color="inherit"
          className={classes.linkBtn}
          onClick={handleSignOut}
        >
          ログアウト
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
            ログイン
          </Button>
          <Button
            component={Link}
            to="/signup"
            color="inherit"
            className={classes.linkBtn}
          >
            アカウント登録
          </Button>
        </>
      )
    }
  } else {
    return <></>
  }
}

export default AuthButtons;
