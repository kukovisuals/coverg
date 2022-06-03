import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PolicyChild from './PolicyChild/PolicyChild';


const url = 'https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking'
function InsurancePolicyCard(){
  const [policies, setPolicies] = useState([])
  const [load, setLoad] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(url)
      .then(res => setPolicies(res.data))
      .then(setLoad(false))
      .catch(setError)
  },[url])
  
  // console.log(policies)

  if(error !== ''){
    return <prep> Sorry Something went wrong while fetching the data: {Object.stringify(error)}   </prep>
  }
  return(
  <div className="insurance_policy_card_component">
    <div className="insurance_policy_card_component_wrapper">
      
      <h1 className="insurance_policy_card_component_h1">PROTECTION</h1>
      {!load && <PolicyChild data={policies}/>}
    </div>

  </div>
  );
}


export default InsurancePolicyCard;
