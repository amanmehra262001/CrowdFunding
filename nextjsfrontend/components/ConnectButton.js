import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

const ConnectButton = () => {
  // let web3Enabled = true // well this is good too but it will not render our page when any thing changes
  // but
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3,isWeb3EnableLoading } = useMoralis(); //This(useMoralis) is a hook and when any thing or any state changes it will render our page.
  //enableWeb3 is going to let us connect to metamask
  // account will get the account in our metamask we are connected with
  // isWeb3Enabled is a boolean that returns true when connect with an account
  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined"){
    if(window.localStorage.getItem("connected")){
      enableWeb3()
    }
}
    console.log(isWeb3Enabled);
  }, [isWeb3Enabled]);

//---------------------------------------------------------------------------------
//Below is the useEffect that removes the variable saved in localstorage so that above useEffect does not force us to reconnect again and again on reload...
  useEffect(()=>{
    Moralis.onAccountChanged((account)=>{
    console.log(`Account changed to ${account}`)
    if(account==null){
      window.localStorage.removeItem("connected")
      deactivateWeb3()
      console.log("Null account found..")
    }
  })
  },[])
  //Automatically runs on load
  //Then it will run checking the value
  //If no dependency array is given by us then it will render every time any thing changes
  //Blank dependancy array means runs once on load
  //sometimes it may run twice its just because of react.strictmode (see github repo for this)
  return (
    <div>
      {account ? (
        <div>
          Connected to {account.slice(0, 6)}...
          {account.slice(account.length - 4)}
        </div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected"); //just so we can somehow let our APP know that we have already tried to connect or we are already connected
            }
          }}
          disabled={isWeb3EnableLoading} //isWeb3EnableLoading checks if metamask is already poped up and let us not to click connect button again and again in betwween when metamask is popped up
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
