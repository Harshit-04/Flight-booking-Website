import {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import './list.css'
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const List =()=>{

    const location = useLocation()
    const[origin,setOrigin] =useState(location.state.origin)
    const[destination,setDestination] =useState(location.state.destination)
    const[date,setDate] =useState(location.state.date)
    const[openDate,setOpenDate] =useState(false)
    const[options] =useState(location.state.options)
    const[min,setMin] =useState(undefined)
    const[max,setMax] =useState(undefined)


    const originInputChange = (event) => {
        setOrigin(event.target.value);
    };    
    const destinationInputChange = (event) => {
        setDestination(event.target.value);
    };
    
    const {data,loading,reFetch} = useFetch(`/flights?origin=${origin}&destination=${destination}&min=%${min || 0}&max=${max || 999}`); 

    const clickHandler =() =>{
        reFetch();
    }
    return(
        <div>
            <div className="banner1">
                <Navbar/>
                <Header type="list"/>
            </div>
            <div className="listContainer">
                   
                        <div className="listSearch">
                            <h1 className="lsTitle">Search</h1>
                            <div className="lsItem">
                                <label>Origin</label>
                                <input placeholder="" type="text"
                                     value={origin} onChange={originInputChange}/>
                            </div> 
                            <div className="lsItem">
                                <label>Destination</label>
                                <input placeholder="" type="text"
                                     value={destination} onChange={destinationInputChange}/>
                            </div>
                            <div className="lsItem">
                                <label>Date : </label>
                                <span onClick={()=>setOpenDate(!openDate )}>
                                {`${format(date[0].startDate,"dd/MM/yyyy")} `}
                                </span>
                                {openDate &&(<DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}/>)}
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText"> Min price </span>
                                        <input type="number" 
                                            onChange={event=>setMin(event.target.value)}
                                            className="lsOptionInput" min={0} />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Max price</span>
                                        <input type="number"
                                            onChange={event=>setMax(event.target.value)}
                                            className="lsOptionInput" min={0} />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Adult</span>
                                        <input
                                            type="number"
                                            min={1}
                                            className="lsOptionInput"
                                            placeholder={options.adult}
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Children</span>
                                        <input
                                            type="number"
                                            min={0}
                                            className="lsOptionInput"
                                            placeholder={options.children}
                                        />
                                    </div>
                                </div>    
                            </div>
                            <button onClick={clickHandler}>Search</button>                        
                        </div>
                        <div className="listResult">
                            {loading ?(<FontAwesomeIcon icon={faSpinner}/>):
                            (<>
                                {data.map(item=>
                                    (<SearchItem item={item} key={item._id}/>)
                                )}
                                
                            </>)}
                        </div>
                    
            </div>
        </div>
        
    )
}

export default List;