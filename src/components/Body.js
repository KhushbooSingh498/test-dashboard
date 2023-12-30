import Header from "./Header";
import ValueBar from "./ValueBar";
import RecentTransac from "./RecentTransac";
import Discription from "./Discription";
import Loans from "./Loans";

const Body = () =>{
    return (
        <div className="inner-body">
            <Header />
            <div className="container">
                <ValueBar />
                <section className ="grid-layout">
                    <RecentTransac/>
                    <Discription />
                    <Loans/>
                </section>
            </div>
        </div>
    )
}

export default Body;