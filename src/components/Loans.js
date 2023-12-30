import { Link } from "react-router-dom";

const Loans = ()=>{
    return(
        <div className="loans-box">
            <Link to="/" className="primary-btn">Loans</Link>
            <article className="loans-article">
            Learn more about Loans - Keep your Bitcoin, access it's value without selling it
            </article>
        </div>
    )
}

export default Loans;
