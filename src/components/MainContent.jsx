import React, { useState, useEffect } from 'react';

const MainContent = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=> {
        setUsers(JSON.parse(localStorage.getItem("userDetails")));
    },[])

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Contact</th>
                    </tr>
                </thead>
                <tbody>

                    {

                    users.map((item, index) => (
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))
    }


                </tbody>
            </table>
        </div>
    );
};

export default MainContent;