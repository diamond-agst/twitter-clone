import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MessageIcon} text="Messages" />
            <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PersonIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>


        </div>
    )
}

export default Sidebar
