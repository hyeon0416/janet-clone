import './index.css'
import hotImage from '../../../asset/image/hot_keyword.png'
import ListHot from './listhot'

function Hotkeyword(){


    return(
        <div id="hot-keyword">
            <h1 id="hot-keyword-title">
                <img src={hotImage} alt=""></img>
                <b>
                    <span>HOT</span>
                    키워드
                </b>
                TOP20
            </h1>
            <ListHot/>
        </div>
    )
}

export default Hotkeyword