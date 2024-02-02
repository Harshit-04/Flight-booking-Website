import './featured.css'

const Featured =()=>{
    return(
        <div className='featured'>
            <div className='featuredItem'>
                <img src="https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg"
                     alt="New Delhi" className='featuredImg'/>
                <div className='featuredTitles'>
                    <h1>New Delhi</h1>                    
                </div> 
            </div>
            <div className='featuredItem'>
                <img src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/05/shrutisuman13-wikicommons.jpg" 
                     alt="Mumbai" className='featuredImg'/>
                <div className='featuredTitles'>
                    <h1>Mumbai</h1>                    
                </div>
            </div>
            <div className='featuredItem'>
                <img src="https://www.holidify.com/images/bgImages/HYDERABAD.jpg"
                     alt="Hyderabad" className='featuredImg'/>
                <div className='featuredTitles'>
                    <h1>Hyderabad</h1>                    
                </div> 
            </div>
            <div className='featuredItem'>
                <img src="https://hblimg.mmtcdn.com/content/hubble/img/DestMainImgLscape/mmt/activities/m_Bengaluru_2_l_868_1157.jpg" 
                     alt="Bangalore" className='featuredImg'/>
                 <div className='featuredTitles'>
                    <h1>Bangalore</h1>                    
                </div> 
            </div>
            
            <div className='featuredItem'>
                <img src="https://ihplb.b-cdn.net/wp-content/uploads/2019/01/Ahmedabad-Gujarat.jpg"
                     alt="Ahmedabad" className='featuredImg'/>
                <div className='featuredTitles'>
                    <h1>Ahmedabad</h1>                    
                </div> 
            </div>
        </div>
    )
}

export default Featured;