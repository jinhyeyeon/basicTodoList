import React from 'react';
import './header.scss';
import {IoMdHome, IoIosNotifications} from "react-icons/io";
import IconBtn from '../Btn/IconBtn/IconBtn';

class Header extends React.Component {
    state={
        on: 'home'
    };
    
    render() {
        const {
            on
        } = this.state;
        
        return (
            <header className="header">
                <h1>TodoList</h1>
                <nav className="nav">
                    <ul>
                        <li>
                            <IconBtn
                                on={on === 'home'}
                                onSelect={() => this.setState({on: 'home'})}
                                name="홈"
                            >
                                <IoMdHome />
                            </IconBtn>
                        </li>
                        <li>
                            <IconBtn 
                                on={on === 'notice'}
                                onSelect={() => this.setState({on: 'notice'})}
                                name="알림"
                            >
                                <IoIosNotifications />
                            </IconBtn>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;