// Cheat way of creating that connect button - Using web3uikit

import React from "react";
import {ConnectButton} from "web3uikit";

const ConnectButtonMyWay = () => {
  return <div>
    <ConnectButton moralisAuth={false}/>
  </div>;
};

export default ConnectButtonMyWay;
//MoralisAuth = false just to make it super explicit that we are not trying to connect to the server...