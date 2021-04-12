import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Data.css'

const Data = (props) => {
    const {name, picture, email,salary,phone} = props.profile
    return (
        <div className="profile">
            <div>
                <img src={picture} alt=""/>
            </div>
            <div>
                <h2 className="profile-name">{name}</h2>
                <h4>{email}</h4>
                <p><small>phone: {phone}</small></p>
                <p>Salary : {salary}</p>
                <button className="add-button" onClick = {() => props.handleSalaryAdd(props.profile)}>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </div>
        </div>
    );
};

export default Data;