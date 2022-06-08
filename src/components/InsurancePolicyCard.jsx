import React from 'react';
import PolicyChild from './PolicyChild/PolicyChild';
import useFetch from './Hooks/useFetch';

const url = 'https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking'

function InsurancePolicyCard({mobileEnd}){
  const {data, load, error} = useFetch(url)

  if(error !== ''){
    console.error(error)
    return <prep> Sorry Something went wrong while fetching the data : (   </prep>
  }
  return(
  <div className="insurance_policy_card_component">
    <div className="insurance_policy_card_component_wrapper">
      <h1 className="insurance_policy_card_component_h1">PROTECTION</h1>
      {!load && <PolicyChild screenWidth={mobileEnd} data={data.policies}/>}
    </div>
  </div>
  );
}


export default InsurancePolicyCard;
