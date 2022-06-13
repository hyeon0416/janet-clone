/* eslint-disable jsx-a11y/anchor-has-content */
import './index.css'
import Logo from '../../../asset/image/logo.png'
import MainButton from '../../../asset/image/mainSrchBtn.png'

import Icon1 from '../../../asset/image/member.png'
import Icon2 from '../../../asset/image/login.png'
import Icon3 from '../../../asset/image/company.png'

function HeaderTop(){
    return (
        <div id="top-header">
            <div id="top-header-left">
                <a href="/">
                    <img src={Logo} alt="자격증넷"></img>
                </a>
                <form>
                    <div>통합검색</div>
                    <input type="text" maxLength="50" placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"></input>
                    <button type="submit" value="검색">
                        <img src={MainButton} alt="검색"></img>
                    </button>
                </form>
            </div>
            <div id="top-header-right">
                <a className="icon register" href="https://janet.co.kr/member/register.php">
                    <img className="register" src={Icon1} alt="회원가입"></img>
                    회원가입
                </a>
                <a className="icon login" href="https://janet.co.kr/member/login">
                    <img className="login" src={Icon2} alt="로그인"></img>
                    로그인
                </a>
                <a className="icon comany" href="https://support.janet.co.kr/">
                    <img className="company" src={Icon3} alt="기업"></img>
                    기업서비스
                </a>
            </div>
        </div>
    )
}

export default HeaderTop