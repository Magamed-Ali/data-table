import React, {useState} from 'react';

function Header(props) {
    const [phone, setPhone] = useState(false)

    const changeState = () => {
        setPhone(!phone)
    }

    return (
        <div className="header">
            <div>&#9729;</div>
            <div>
                <span className={phone ? "" : "hidden"} >8964-064-59-42</span>
                <span onClick={changeState}>&#9743;</span>
            </div>
        </div>
    );
}

export default Header;