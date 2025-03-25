import { useEffect, useState } from "react";
import BASE_URL from "../Config";
import axios from "axios";
import "../css/accbalance.css"

const AccountStatement = () => {
  const [balance, setBalance] = useState([]);

  let creditAmount = 0;
  let debitAmount = 0;
  let netBalance = 0;

  const loadData = async () => {
    const api = `${BASE_URL}/customer/balanceinqury/?custid=${localStorage.getItem("custId")}`;

    try {
      const response = await axios.get(api);
      setBalance(response.data.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  balance.forEach((e) => {
    if (e.status === "credited") {
      creditAmount += e.account;
    }
    if (e.status === "debited") {
      debitAmount += e.account;
    }
  });

  netBalance = creditAmount - debitAmount;

  return (
    <div className="account-statement-container ac" style={{height:"300px",width:"500px"}}>
  
      <div className="account-statement-header" style={{textAlign:"center",fontSize:"40px" ,color:"white"}}> Account Statement</div>

   
      <div style={{color:"white",marginLeft:"30px", fontSize:"20px"}}> Net Ledger Balance: RS{netBalance}</div>

      
      <table style={{color:"white",marginLeft:"30px", fontSize:"20px"}}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credited (₹)</th>
            <th>Debited (₹)</th>
          </tr>
        </thead>
      <tbody>
  {balance.length > 0 ? (
    balance.map((e, index) => (
      <tr key={index}>
        <td>{e.date.split("T")[0]}</td> 
        <td>{e.status === "credited" ? e.account : "-"}</td>
        <td>{e.status === "debited" ? e.account : "-"}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td  style={{color:"white",marginLeft:"30px", fontSize:"20px"}}>No transactions find</td>
    </tr>
  )}
</tbody>
      </table>
      <div style={{color:"white",marginLeft:"30px", fontSize:"20px"}}>
       Thank you for banking 
      </div>
    </div>
  );
};

export default AccountStatement;