// 'use client'

// import { useCallback, useEffect, useState } from "react";

// export const useCustomContextMenu = () => {
//     const [xPos, setXPos] = useState("0px");
//     const [yPos, setYPos] = useState("0px");
//     const [showContextMenu, setshowContextMenu] = useState(false);

//     const handleContextMenu = useCallback(
//         (e: { preventDefault: () => void; pageX: any; pageY: any; }) => {
//             e.preventDefault();
//             setXPos(`${e.pageX}px`);
//             setYPos(`${e.pageY}px`);
//             setshowContextMenu(true);
//     }, [setXPos, setYPos]);

//     const handleClick = useCallback(() => {
//         showContextMenu && setshowContextMenu(false);
//     }, [showContextMenu]);

//     useEffect(() => {
//         document.addEventListener("click", handleClick);
//         document.addEventListener("contextmenu", handleContextMenu);
//         return () => {
//             document.addEventListener("click", handleClick);
//             document.removeEventListener("contextmenu", handleContextMenu);
//         };
//     });
//     return { xPos, yPos, showContextMenu };
// };
