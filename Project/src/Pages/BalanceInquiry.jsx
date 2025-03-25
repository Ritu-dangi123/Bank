import { useEffect, useState } from "react";
import BASE_URL from "../Config";
import axios from "axios";
import { Container, Card, Spinner } from "react-bootstrap";
import "../css/balance.css"
const BalanceInquiry = () => {
  const [balance, setBalance] = useState([]);
  const [loading, setLoading] = useState(true);

  let netBalance = 0;

  const loadData = async () => {
    const api = `${BASE_URL}/customer/balanceinqury/?custid=${localStorage.getItem("custId")}`;

    try {
      const response = await axios.get(api);
      setBalance(response.data.data1);
    } catch (error) {
      console.log(error.response?.data?.msg || "Error fetching balance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  balance.forEach((e) => {
    if (e.status === "credited") {
      netBalance += e.account;
    }
    if (e.status === "debited") {
      netBalance -= e.account;
    }
  });

  return (
    <Container className="balance_inquery">
      
   
      <header className="balance-header">
        <h2>Metrobank</h2>
        <p>Your Trusted Financial Partner</p>
      </header>

    
      <Card className="balance-card">
        <h2 className="balance-title">Account Balance</h2>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h1 className="balance-amount">rs{netBalance.toLocaleString()}</h1>
        )}
      </Card>

    </Container>
  );
};

export default BalanceInquiry;