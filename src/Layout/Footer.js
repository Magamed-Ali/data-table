import React from 'react';

function Footer(props) {
    return (
            <div className="footer">
                © {new Date().getFullYear()} Copyright Text
                <a>Repo</a>
            </div>
    );
}

export default Footer;