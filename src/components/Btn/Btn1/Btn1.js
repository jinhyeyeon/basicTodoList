import React from 'react';
import classNames from 'classnames';
import './btn1.scss'

const Btn1 = ({onClick, children, className}) => {
    return (
        <div
            className={classNames('btn1', className)}
            onClick={onClick}
        >
            <p>{children}</p>
        </div>
    );
}

export default Btn1;