import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./flights.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarDay, faChair, faClock, faDollarSign, faHourglass, faPeopleGroup, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from '../../hooks/useFetch';
import { useLocation } from "react-router-dom";
import Reserve from "../../components/Reserve/Reserve";
import { SearchContext } from "../../context/SearchContext";



const Flights = () =>{
    const location = useLocation();
    const pathid = location.pathname.split("/")[2];
    const {data,loading} = useFetch(`/flights/find/${pathid}`);
    
    const {date,options} = useContext(SearchContext);

    console.log(options)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
  
    const days = dayDifference(date[0].endDate, date[0].startDate);

    const [showPopup, setShowPopup] = useState(false);

    const handleBookNowClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };


    return(
        <div>
             <div className="banner1">
                <Navbar/>
                <Header type="list"/>
            </div>
            {loading ?("loading") : 
            (<div className="flightContainer">        
                <div className="flightWrapper">                    
                    <div className="flightDetails">
                        <div className="flightDetailsTexts">
                            <h1 className="flightTitle">Airline Name : {data?.airlineName} </h1>
                            
                            <div className="flightNum">
                                <span>Flight Number : {data?.flightNumber} </span>
                            </div>
                            <div className="flightPassengers">                        
                                <FontAwesomeIcon icon={faPeopleGroup}/>
                                <span>  Adult : {options.adult} | Children : {options.children}</span>
                            </div>
                            <div className="flightDeparture">
                                <FontAwesomeIcon icon={faPlaneDeparture}/>
                                <span>      Departure : {data?.origin}</span>
                            </div>
                            <div className="flightArrival">
                                <FontAwesomeIcon icon={faPlaneArrival}/>
                                <span>      Arrival : {data?.destination}</span> 
                            </div>
                            <div className="flightDepartTime">
                                <FontAwesomeIcon icon={faClock}/>
                                <span>  Departure Time : {data?.departureTime}</span>
                            </div>
                            <div className="flightArrTime">
                                <FontAwesomeIcon icon={faClock}/>
                                <span>  Arrival Time : {data?.arrivalTime}</span>
                            </div>
                            <div className="flightDuration">                        
                                <FontAwesomeIcon icon={faHourglass}/>
                                <span>  Flight Duration : {data?.duration} mins </span>
                            </div>
                            <div className="flightReturn">                        
                                <FontAwesomeIcon icon={faCalendarDay}/>
                                <span>  Return Flight after {days} days</span>
                            </div>

                        </div>
                        <div className="flightDetailsPrice">
                            <h1>{data?.airlineName}</h1>
                            <span> 
                                {data?.origin}  <FontAwesomeIcon icon={faArrowRight}/>  {data?.destination}                              
                            </span>
                            <h2>                            
                                <b><FontAwesomeIcon icon={faDollarSign}/> {data?.price * (options.adult + options.children)}</b>
                                <br/>
                                <b><FontAwesomeIcon icon={faChair}/> Seats : {(options.adult + options.children)}</b>
                                
                            </h2>
                            <button className="btn" onClick={handleBookNowClick}>Book Now!</button>                            
                            {showPopup && <Reserve onClose={handleClosePopup} />}
                        </div>
                        
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>)}
        </div>
    )
}

export default Flights;