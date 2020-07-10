import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    margin: '0 auto',
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:'blue'
  }
}));

function Globalresult() {
    const [global,setGlobal]=useState({});
    useEffect(()=>{
        async function getdata(){
            const response= await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();  
            delete data.results[0].source 
            console.log(data.results[0])
            setGlobal(data.results[0])  
        }
        getdata()
      })
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(global).map((val,ind) => {
          return(
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                <h4 className={classes.title}>{val.replace(/_/g,' ').toUpperCase()}</h4>
                  <h3>{global[val]}</h3> 
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
export default Globalresult;