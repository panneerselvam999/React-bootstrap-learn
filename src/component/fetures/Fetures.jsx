// import React from "react";
// import { Gear, BoxArrowRight, CheckSquare } from "react-bootstrap-icons";
// import { Link, useLocation } from "react-router-dom";
// import DarkMode from "../feturesItems/DarkMode";
// import UserDetal from "../feturesItems/UserDetal";
// import fetureItems from "../../constant/fetures.json"

// const Fetures = ({ dashboardShrink }) => {
//     const location = useLocation();
//     const currentPath = location.pathname.replace(/^\/+/, "");

//     return (
//         <div className={`d-flex flex-column gap-3 ${dashboardShrink ? " ps-1" : ""}`}>
//             <div className=" d-flex flex-column gap-3 p-0">
//                 <Link
//                     to={"/attendance"}
//                     className={`text-decoration-none d-flex align-items-center ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "attendance"
//                         ? "bg-primary text-white"
//                         : "text-black"
//                         }`}
//                 >
//                     <CheckSquare />
//                     {dashboardShrink ? "" : <span>Attendance</span>}
//                 </Link>
//                 <Link
//                     to={"/settings"}
//                     className={`text-decoration-none d-flex align-items-center ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "settings" ? "bg-primary text-white" : "text-black"
//                         }`}
//                 >
//                     <Gear />
//                     {dashboardShrink ? "" : <span>Settings</span>}
//                 </Link>
//                 <Link
//                     to={"/logout"}
//                     className={`text-decoration-none d-flex align-items-center  ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "logout" ? "bg-primary text-white" : "text-black"
//                         }`}
//                 >
//                     <BoxArrowRight />
//                     {dashboardShrink ? "" : <span>Log Out</span>}
//                 </Link>
//             </div>
//             <div className=" ps-3">
//                 <UserDetal dashboardShrink={dashboardShrink} />
//             </div>
//             <div className=" ps-3">
//                 <DarkMode dashboardShrink={dashboardShrink} />
//             </div>
//         </div>
//     );
// };

// export default Fetures;







import React from "react";
import { Gear, BoxArrowRight, CheckSquare } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "../feturesItems/DarkMode";
import UserDetal from "../feturesItems/UserDetail";
import fetureItems from "../../constant/fetures.json"

const Fetures = ({ dashboardShrink }) => {
    const location = useLocation();
    const currentPath = location.pathname.replace(/^\/+/, "");


    function linkFun(data) {
        const isActive = currentPath === data.link;

        return (
            // <Link
            //     key={data.id}
            //     to={data.Link}
            //     className={`text-decoration-none d-flex align-items-center ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "attendance"
            //         ? "bg-primary text-white"
            //         : "text-black"
            //         }`}
            // >
            //     <CheckSquare />
            //     {dashboardShrink ? "" : <span>{data.name}</span>}
            // </Link>

            <div
                className={`${dashboardShrink
                    ? "d-flex justify-content-center"
                    : " ps-3"
                    } ${isActive ? "bg-primary text-white" : "text-black"
                    } hover:bg-light custom-hover`}
            >
                <Link
                    to={data.link}
                    className={`hover:bg-light custom-hover text-decoration-none d-flex  align-items-center  py-2   gap-1 font-weight-500 text-black ${isActive ? "bg-primary text-white" : "text-black"
                        }`}
                >
                    {IconComponent && <IconComponent className="my-2 " />}
                    {dashboardShrink ? "" : <span>{data.name}</span>}
                </Link>
            </div>
        )
    }

    return (
        <div className={`d-flex flex-column gap-3 ${dashboardShrink ? " ps-1" : ""}`}>
            <div className=" d-flex flex-column gap-3 p-0">

                {
                    fetureItems.feturesItems.map(item => (
                        linkFun(item)
                    ))
                }
                {/* <Link
                    to={"/attendance"}
                    className={`text-decoration-none d-flex align-items-center ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "attendance"
                        ? "bg-primary text-white"
                        : "text-black"
                        }`}
                >
                    <CheckSquare />
                    {dashboardShrink ? "" : <span>Attendance</span>}
                </Link>
                <Link
                    to={"/settings"}
                    className={`text-decoration-none d-flex align-items-center ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "settings" ? "bg-primary text-white" : "text-black"
                        }`}
                >
                    <Gear />
                    {dashboardShrink ? "" : <span>Settings</span>}
                </Link>
                <Link
                    to={"/logout"}
                    className={`text-decoration-none d-flex align-items-center  ps-3 py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === "logout" ? "bg-primary text-white" : "text-black"
                        }`}
                >
                    <BoxArrowRight />
                    {dashboardShrink ? "" : <span>Log Out</span>}
                </Link> */}
            </div>
            <div className=" ps-3">
                <UserDetal dashboardShrink={dashboardShrink} />
            </div>
            <div className=" ps-3">
                <DarkMode dashboardShrink={dashboardShrink} />
            </div>
        </div>
    );
};

export default Fetures;
