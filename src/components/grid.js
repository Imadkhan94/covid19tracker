import React from 'react';
import Globalresult from './Global';
import Countriesresult from './Countries';
import PIEchart from './country';

function Grids({currentScreen}) {
  if(currentScreen===0)
  return(<Globalresult/>)
  else if(currentScreen===1)
   return(<Countriesresult/>)
  //  if(currentScreen===0)
  //  return (<LineChart/>)
   if(currentScreen===2)
   return(<PIEchart/>)
   
  else return(
    <Globalresult/>
  )
}
export default Grids;
