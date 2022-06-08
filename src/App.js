import React, { Fragment } from 'react';
import InsurancePolicyCard from './components/InsurancePolicyCard';
import 'react-app-polyfill/ie11';
// Not ideal to have it on top of the tree, Its something important to keep in mind
const addMaxWidthMobile = 834

const App = () => (
  <Fragment>
    <InsurancePolicyCard mobileEnd={addMaxWidthMobile}/>
  </Fragment>
);

export default App;
