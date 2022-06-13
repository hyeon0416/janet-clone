import './index.css'
import gnb from '../../../asset/image/gnb.png'

function HeaderBottom(){
    return (
        <div id="bottom-header">
                <div id="bottom-header-left">
                    <input className="menu-text" id="menu" src={gnb} type="image" alt="menu" title="전체메뉴"></input>
                    <a className="menu-text text-hover" href="https://janet.co.kr/jnTops/">Top100</a>
                    <a className="menu-text text-hover" href="https://janet.co.kr/jnLics/">자격증정보</a>
                    <a className="menu-text text-hover" href="https://janet.co.kr/jnLnPo/">어학/공무원</a>
                    <a className="menu-text info" href="https://janet.co.kr/bbs/board.php?bo_table=bNews">자넷info
                    </a>
                    <a className="menu-text talk" href="https://janet.co.kr/jnTalk/index.php">자넷톡</a>
                </div>
                <div id="bottom-header-right">
                    <a className="header-bottom-a aca" href="https://janet.co.kr/jnTown/">우리동네학원</a>
                    <a className="header-bottom-a commu" href="https://janet.co.kr/jnComm/">커뮤니티</a>
                    <a className="header-bottom-a ai" href="https://janet.co.kr/jnRcmd/jnRcmd_test">추천</a>
                </div>
        </div>
    )
}

export default HeaderBottom