import React from 'react';
import PolicyCard from '../PolicyCard/PolicyCard'

function PolicyChild({data, screenWidth}){
  
  if(!data){
    return <pre>Loading data...</pre>
  } 
  return (
    <div className="policy_card_child_component">   
      {data.map( policies => <PolicyCard responsiveBreak={screenWidth} key={policies.title} info={policies} /> )}
    </div>
  )
}


export default PolicyChild;