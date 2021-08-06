import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { openToast } from "../../../store/actions/myactions";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function MovieDetailsCard({ movie }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    title,
    backdrop_path,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movie;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title={title} subheader={"Released on " + release_date} />
        <CardMedia
          className={classes.media}
          image={"https://image.tmdb.org/t/p/original" + backdrop_path}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
          <div className="mt-5">
            Rating : <b>{vote_average}</b>
          </div>
          <div className="mt-1">
            Votes : <b>{vote_count}</b>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch(openToast(true))}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>

      <CustomizedSnackbars />
    </div>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = useSelector((state) => state.movie.open);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(openToast(false));
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Movie has been added to Favorite
        </Alert>
      </Snackbar>
    </div>
  );
}
