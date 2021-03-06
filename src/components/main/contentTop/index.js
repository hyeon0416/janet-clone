/* eslint-disable jsx-a11y/anchor-has-content */
import './index.css'
import top1 from '../../../asset/image/mainBn_top_01.png'
import top2 from '../../../asset/image/mainBn_top_02.png'
import top3 from '../../../asset/image/mainBn_top_03.png'
import top4 from '../../../asset/image/mainBn_top_04.png'
import btn from '../../../asset/image/rightButton.png'

function ContentTop(){
    return (
        <div id="contentTop">
            <div id="content-top-banner">
                <div id="content-top-banner-ad">
                    <input type="radio" name="radio-button" id="content-top-banner-ad-radio1" defaultChecked></input>
                    <input type="radio" name="radio-button" id="content-top-banner-ad-radio2"></input>
                    <input type="radio" name="radio-button" id="content-top-banner-ad-radio3"></input>
                    <input type="radio" name="radio-button" id="content-top-banner-ad-radio4"></input>
                    <div className="content-top-banner-ad-top first">
                        <img src={top1} alt=""></img>
                    </div>
                    <div className="content-top-banner-ad-top">
                        <img src={top2} alt=""></img>
                    </div>
                    <div className="content-top-banner-ad-top">
                        <img src={top3} alt=""></img>
                    </div>
                    <div className="content-top-banner-ad-top">
                        <img src={top4} alt=""></img>
                    </div>
                    <div className="navigation-auto">
                        <div id="auto-button1"></div>
                        <div id="auto-button2"></div>
                        <div id="auto-button3"></div>
                        <div id="auto-button4"></div>
                    </div>
                    <div className="navigation-manual">
                        <label htmlFor="content-top-banner-ad-radio1" className="manual-button"></label>
                        <label htmlFor="content-top-banner-ad-radio2" className="manual-button"></label>
                        <label htmlFor="content-top-banner-ad-radio3" className="manual-button"></label>
                        <label htmlFor="content-top-banner-ad-radio4" className="manual-button"></label>
                    </div>
                </div>
            </div>
            <div id="content-top-info">
                <div id="content-top-info-main">
                    <div id="content-top-info-main-title">
                        <h3>???????????????</h3>
                        <div>
                            <div>
                                <input className="contentTop-leftButton" type="image" src={btn} alt=""></input>
                            </div>
                            <div>
                                <input type="image" src={btn} alt=""></input>
                            </div>
                        </div>
                    </div>
                    <div id="content-top-info-main-subTitles">
                        <div id="content-top-info-main-subTitles-top">
                            <div id="content-top-info-main-subTitle1" className="content-top-info-main-subTitleFlexBox">
                                <img src="https://janet.co.kr/html_demo/img/main/inCrfc.png" alt=""></img>
                                <div>
                                    <h4>???????????????</h4>
                                    <p>?????????????????? ?????? ???</p>
                                </div>
                            </div>
                            <div id="content-top-info-main-subTitle2" className="content-top-info-main-subTitleFlexBox subTitles-bottom">
                                <img src="https://janet.co.kr/html_demo/img/main/iCrtfc.png" alt=""></img>
                                <div>
                                    <h4>???????????????</h4>
                                    <p>???????????? ????????? ??????????????????</p>
                                </div>
                            </div>
                        </div>
                        <div id="content-top-info-main-subTitles-bottom">
                            <div id="content-top-info-main-subTitle3" className="content-top-info-main-subTitleFlexBox">
                                <img src="https://janet.co.kr/html_demo/img/main/sCrtfc.png" alt=""></img>
                                <div>
                                    <h4>????????? ?????????</h4>
                                    <p>????????? ?????? ????????? ?????? ????????????</p>
                                </div>
                            </div>
                            <div id="content-top-info-main-subTitle4" className="content-top-info-main-subTitleFlexBox subTitles-bottom">
                                <img src="https://janet.co.kr/html_demo/img/main/rCrtfc.png" alt=""></img>
                                <div>
                                    <h4>??????????????????</h4>
                                    <p>??????/?????? ??????????????????</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-top-info-ad">
                    <img src="https://janet.co.kr/data/ebslider/eb4_basic/img/d0942d969f0a37cb73a46db345ea874b.png" alt=""></img>
                </div>
            </div>
            <div id="content-top-chart">
                <div id="content-top-chart-box">
                    <div id="content-top-chart-title">
                        <h3>?????? ????????????</h3>
                        <div>
                            <div>
                                <input className="contentTop-leftButton" type="image" src={btn} alt=""></input>
                            </div>
                            <div>
                                <input type="image" src={btn} alt=""></input>
                            </div>
                        </div>
                    </div>
                    <ul id="content-top-chart-rank">
                        <li id="rank1">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">????????????</span>
                            </a>
                        </li>
                        <li id="rank2">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">??????????????????</span>
                            </a>
                        </li>
                        <li id="rank3">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">?????????????????????</span>
                            </a>
                        </li>
                        <li id="rank4">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">??????????????????</span>
                            </a>
                        </li>
                        <li id="rank5">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">????????????</span>
                            </a>
                        </li>
                        <li id="rank6">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">??????????????????</span>
                            </a>
                        </li>
                        <li id="rank7">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">??????????????????(????????????)</span>
                            </a>
                        </li>
                        <li id="rank8">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">???????????????????????????</span>
                            </a>
                        </li>
                        <li id="rank9">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">??????????????????????????????</span>
                            </a>
                        </li>
                        <li id="rank10">
                            <a href="https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91">
                                <span className="item">????????????????????????</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContentTop