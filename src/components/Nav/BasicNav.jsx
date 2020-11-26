import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import './Nav.css';

const BasicNav = props => {
    const user = useRecoilValue(userState);

    const logout = () => {
        localStorage.clear();
        window.location.replace('/login');
    }

    return (
        <div className="ui inverted secondary fixed menu">
            <div className="item">
                <h3 className="logo">skej.<span id="io">io</span></h3>
            </div>
            <div className="right menu">
                <div className="ui item">
                    <p>Welcome, <strong>{user.firstName}</strong></p>
                </div>
                <div className="ui item">
                    <button className="ui inverted button" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasicNav;