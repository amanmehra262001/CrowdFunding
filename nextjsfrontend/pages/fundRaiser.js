import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import styles from "../styles/FundRaiser.module.css";

const fundRaiser = () => {
  const [inputEmail,setinputEmail] = useState("");
  const [orgName,setorgName] = useState("");
  const [description,setdesciption] = useState("");
  const [amount,setamount] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // document.getElementById("InputEmail").value = "";
    // document.getElementById("OrgName").value = "";
    // document.getElementById("Description").value = "";
    // document.getElementById("Amount").value = "";
    alert('Your form has been submitted!');
    const data = {
      "inputEmail":inputEmail,
      "orgName":orgName,
      "description":description,
      "amount":amount
    };
    console.log(data);
  };
  const handleChange = (e)=>{
    if(e.target.name=='InputEmail')
    {
      setinputEmail(e.target.value);
    }
    else if(e.target.name == 'OrgName'){
      setorgName(e.target.value);
    }
    else if(e.target.name == 'Description'){
      setdesciption(e.target.value);
    }
    else if(e.target.name == 'Amount'){
      setamount(e.target.value);
    }
    else{
      console.log('Unpredictable error occured!');
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Crowd Funding-Become a Fund Raiser</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Welcome Fund Raiser</h2>
        <p className={styles.description}>
          Fill the below form and get listed with other Fund Raisers across the
          globe.
        </p>

        <form  onSubmit={handleSubmit}>
          <div>
            <label htmlFor="InputEmail" className={styles.label}>
              Enter your email-address
            </label>
            <input type="email" className={styles.input} id="InputEmail" name="InputEmail" onChange={handleChange} required />
            <div className={styles.helpText}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className={styles.subsequentDivs}>
            <label htmlFor="OrgName" className={styles.label}>
              Enter the name of your organisation
            </label>
            <input type="text" className={styles.input} id="OrgName" name="OrgName" onChange={handleChange} required />
            <div className={styles.helpText}>
              This will be shared with funders
            </div>
          </div>
          <div className={styles.subsequentDivs}>
            <label htmlFor="Description" className={styles.label}>
              Describe the reason for your Fund Raising
            </label>
            <input type="text" className={styles.input} id="Description" name="Description"  onChange={handleChange} required />
            <div className={styles.helpText}>
              This will be shared with funders
            </div>
          </div>
          <div className={styles.subsequentDivs}>
            <label htmlFor="Amount" className={styles.label}>
              Amount required (in Rs.)
            </label>
            <input
              type="number"
              className={styles.input}
              id="Amount"
              min="10000"
              max="100000000"
              name="Amount" 
            onChange={handleChange} required />
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default fundRaiser;
