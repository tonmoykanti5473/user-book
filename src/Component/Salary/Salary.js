import React from 'react';

const Salary = (props) => {
    const salary = props.salary
    const totalSalary = salary.reduce((total,slr) => total + slr.salary,0)
    const year = 12
    return (
        <div>
            <h3>Salary Summary : </h3>
            <p>Added Professionals : {salary.length} </p>
            <p>Monthly Salary(one employee ): {totalSalary}</p>
            <p>Total Yearly Salary : {totalSalary * year} </p>
        </div>
    );
};

export default Salary;