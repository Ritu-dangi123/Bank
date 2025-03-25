import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Table } from "react-bootstrap";

const YourProfile = () =>{
     const fname = localStorage.getItem("fname");
     const lname = localStorage.getItem("lname");
     const acnumber = localStorage.getItem("acnumber");
     const address = localStorage.getItem("address");
     const city = localStorage.getItem("city");
     const mobile = localStorage.getItem("mobile");
     const email = localStorage.getItem("email");


     const accountInfo = {
    "Account Number": acnumber,
    Name: `${fname}  ${lname}`,
    Address: address,
    City: city,
    "Mobile Number": mobile,
    "Email Id": email,
  };


    return(
        <>
        
        <div className="openaccount">
          <h1 style={{color:"black",textAlign:"center",fontSize:"45px",marginTop:"10px"}}>Bank Details</h1>
         
        </div>

<Container className="d-flex justify-content-center align-items-center vh-100"style={{background:"rgba(252, 242, 242, 0.92)"}} >
      <Card className="shadow-lg border-0" style={{ width: "500px", borderRadius: "10px", fontFamily: "Roboto, sans-serif"}}>
        
       
    

   
        <Table responsive className="m-0" style={{background:"red" }}>
          <tbody>
            {Object.entries(accountInfo).map(([key, value]) => (
              <tr key={key} style={{ fontSize: "16px", fontWeight: "500" }}>
                <td className="fw-bold text-secondary px-3 py-2" style={{ width: "40%", backgroundColor: "#f9fafb" }}>{key}:</td>
                <td className="px-3 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>

   

      </Card>
    </Container>

    
    <Container fluid className="py-4">
      
    </Container>
        
        </>
    )
}

export default YourProfile