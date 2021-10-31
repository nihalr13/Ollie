import React from 'react';
import {Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import './Sidebar.sass'
import logo from "../../Ollie-logo.png"

function Sidebar() {
    return (
        <ProSidebar>
            <SidebarHeader>
                <center> <img src={logo} style={{ width: "150px" , height: "150px", objectFit: "cover" }} /> </center>
            </SidebarHeader>
            
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem>
                        Board
                        <Link to="/Board" />
                    </MenuItem>
                    <MenuItem>
                        Profile
                        <Link to="/Profile" />
                    </MenuItem>
                    <MenuItem>
                        Settings
                        <Link to="/Settings" />
                    </MenuItem>
                    <SubMenu title="Stories by category">
                        <MenuItem>
                            Backlog
                            <Link to="/StoryDetails" />
                        </MenuItem>
                        <MenuItem>
                            In Progress
                            <Link to="/StoryDetails" />
                        </MenuItem>
                        <MenuItem>
                            Blocked
                            <Link to="/StoryDetails" />
                        </MenuItem>
                        <MenuItem>
                            Done
                            <Link to="/StoryDetails" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="FOR DEVELOPMENT">
                        <MenuItem>
                            login
                            <Link to="/login" />
                        </MenuItem>
                        <MenuItem>
                            signup
                            <Link to="/signup" />
                        </MenuItem>
                        <MenuItem>
                            create story
                            <Link to="/CreateStory" />
                        </MenuItem>
                        <MenuItem>
                            Board by date
                            <Link to="/BoardByDate" />
                        </MenuItem>
                        
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter>
                <center>
                    Ollie 2021 &copy;
                </center>
            </SidebarFooter>

        
            
        </ProSidebar>           
    
    );
}




export default Sidebar;