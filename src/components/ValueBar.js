const ValueBar = () =>{
    return (
        <div className="value-bar">
            <div className="value-list">
                <div  className="value total">
                    <span className="sub-subtitle">Total Portfolio value</span>
                    <span className="amount">&#8377; 112,312.24</span>
                </div>
                <div className="value">
                    <span className="sub-subtitle">Wallet Balances</span>
                    <ul>
                        <li className="amount btc">22.39401000
                            <span className="value-tag">BTC</span>
                        </li>
                        <li className="amount">
                            &#8377; 1,300.00
                            <span className="value-tag">INR</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="buttons">
                <button className="primary-btn"><i class="fa-solid fa-arrow-down"></i> Deposit</button>
                <button className="primary-btn"><i class="fa-solid fa-arrow-up"></i> withdraw</button>

            </div>
        </div>
    )
}

export default ValueBar;