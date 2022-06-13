/* eslint-disable jsx-a11y/anchor-has-content */
import './index.css'
import HeaderTop from './top'
import HeaderBottom from './bottom'

function Header(){
    return (
        <div id="header">
            <HeaderTop/>
            <HeaderBottom/>
        </div>
    )
}

export default Header