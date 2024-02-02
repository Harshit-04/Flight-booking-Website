import './searchitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faDollarSign, faSuitcase, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchItem = ({item}) =>{
    return(
      <div className="searchItem">
        <img
          src="https://logowik.com/content/uploads/images/google-flight1670.jpg"
          alt=""
          className="siImg"
        />

        <div className="siDesc">
          <h1 className="siTitle">{item?.airlineName}</h1>
          <span className="siDistance">From : {item?.origin}  <b>-</b>  To : {item?.destination}</span>
          <span className="siFoodOp">Includes Food</span>
          <span className="siSubtitle">
            {item?.departureTime}
          </span>
          <span className="siFeatures">
          {item?.arrivalTime}
          </span>
          <span className="siCancelOp">{item?.duration} mins </span>
        </div>

        <div className="siDetails">
          <div className="luggage">
            <FontAwesomeIcon icon={faSuitcase}/>
            <FontAwesomeIcon icon={faBriefcase}/>
            <FontAwesomeIcon icon={faSuitcaseRolling}/>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice"><FontAwesomeIcon icon={faDollarSign}/>{item?.price}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/flights/${item?._id}`}>
              <button className="siCheckButton">See Flight</button>
            </Link>
            
          </div>
        </div>
      </div>
    )
}

export default SearchItem;