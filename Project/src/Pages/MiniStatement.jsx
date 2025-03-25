import React, { useState } from 'react';
import BASE_URL from "../Config";
import axios from 'axios';

const MiniStatement = () => {
    const [fromDate, setFromDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [balance, setBalance] = useState([]);
    const id = localStorage.getItem("custId");

    const handleSubmit = async () => {
        let api = `${BASE_URL}/customer/ministatement`;

        try {
            let response = await axios.post(api, { custid: id, fromdate: fromDate, endDate: endDate });
            setBalance(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div className="mini-statement-container mini3">
            <h2 className="mini-statement-title mini4 "  > Mini Statement</h2>

            <div className="mini-statement-filters mini5"  >
                <div className="date-picker">
                    <label>From:</label>
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </div>
                <div className="date-picker">
                    <label>To:</label>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button className="mini-statement-btn" onClick={handleSubmit}> search Statement</button>
            </div>

            <table className="mini-statement-table mini6">
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
                            <td colSpan="3">No transactions find</td>
                        </tr>
                    )}
                </tbody>
            </table>

            
        </div>
    );
};

export default MiniStatement;