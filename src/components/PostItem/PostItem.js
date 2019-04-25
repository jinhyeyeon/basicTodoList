import React from 'react';
import './post-item.scss'
import {IoMdTrash} from "react-icons/io";
import koLocale from 'date-fns/locale/ko';
import differenceInDays from 'date-fns/difference_in_days';
import distanceInWords from 'date-fns/distance_in_words';
import format from 'date-fns/format';

function getFormattedDate(d) {
    const now = new Date();
    const date = new Date(d);
  
    // 1분 이내면 방금
    if (now - date < 60 * 1000) return '방금';
    // 10일 이내면 텍스트 형식
    if (differenceInDays(now, date) < 10) {
        return distanceInWords(now, date, {locale: koLocale, addSuffix: true});
    }
    // 그 외의 경우엔 YYYY-MM-DD
    return format(date, 'YYYY-MM-DD');
};

 class PostItem extends React.Component {
    render() {
        const {
            onDelete,
            date,
            text,
            id
        } = this.props;
        return (
            <div className="post-item">
                <span>{getFormattedDate(date)}</span>
                <p>{text}</p>
                <a
                    href="#"
                    className="delete"
                    onClick={(e) => {
                        e.preventDefault();
                        onDelete && onDelete(id);
                    }} 
                >
                    <IoMdTrash />
                </a>
            </div>
        );
    }
}

 export default PostItem; 