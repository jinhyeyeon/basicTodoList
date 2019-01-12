import React from 'react';
import classNames from 'classnames';
import './icon-btn.scss'

class IconBtn extends React.Component {
    render() {
        const {
            name,
            children,
            onSelect,
            on
        } = this.props;
        return (
            <div 
                className={classNames('icon-btn', {on})}
                onClick={onSelect}
            >
                <span>{children}</span>
                <p>{name}</p>
            </div>
        );
    }
}

IconBtn.defaultProps = {
    on: false
};

export default IconBtn;