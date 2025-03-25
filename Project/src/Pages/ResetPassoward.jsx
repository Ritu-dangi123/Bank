import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../Config";

const ResetPassword = () => {
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [repassword, setRepassword] = useState("");

  let id = localStorage.getItem("custId");

  const handleSubmit = async () => {
    const api = `${BASE_URL}/customer/emailotp`;
    try {
      let response = await axios.post(api, {
        custId: id,
        oldpassword: oldpassword,
        newpassword: newpassword,
        repassword: repassword,
      });

      toast.success(response.data);
    } catch (error) {
      toast.error(error.response?.data?.msg1 || "Something went wrong!");
    }
  };

  return (
    <div className="reset-password-container resets">
      <h2 className="reset-password-title">Reset Password</h2>

      <div className="reset-password-form resetsp">
        <label className="reset-label">Old Password</label>
        <input
          type="password"
          className="reset-input"
          value={oldpassword}
          onChange={(e) => setOldpassword(e.target.value)}
          placeholder="Enter Old Password"
        />

        <label className="reset-label">New Password</label>
        <input
          type="password"
          className="reset-input"
          value={newpassword}
          onChange={(e) => setNewpassword(e.target.value)}
          placeholder="Enter New Password"
        />

        <label className="reset-label">Confirm New Password</label>
        <input
          type="password"
          className="reset-input"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          placeholder="Re-enter New Password"
        />

        <button className="reset-button" onClick={handleSubmit}>
          Update Password
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ResetPassword;