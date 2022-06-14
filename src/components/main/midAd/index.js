import './index.css'
import button from '../../../asset/image/rightButton.png'
import ad1 from '../../../asset/image/ad1.png'
import ad2 from '../../../asset/image/ad2.png'
import ad3 from '../../../asset/image/ad3.png'


function MidAd(){
    return (
        <div id="content-mid-banner">
            <input id="content-mid-banner-leftButton" type="image" src={button} alt=""></input>
            <div id="content-mid-banner-ads">
                <input className="content-mid-banner-ad" type="image" src={ad1} alt=""></input>
                <input className="content-mid-banner-ad" type="image" src={ad2} alt=""></input>
                <input className="content-mid-banner-ad" type="image" src={ad3} alt=""></input>
            </div>
            <input id="content-mid-banner-rightButton" type="image" src={button} alt=""></input>
        </div>
    )
}

export default MidAd