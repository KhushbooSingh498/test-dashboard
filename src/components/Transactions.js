import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Data } from "../utils/Data";


const Transactions = () => {
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
                            <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} placeholder="Search by ID or destination"></input>
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
                        {
                            Data.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.date} <span className="small-text time">{item.time}</span></td>
                                        <td>{item.transfer}
                                            <span className="small-text type">{item.type}</span>
                                        </td>
                                        <td>{item.amount}</td>
                                        <td><span className={`status-tag ${item.status}`}>{item.status}</span></td>

                                    </tr>
                                )
                            })
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transactions;