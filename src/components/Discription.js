import { Link } from "react-router-dom";

const Discription = () =>{
    return (
        <div className="discription-box">
            <div className="discription-title">
                <div className="left">
                    <span className="sub-subtitle">Crypto Name</span>
                    <h2 className="subtitle">Doge</h2>
                </div>
                <Link to="/" className="primary-btn">Read</Link>
            </div>
            <article>
                DogeCoin takes its name and logo from the popular "Doge" internet meme featuring a Shiba Inu dog. Despite its playful origins, DogeCoin has gained a notable following in the cryptocurrency space. It operates on a decentralized peer-to-peer network and utilizes a Scrypt algorithm for mining.
            </article>
        </div>
    )
}

export default Discription;