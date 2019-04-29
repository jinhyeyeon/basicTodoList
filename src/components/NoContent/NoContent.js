import React from 'react';
import './no-content.scss';
import {IoIosCloseCircleOutline} from "react-icons/io";

export default class componentName extends React.Component {
    render() {
        return (
            <p className="no-content">
                <span><IoIosCloseCircleOutline /></span>
                등록된 TODO가 없습니다.
            </p>
        )
    }
}
