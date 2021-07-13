import React, {useEffect} from 'react'
import bball from '../basketball.png'
import { Grid, Typography } from "@material-ui/core";


    
const Home = () => {
    useEffect(()=>{
        setTimeout(function() {
            window.location.replace('/pick-a-team');
        }, 5000);
    },[])
    return (
    <>    
<Grid container>
      <Typography variant="h1" component="h2"></Typography>
<div className="container">
    <div className="logo"><img src={bball} alt="basketball"/></div>
    {/* <div className="shadow"></div> */}
</div>
</Grid>
</>
    )
}

export default Home
