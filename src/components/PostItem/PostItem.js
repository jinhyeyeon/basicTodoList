import React from 'react';
import './post-item.scss'
import {IoMdTrash} from "react-icons/io";

 class PostItem extends React.Component {
    render() {
        const {
            onDelte,
            text,
            date
        } = this.props;
        return (
            <div className="post-item">
                <span>{date}</span>
                <p>{text}</p>
                <a
                    href="#"
                    className="delete"
                    onClick={(e) => {
                        e.preventDefault();
                        onDelte && onDelte(e);
                    }} 
                >
                    <IoMdTrash />
                </a>
            </div>
        );
    }
}

 export default PostItem; 