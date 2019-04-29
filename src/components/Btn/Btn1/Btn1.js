import React from 'react';
import classNames from 'classnames';
import './btn1.scss'

const Btn1 = ({
    onClick,
    children,
    className,
    icon,
    on
}) => {
    return (
        <div
            className={classNames('btn1', className, {on})}
            onClick={onClick}
        >
            <p>
                {icon}
                <span>
                    {children}
                </span>
            </p>
        </div>
    );
}

Btn1.defaultProps = {
    on: false
};

export default Btn1;