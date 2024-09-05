
// import React, { useState } from "react";
// import menuItems from "../constant/Menus.json";
// import { Link, useLocation } from "react-router-dom";

// import UserDetail from "./feturesItems/UserDetail";
// import DarkMode from "./feturesItems/DarkMode";

// import "../App.css";
// import {
//     House,
//     GeoAlt,
//     Houses,
//     Person,
//     Box,
//     Box2,
//     CardChecklist,
//     Receipt,
//     BarChart,
//     ChevronLeft,
//     ChevronRight,
//     ChevronDoubleDown,
//     BoxArrowLeft
// } from "react-bootstrap-icons";
// // import Fetures from "./fetures/Fetures";

// const iconMap = {
//     House,
//     GeoAlt,
//     Houses,
//     Person,
//     Box,
//     CardChecklist,
//     Receipt,
//     BarChart,
//     Box,
//     Box2,
//     BoxArrowLeft
// };

// const Menus = ({ dashboardShrink, setDashboardShrink }) => {
//     const location = useLocation();
//     const currentPath = location.pathname.replace(/^\/+/, "");

//     const [openDropdown, setOpenDropdown] = useState(null);

//     function handleDropdownToggle(id) {
//         setOpenDropdown(openDropdown === id ? null : id);
//     }

//     function handleDashboardShrink() {
//         setDashboardShrink(!dashboardShrink);
//     }

//     return (
//         <div className="py-3 pt-4 position-relative">
//             <div className="position-relative   my-3">
//                 <div className="position-relative" style={{ position: "relative" }}>
//                     <div
//                         className="position-absolute bg-primary rounded-5 d-flex align-items-center justify-content-center"
//                         style={{
//                             position: "absolute",
//                             height: "30px",
//                             width: "30px",
//                             right: "0px",
//                             top: "0px",
//                             zIndex: 100,
//                         }}
//                         onClick={() => handleDashboardShrink()}
//                     >
//                         {dashboardShrink ? (
//                             <ChevronRight color="white" />
//                         ) : (
//                             <ChevronLeft color="white" />
//                         )}
//                     </div>
//                 </div>

//                 <div>
//                     {dashboardShrink ? (
//                         <img
//                             src="dashboard.svg"
//                             alt="Dashboard Icon"
//                             className="ps-2"
//                             style={{
//                                 height: "30px",
//                                 width: "30px",
//                             }}
//                         />
//                     ) : (
//                         <h3 className="ps-3">Dashboard</h3>
//                     )}
//                 </div>
//             </div>

//             <div>
//                 <div className="d-flex flex-column gap-2   border-bottom  ">
//                     {menuItems.menuItems.map((data) => {
//                         const isActive = currentPath === data.link;
//                         const IconComponent = iconMap[data.icon];

//                         const isDropdownOpen = openDropdown === data.id;

//                         dashboardShrink;

//                         return (
//                             <React.Fragment key={data.id}>
//                                 {data.subMenus ? (
//                                     <div
//                                         className={`${dashboardShrink
//                                                 ? "d-flex justify-content-center flex-column align-items-center "
//                                                 : " ps-3"
//                                             } 
//                                             ${isActive
//                                                 ? "bg-primary text-white"
//                                                 : "text-black"
//                                             }
//                                              hover:bg-light custom-hover `}
//                                     >
//                                         <Link
//                                             to={data.link}
//                                             className={` hover:bg-light custom-hover text-decoration-none d-flex  align-items-center     py-2   gap-1 font-weight-500 ${isActive ? "bg-primary text-white" : "text-black"
//                                                 }`}
//                                             onClick={() => handleDropdownToggle(data.id)}
//                                         >
//                                             {/* {IconComponent && <IconComponent className="my-1" />} */}
//                                             {isDropdownOpen && dashboardShrink ? (
//                                                 <ChevronDoubleDown />
//                                             ) : (
//                                                 IconComponent && <IconComponent className="my-1" />
//                                             )}
//                                             {dashboardShrink ? "" : <span>{data.name}</span>}
//                                         </Link>
//                                         {isDropdownOpen && (
//                                             <div className="mt-2   w-100  d-flex align-items-center flex-column justify-content-start border w-100">
//                                                 {data.subMenus.map((subMenu) => (
//                                                     <Link
//                                                         to={subMenu.link}
//                                                         key={subMenu.id}
//                                                         className={`text-decoration-none d-flex w-100 justify-content-center  border align-items-center  py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === subMenu.link
//                                                                 ? "bg-primary text-white "
//                                                                 : "text-black"
//                                                             }
//                                                             ${dashboardShrink
//                                                                 ? ""
//                                                                 : "ps-5  "
//                                                             }`}
//                                                     >
//                                                         {dashboardShrink ? "M" : subMenu.subMenuName}
//                                                     </Link>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <div
//                                         className={`${dashboardShrink
//                                                 ? "d-flex justify-content-center"
//                                                 : " ps-3"
//                                             } ${isActive ? "bg-primary text-white" : "text-black"
//                                             } hover:bg-light custom-hover`}
//                                     >
//                                         <Link
//                                             to={data.link}
//                                             className={`hover:bg-light custom-hover text-decoration-none d-flex  align-items-center  py-2   gap-1 font-weight-500 text-black ${isActive ? "bg-primary text-white" : "text-black"
//                                                 }`}
//                                         >
//                                             {IconComponent && <IconComponent className="my-2 " />}
//                                             {dashboardShrink ? "" : <span>{data.name}</span>}
//                                         </Link>
//                                     </div>
//                                 )}
//                             </React.Fragment>
//                         );
//                     })}
//                 </div>
//             </div>
//             <div className="mt-3">
//                 <div className=" ps-3">
//                     <UserDetail dashboardShrink={dashboardShrink} />
//                 </div>
//                 <div className=" ps-3 mt-3">
//                     <DarkMode dashboardShrink={dashboardShrink} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Menus;





import React, { useState } from "react";
import menuItems from "../constant/Menus.json";
import { Link, useLocation } from "react-router-dom";

import UserDetail from "./feturesItems/UserDetail";
import DarkMode from "./feturesItems/DarkMode";

import "../App.css";
import {
    House,
    GeoAlt,
    Houses,
    Person,
    Box,
    Box2,
    CardChecklist,
    Receipt,
    BarChart,
    ChevronLeft,
    ChevronRight,
    ChevronDoubleDown,
    BoxArrowLeft
} from "react-bootstrap-icons";
// import Fetures from "./fetures/Fetures";

const iconMap = {
    House,
    GeoAlt,
    Houses,
    Person,
    CardChecklist,
    Receipt,
    BarChart,
    Box,
    Box2,
    BoxArrowLeft
};

const Menus = ({ dashboardShrink, setDashboardShrink }) => {
    const location = useLocation();
    const currentPath = location.pathname.replace(/^\/+/, "");

    const [openDropdown, setOpenDropdown] = useState(null);

    function handleDropdownToggle(id) {
        setOpenDropdown(openDropdown === id ? null : id);
    }

    function handleDashboardShrink() {
        setDashboardShrink(!dashboardShrink);
    }

    return (
        <div className="py-3 pt-4 position-relative">
            <div className="position-relative   my-3">
                <div className="position-relative" style={{ position: "relative" }}>
                    <div
                        className="position-absolute bg-primary rounded-5 d-flex align-items-center justify-content-center"
                        style={{
                            position: "absolute",
                            height: "30px",
                            width: "30px",
                            right: "0px",
                            top: "0px",
                            zIndex: 100,
                        }}
                        onClick={() => handleDashboardShrink()}
                    >
                        {dashboardShrink ? (
                            <ChevronRight color="white" />
                        ) : (
                            <ChevronLeft color="white" />
                        )}
                    </div>
                </div>

                <div>
                    {dashboardShrink ? (
                        <img
                            src="dashboard.svg"
                            alt="Dashboard Icon"
                            className="ps-2"
                            style={{
                                height: "30px",
                                width: "30px",
                            }}
                        />
                    ) : (
                        <h3 className="ps-3">Dashboard</h3>
                    )}
                </div>
            </div>

            <div>
                <div className="d-flex flex-column gap-2   border-bottom  ">
                    {menuItems.menuItems.map((data) => {
                        const isActive = currentPath === data.link;
                        const IconComponent = iconMap[data.icon];

                        const isDropdownOpen = openDropdown === data.id;

                        dashboardShrink;

                        return (
                            <React.Fragment key={data.id}>
                                {data.subMenus ? (
                                    <div
                                        className={`${dashboardShrink
                                            ? "d-flex justify-content-center flex-column align-items-center "
                                            : " "
                                            } 
                                            ${isActive
                                                ? "bg-primary text-white"
                                                : "text-black"
                                            }
                                             hover:bg-light custom-hover `}
                                    >
                                        <Link
                                            to={data.link}
                                            className={` hover:bg-light custom-hover text-decoration-none d-flex  align-items-center     py-2   gap-1 font-weight-500 ${isActive ? "bg-primary text-white" : "text-black"
                                                }
                                                ${dashboardShrink ? "" : "ps-3"}
                                                `}
                                            onClick={() => handleDropdownToggle(data.id)}
                                        >
                                            {/* {IconComponent && <IconComponent className="my-1" />} */}
                                            {isDropdownOpen && dashboardShrink ? (
                                                <ChevronDoubleDown />
                                            ) : (
                                                IconComponent && <IconComponent className="my-1" />
                                            )}
                                            {dashboardShrink ? "" : <span>{data.name}</span>}
                                        </Link>
                                        {isDropdownOpen && (
                                            <div className="mt-2   w-100  d-flex align-items-center flex-column">
                                                {data.subMenus.map((subMenu) => (
                                                    <Link
                                                        to={subMenu.link}
                                                        key={subMenu.id}
                                                        className={`text-decoration-none d-flex w-100 justify-content-center   align-items-center  py-2   gap-1 hover:bg-light custom-hover font-weight-500 ${currentPath === subMenu.link
                                                            ? "bg-primary text-white "
                                                            : "text-black"
                                                            }
                                                            ${dashboardShrink
                                                                ? ""
                                                                : " "
                                                            }`}
                                                    >
                                                        {dashboardShrink ? "M" : subMenu.subMenuName}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
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
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="mt-3">
                <div className=" ps-3">
                    <UserDetail dashboardShrink={dashboardShrink} />
                </div>
                <div className=" ps-3 mt-3">
                    <DarkMode dashboardShrink={dashboardShrink} />
                </div>
            </div>
        </div>
    );
};

export default Menus;




