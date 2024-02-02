import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture,faPlaneArrival, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';

import {useContext, useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

import './header.css'
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Header =({type})=>{

    const[origin,setOrigin] =useState('')
    const[destination,setDestination] =useState('')
    const[openDate,setOpenDate] =useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
       adult: 1,
       children: 0,
    });

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };


      const {dispatch} = useContext(SearchContext);

      const handelsSearch = ()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,date,options}})
            navigate('/flights',{state:{origin,destination,date,options}})
      }

    return(
        <div className='header'>
            <div className={type === "list" ? "headercontainer listMode" : 'headercontainer'}>
                <h1 className='headertitle'>Life Is Short And <br/> The World is Wide! </h1>
                <p className='headerdesc'>To get the best of your adventure you just need to leave and <br/>go where you like, we are waiting for you</p>
                <div className='headerList'>
                    <div className='headerListItems '>                                         
                    </div>                                        
                </div> 
                { type !== "list" &&
                    <>
                    
                    
                    <div className="headerSearch">  
                        <div className="headerSearchItem"> 
                            <FontAwesomeIcon icon={faPlaneDeparture} className="headerIcon" />
                            <input
                            type="text"
                            placeholder="Origin"
                            className="headerSearchInput"
                            onChange={(e) => setOrigin(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPlaneArrival} className="headerIcon" />
                            <input
                            type="text"
                            placeholder="Destination"
                            className="headerSearchInput"
                            onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>
                                {`${format(date[0].startDate, "dd/MM/yyyy")}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    minDate={new Date()}
                                />
                            )}
                        </div>

                    
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span   onClick={() => setOpenOptions(!openOptions)}
                                className='headerSearchText'>{`${options.adult} adult · ${options.children} children `}
                            </span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.adult <= 1}
                                            className='optionCounterButton'
                                            onClick={() => handleOption("adult", "d")}
                                        >-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className='optionCounterButton'
                                            onClick={() => handleOption("adult", "i")}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.children <= 0}
                                            className='optionCounterButton'
                                            onClick={() => handleOption("children", "d")}
                                        >-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className='optionCounterButton'
                                            onClick={() => handleOption("children", "i")}
                                        >+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>    
                        <button className='headerbtn' onClick={handelsSearch}>Search</button>          
                    </div>
                </>}
            </div>
        </div>
    )
}


export default Header;