import './mailList.css';

const MailList =() =>{
    return(
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input className='i_mail' type="text" placeholder="Your Email" />
                <button className='mail_btn'>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList;