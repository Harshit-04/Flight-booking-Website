import React, { useContext } from 'react';
import './reserve.css';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../context/SearchContext';

const Reserve = ({ onClose }) => {

    const location = useLocation();
    const pathid = location.pathname.split("/")[2];
    const {data} = useFetch(`/flights/find/${pathid}`);
    const {options} = useContext(SearchContext);



  return (
    <div className="res_popup">
      <div className="res-popup-content">
        <h2 className='heading'>Your Flight </h2>
        {/* Add the content for the popup window */}
        <div className='content'>
            <h4>{data?.airlineName} </h4> 
            <h4>From : {data?.origin} | To : {data?.destination}</h4>
            <h4>Departure : {data?.departureTime} </h4>
            <h4>Arrival : {data?.arrivalTime} </h4>
            <h4>Passengers : Adult : {options.adult} | Children : {options.children} </h4>
            <h4><FontAwesomeIcon icon={faDollarSign}/>  {data?.price*(options.adult+options.children)} </h4>
        </div>
        <div className='success'>
            <h3>Is Booked! </h3>
        </div>
        <button className='btn1' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Reserve;