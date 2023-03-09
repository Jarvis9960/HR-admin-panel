import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const Leaves = () => {
  return (
    <div className="Holiday-section">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Leaves" subtitle="Leaves section" />
      </Box>
      <div>
        <div className="">
          <table>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>No of Dates</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Leave added by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-column="First Name">Casual Leave</td>
                <td data-column="Last Name">8 Mar 2019</td>
                <td data-column="Job Title">9 Mar 2019</td>
                <td data-column="Twitter">2 days</td>
                <td data-column="Twitter">Going to Hospital</td>
                <td data-column="Twitter">Pending</td>
                <td data-column="Twitter">Richard Miles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
