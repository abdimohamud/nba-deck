import React, {useEffect} from 'react'
import bball from '../basketball.png'

const Home = () => {
    useEffect(()=>{
        setTimeout(function() {
            window.location.replace('/pick-a-team');
        }, 5000);
    },[])
    return (
    <>    

<div className="container">
    <div className="logo"><img src={bball} alt="basketball"/></div>
    {/* <div className="shadow"></div> */}
</div>

</>
    )
}

export default Home
