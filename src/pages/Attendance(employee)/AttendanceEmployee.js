import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import Header from "../../components/Header";

const AttendanceEmployee = (props) => {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    dateStyle: "long",
  });

  return (
    <div>
      <div className="Holiday-section">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Attendance" subtitle="Attendance section" />
        </Box>
        <div>
          <div className="attendance-timesheet-div">
            <span className="Attendance-timesheet-heading">Timesheet </span>
            <span className="Attendance-timesheet-heading">{`${currentDate}`}</span>
            <div className="attendence-timesheet-time-padding">
              <span className="attendance-timesheet-time">{props.hours}</span>:
              <span className="attendance-timesheet-time">{props.minutes}</span>
              :
              <span className="attendance-timesheet-time">{props.seconds}</span>
            </div>
            {props.isRunning ? (
              <button
                className="attendance-timesheet-button"
                type="start"
                onClick={props.pause}
              >
                Punch Out
              </button>
            ) : (
              <button
                className="attendance-timesheet-button"
                type="stop"
                onClick={props.start}
              >
                Punch In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceEmployee;
