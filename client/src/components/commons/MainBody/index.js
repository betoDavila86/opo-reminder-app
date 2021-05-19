import React from 'react';
import './styles.sass';

const MainBody = ({ children }) => {
    return (<>
        <div className="main-body">{children}</div>
    </>)
}

export default MainBody;