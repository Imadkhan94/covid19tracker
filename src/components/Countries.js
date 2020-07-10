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

function Countriesresult() {
    const [global,setGlobal]=useState([{}]);
    useEffect(()=>{
        async function getdata(){
            const response= await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();  
            delete data.countryitems[0]["1"].source 
            delete data.countryitems[0]["1"].ourid
            delete data.countryitems[0]["1"].code
            setGlobal(Object.values(data.countryitems[0]))  
            console.log(data.countryitems[0])
        }
        getdata()
      })
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(global[0]).map((val,ind) => {
          return(
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                <h4 className={classes.title}>{val.replace(/_/g,' ').toUpperCase()}</h4>
                  <h3>{global[0][val]}</h3> 
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
export default Countriesresult;