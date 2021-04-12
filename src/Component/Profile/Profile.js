import React, { useState } from 'react';
import fakeData from '../../fakeData/generated.json'
import Data from '../Data/Data';
import Salary from '../Salary/Salary';
import './Profile.css'

const Profile = () => {
    const[profiles,setProfiles] = useState(fakeData)
    const [salary,setSalary] = useState([])

    const handleSalaryAdd = (profile) =>{
        console.log('Added', profile)
        const newSalary = [...salary,profile]
        setSalary(newSalary)
    }
    return (
        <div className='profile-container'>
            <div className="data-container">
                {
                    profiles.map(pr => <Data 
                        handleSalaryAdd = {handleSalaryAdd}
                        profile={pr}
                        ></Data> )
                }
            </div>
            <div className="salary-container">
                <Salary salary={salary}></Salary>
            </div>

        </div>
    );
};

export default Profile;