import React from 'react'
import {FaBars}  from "react-icons/fa";
import { Link } from 'react-router-dom';
import {AiOutlineCode, AiOutlineContacts, AiFillHome, AiOutlineProfile, AiOutlineClose} from 'react-icons/ai';

export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: './Projects',
        icon: <AiOutlineCode/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: './About',
        icon: <AiOutlineProfile/>,
        cName: 'nav-text'
    },
    {
        title: 'Contacts',
        path: './contacts',
        icon: <AiOutlineContacts/>,
        cName: 'nav-text'
    },
    
]