import React from 'react';
import './modal.scss'
import Btn1 from '../Btn/Btn1/Btn1';
import {IoMdClose, IoMdCreate} from "react-icons/io";

class Modal extends React.Component {
    state = {
        value: ''
    };

    render() {
        const {onClose, onWrite} = this.props;
        const {value} = this.state;
        return (
            <div className="modal">
                <div className="dim-bg"
                    onClick={onClose}
                />
                <div className="write-box">
                    <h2>새 글 작성하기</h2>
                    <textarea
                        value={value}
                        onChange={({target: {value}}) => this.setState({value})}
                        placeholder="새 글을 작성해주세요."
                    />
                    <Btn1
                        onClick={() => onWrite(value)}
                        icon={<IoMdCreate />}
                    >
                        작성하기
                    </Btn1>
                    <a
                        href="#"
                        className="close"
                        onClick={(e) => {
                            e.preventDefault();
                            onClose && onClose(e);
                        }} 
                    >
                        <IoMdClose />
                    </a>
                </div>
            </div>
        );
    }
}

export default Modal;