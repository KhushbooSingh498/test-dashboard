import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Transactions = () =>{
    const [inputText, setInputText] = useState("");

    return (
        <div className="container">
            <div className="transactions">
                <div className="export-btn">
                    <button className="primary-btn"><i className="fa-solid fa-download"></i>Export CSV</button>
                </div>
                <div className="transaction-table">
                    <div className="transaction-toll">
                        <div className="toll-btns">
                            <Link className="counts active">All <span className="value-tag">349</span></Link>
                            <Link className="counts">Deposit <span className="value-tag">114</span></Link>
                            <Link className="counts">Withdraw <span className="value-tag">213</span></Link>
                            <Link className="counts">Trade <span className="value-tag">22</span></Link>
                        </div>
                        <div className="search-filter">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} placeholder="Search by ID or destination"></input>
                        </div>
                    </div>

                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Date & Time</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>

                        </tr>
                        <tr>
                            <td>HD82NA2H</td>
                            <td>2022-06-09 <span className="small-text time">07:06 PM</span></td>
                            <td>INR Deposit
                            <span className="small-text type">E-Transfer</span>
                            </td>
                            <td>+ ₹81,123.10</td>
                            <td><span className="status-tag grey">Pending</span></td>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transactions;