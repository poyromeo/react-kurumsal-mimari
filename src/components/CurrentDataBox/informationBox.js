import React from "react";
import "./informationBox.css";

function CurrentDataBoxCls(props) {
  return (
    <div className="current-data-box">
      <div className="item-box">Total Sales</div>
      <div className="item-box">
        <div className="sub-item-box">$34,545</div>
        <div className="sub-item-box">
          <i class="bx bx-credit-card"></i>
        </div>
      </div>
      <div className="item-box">Current Mount</div>
    </div>
  );
}

export default CurrentDataBoxCls;
