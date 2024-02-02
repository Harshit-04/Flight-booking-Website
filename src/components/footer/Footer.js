import './footer.css'

const Footer=()=>{
    return(
        <div className='footer'>
            <h3 className='copy'>Copyrights @ 2023 Fly-it </h3> 
            <div className='fLists'>
                                   
                <ul className='flist'>
                    <h3 className='fListItems'>About</h3>
                    <h3 className='fListItems'>Contact No.</h3>
                </ul>
                <ul className='flist'>
                    <h3 className='fListItems'>Terms & Conditions</h3>
                    <h3 className='fListItems'>+91 7070780808</h3>
                                        
                </ul>
                <ul className='flist'>
                    <h3 className='fListItems'>Privacy & Cookie statement</h3>
                    <h3 className='fListItems'>XYZ</h3>
                    
                </ul>
                <ul className='flist'>
                    <h3 className='fListItems'>Flights Help</h3>
                    <h3 className='fListItems'>fly_it@gmail.com</h3>
                    
                </ul>
            </div>
            

        </div>
    )
}

export default Footer;