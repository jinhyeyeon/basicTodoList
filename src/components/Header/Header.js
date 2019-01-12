import React from 'react';
import './header.scss';
import {IoMdHome, IoIosNotifications, IoMdCreate} from "react-icons/io";
import IconBtn from '../Btn/IconBtn/IconBtn';
import Btn1 from '../Btn/Btn1/Btn1';

class Header extends React.Component {
    state = {
        on: 'home'
    };
    
    render() {
        const {
            on
        } = this.state;
        const {onModal} = this.props;
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
                <Btn1 onClick={onModal}>
                    <span><IoMdCreate /></span>
                    새 글 작성하기
                </Btn1>
            </header>
        );
    }
}

export default Header;