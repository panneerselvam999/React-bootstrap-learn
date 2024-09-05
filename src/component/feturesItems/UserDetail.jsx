import React from 'react'

const UserDetail = ({ dashboardShrink }) => {
    return (
        <div className=' d-flex'>
            <div>
                <img src="./avathar.svg" alt="" style={{ height: "40px", width: "40px" }} />
            </div>
            <div className={`d-flex flex-column ${dashboardShrink ? "d-none" : ""}`}>
                <span>PANNEER SELVAM</span>
                <span>panneer@gmail.com</span>
            </div>
        </div>
    )
}

export default UserDetail