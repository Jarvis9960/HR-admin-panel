import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Profile" subtitle="welcome to you Profile section" />
      </Box>
      <div className="employee-main-div">
        <div className="employee-profile-div">
          <img className="employee-profile-pic" src="" alt="Profile"></img>
          <div>
            <h3>Ankit Fukte</h3>
            <p>Backend Team</p>
            <p>Backend</p>
            <p>Date of Joining: 1st jan 2021</p>
          </div>
        </div>
        <div className="employee-information-div">
          <p>Phone: 8975141294</p>
          <p>Email: ankitfukte11@gmail.com</p>
          <p>Birthday: 25/04/2001</p>
          <p>Address: Vijay nagar Wanadongari Hingna Road, Nagpur -441110</p>
          <p>Gender: Male</p>
          <p>Report to: Ritik Ranjan</p>
        </div>
      </div>
      <div className="extra-information-div">
        <div className="personal-information-main-div">
            <h5>Personal information</h5>
            <div className="personal-information-div">
                <div>
                <p>Passport No:</p>
                <p>Passport Expiry date:</p>
                <p>Tel:</p>
                <p>Nationality:</p>
                <p>Religion:</p>
                <p>Marital Status:</p>
                </div>
                <div className="personal-information-nested-div">
                <p>8975141294</p>
                <p>24/04/2032</p>
                <p>8975141294</p>
                <p>Indian</p>
                <p>Hindu</p>
                <p>Single</p>
                </div>
            </div>
        </div>
        <div className="personal-information-main-div">
        <h5>Emergency Contacts</h5>
            <div className="personal-information-div">
                <div>
                <p>Name</p>
                <p>Relationship</p>
                <p>Phone</p>
                </div>
                <div className="personal-information-nested-div">
                <p>Hitesh Fukte</p>
                <p>Brother</p>
                <p>999999999</p>
                </div>
            </div>
        </div>
        <div className="personal-information-main-div">
        <h5>Bank information</h5>
            <div className="personal-information-div">
                <div>
                <p>Bank Name</p>
                <p>Bank Account No</p>
                <p>IFSC code</p>
                <p>Pan Number</p>
                </div>
                <div className="personal-information-nested-div">
                <p>Paytm Payment Bank</p>
                <p>8975141294</p>
                <p>PYTM0123456</p>
                <p>AGGPF1943H</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
