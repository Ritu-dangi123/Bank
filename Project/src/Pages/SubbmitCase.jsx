import { useState } from "react";
import BASE_URL from "../Config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Form, Button, Spinner, Card } from "react-bootstrap";


const SubmitCase = () => {
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
    const api = `${BASE_URL}/customer/submitcase`;

    try {
      const response = await axios.post(api, {
        submit: submit,
        custId: custId,
        status: "credited",
      });

      toast.success(`✅ ${response.data}`);
   

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
    <Container fluid className="p-0">
    
      <div className="bank-header">
        <h2 className="bank-name">Metrobank</h2>
        <p className="bank-tagline">Your Money, Our Responsibility</p>
      </div>

      
      <Container className="d-flex flex-column justify-content-center align-items-center mt-3">
        <Card className="shadow-lg p-4 border-0 text-center transaction-card subcase">
          <h4 className="title">Enter Amount</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter Amount (₹)"
                value={submit}
                onChange={(e) => setSubmit(e.target.value)}
                className="input-style"
              />
            </Form.Group>
            <Button variant="" className="submit-btn" type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
            </Button>
          </Form>
        </Card>

      
        {showATM && (
          <div className="atm-machine mt-3">
            <div className="atm-screen">Processing Cash...</div>
            <div className="cash"></div>
          </div>
        )}
      </Container>

      <ToastContainer />
    </Container>
  );
};

export default SubmitCase;