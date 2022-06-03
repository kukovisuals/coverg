import React from 'react';
import PolicyCard from '../PolicyCard/PolicyCard'
function PolicyChild({data}){

  if(data.length < 1 ){
    return <p>Loading data...</p>
  } 
  data = data.policies
  return (
    <div className="policy_card_child_component">
        
      {data.map( policies => <PolicyCard key={policies.title} info={policies} /> )}
    </div>
  )
}


export default PolicyChild;