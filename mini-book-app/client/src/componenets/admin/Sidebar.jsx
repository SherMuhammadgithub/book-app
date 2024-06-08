import React from 'react'
import { Button } from "flowbite-react";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';
export default function Sidebars() {
    return (
        <Sidebar aria-label="Default sidebar example" className='w-full bg-blue-900'>
            <Sidebar.Items >
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie} className = "mb-12">
                        Admin Dashboard
                    </Sidebar.Item>
                    <Link to={'/admin/Books'}><Sidebar.Item href="#" icon={HiViewBoards}>
                        Books
                    </Sidebar.Item></Link>
                    <Link to={'/admin/add'}><Sidebar.Item href="#" icon={HiInbox}>
                        Add Book
                    </Sidebar.Item></Link>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <a href={'/'}> <Sidebar.Item icon={HiArrowSmRight}>
                        Back to user Pannel
                    </Sidebar.Item></a>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
