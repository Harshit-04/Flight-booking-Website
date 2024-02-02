import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/featured/Featured';
import MailList from '../../components/mailList/MailList';
import Propertylist from "../../components/propertylist/Propertylist"
import './Home.css'
import Footer from '../../components/footer/Footer';

const Home =()=>{
    return(
    <div>
        <div className='banner' >
            <Navbar/>
            <Header/>
        </div>
            <div className='homeContainer'>
                <h2 className="homeTitle "> Browse by Airlines</h2>
                <Propertylist/>
                <h2 className="homeTitle "> Domestic Locations</h2>
                <Featured/>
                <MailList/>
                <Footer/>
            </div>
    </div>
        
    )
}

export default Home;