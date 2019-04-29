import React from 'react';
import './header.scss';
import {IoMdHome, IoIosNotifications, IoMdCreate} from "react-icons/io";
import Btn1 from '../Btn/Btn1/Btn1';
import {MENU_HOME, MENU_NOTICE} from '../../constants/menu';

class Header extends React.Component {
    state = {
        on: MENU_HOME
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
                            <Btn1
                                className="icon-btn"
                                on={on === MENU_HOME}
                                onClick={() => this.setState({on: 'home'})}
                                icon={<IoMdHome />}
                            >
                                홈
                            </Btn1>
                        </li>
                        <li>
                            <Btn1 
                                className="icon-btn"
                                on={on === MENU_NOTICE}
                                onClick={() => this.setState({on: 'notice'})}
                                icon={<IoIosNotifications />}
                            >
                                알림
                            </Btn1>
                        </li>
                    </ul>
                </nav>
                <Btn1
                    className="write-btn"
                    onClick={onModal}
                    icon={<IoMdCreate />}
                >
                    새 글 작성하기
                </Btn1>
            </header>
        );
    }
}

export default Header;