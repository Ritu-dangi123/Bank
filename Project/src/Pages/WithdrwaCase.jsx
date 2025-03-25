import { useState } from "react";
import BASE_URL from "../Config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Form, Button, Spinner, Card } from "react-bootstrap";


const WithdrawCase = () => {
  let [submit, setSubmit] = useState("");
  let [loading, setLoading] = useState(false);
  let [showATM, setShowATM] = useState(false);
  let custId = localStorage.getItem("custId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submit <= 0) {
      toast.error(" Please enter a valid amount greater than ₹0.");
      return;
    }

    setLoading(true);
    setShowATM(false);
    const api = `${BASE_URL}/customer/withdrwacase`;

    try {
      const response = await axios.post(api, {
        submit: submit,
        custId: custId,
        status: "debited",
      });

      toast.success(`✅ ${response.data}`);
      console.log(response.data)
      setTimeout(() => {
        setShowATM(true);
        setTimeout(() => setShowATM(false), 4000);
      }, 1000);
    } catch (error) {
      toast.error(" Transaction Failed! Try Again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="withdraw-container p-0">
      <div className="withdraw-bank-header">
        <h2 className="withdraw-bank-name">Metrobank</h2>
        <p className="withdraw-bank-tagline">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laudanti</p>
      </div>

      <Container className="d-flex flex-column justify-content-center align-items-center mt-3">
        <Card className="shadow-lg p-4 border-0 text-center withdraw-transaction-card withdraw1">
          <h5 className="withdraw-title">Enter Amount</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 withdraw">
              <Form.Control
                type="number"
                placeholder="Enter Amount (₹)"
                value={submit}
                onChange={(e) => setSubmit(e.target.value)}
                className="withdraw-input-style"
              />
            </Form.Group>
            <Button variant="dark" className="withdraw-submit-btn" type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Withdraw"}
            </Button>
          </Form>
        </Card>

        {showATM && (
          <div className="withdraw-atm-machine mt-3">
            <div className="withdraw-atm-screen">Processing Cash...</div>
            <div className="withdraw-cash"></div>
          </div>
        )}
      </Container>

     

        

      <ToastContainer />
    </Container>
  );
};

export default WithdrawCase;