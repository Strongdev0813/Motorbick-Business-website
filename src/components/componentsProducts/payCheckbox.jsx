import * as React from "react";
import { Checkbox } from "@mui/material";
import "./paycheckbox.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  return (
    <div id="LineCheckbox">
      <Checkbox {...label} name="agree" id="agree"></Checkbox>
      <h4 id="checkboxSentence">Save My ID</h4>
    </div>
  );
}
