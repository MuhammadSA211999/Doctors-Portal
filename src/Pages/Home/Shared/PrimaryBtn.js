import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <button className="mt-2 btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary ">{children}</button>
    );
};

export default PrimaryBtn;