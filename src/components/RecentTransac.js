import { Link } from "react-router-dom";
const RecentTransac = () =>{
    return (
        <div className="recent-transactions">
            <h2 className="sub-subtitle">Recent transactions</h2>
            <ul className="transaction-list">
                <li  className="list-item">
                    <span className="bullets"></span>
                    <div className="transaction">
                        INR Deposit
                        <span className="time grey-text">2022-06-09 7:06 PM</span>
                    </div>
                    <div className="transac-value">
                        + ₹81,123.10
                        <span className="grey-text"></span>
                    </div>
                </li>
                <li  className="list-item">
                    <span className="bullets"></span>
                    <div className="transaction">
                        BTC Sell
                        <span className="time grey-text">2022-05-27 12:32 PM</span>
                    </div>
                    <div className="transac-value">
                        - 12.48513391 BTC
                        <span className="grey-text">+ $81,123.10</span>
                    </div>
                </li>
                <li  className="list-item">
                    <span className="bullets"></span>
                    <div className="transaction">
                        INR Deposit
                        <span className="time grey-text">2022-06-09 7:06 PM</span>
                    </div>
                    <div className="transac-value">
                        + ₹81,123.10
                        <span className="grey-text"></span>
                    </div>
                </li>
            </ul>

            <Link to="/transaction" className="primary-btn full">View All</Link>
        </div>
    )
}

export default RecentTransac;