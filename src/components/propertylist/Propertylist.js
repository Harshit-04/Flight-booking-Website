import React from "react";
import './propertylist.css'
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Propertylist =()=>{

    const { data, loading}=useFetch("/flights/countbyAirline");

    const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png",
                    "https://d3lzcn6mbbadaf.cloudfront.net/media/details/fdfsdhadfwfwe4rf.jpg",
                    "https://techthirsty.com/wp-content/uploads/2020/08/image-4.png",
                    "https://i0.wp.com/logotaglines.com/wp-content/uploads/2022/07/Vistara-Logo-Tagline-Slogan-Owner.jpg?fit=640%2C640&ssl=1"];

    return(
    <div className="pList">
        {loading ?(<FontAwesomeIcon icon={faSpinner}/>):
            (<>
                {data && images.map((img,i) =>(
                <div className="pListItem" key={i}>
                    <img src={img} alt="" className="pListImg"/>
                    <div className="pListTitles">
                        <h2>{data[i]?.airlineName}</h2>
                        <h3>{data[i]?.count} flight</h3>
                    </div>
                </div>))}                
            </>
            )}
       
    </div>
    )
}

export default Propertylist;