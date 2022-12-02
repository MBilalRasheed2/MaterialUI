import React from 'react'
import { Container, Typography, Paper, List, ListItem, SwipeableDrawer, ListItemButton, ListItemText, ListItemIcon, AppBar, Toolbar, IconButton, Divider } from '@mui/material';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LayersIcon from '@mui/icons-material/Layers';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const Header = () => {
    const [toggleDrawerIcon, setToggleForDrawerIcon] = React.useState(false);
    const toggleDrawer = () => {
        setToggleForDrawerIcon(!toggleDrawerIcon)
    };
    return (
        <>

            <Paper>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
                            <MenuOutlined />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Paper>

            <Container maxWidth="xl" >


                <SwipeableDrawer
                    anchor={"left"}
                    open={toggleDrawerIcon}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                    style={{minWidth:'500px'}}
                >
                    <NavigateBeforeIcon al />
                    <List>
                        {[
                            { name: "Dashboard", Icon: <DashboardIcon /> },
                            { name: "Order", Icon: <ShoppingCartIcon /> },
                            { name: "Customer", Icon: <PeopleIcon /> },
                            { name: "Reports", Icon: <AssignmentIcon /> },
                            { name: "Integrations", Icon: <LayersIcon /> },
                        ].map((item, index) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.Icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Typography
                        sx={{ mt: 0.5, ml: 9 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                        Saved Reports
                    </Typography>
                    <List>
                        {[
                            "Current Month", "Last Quarter", "Year End Sale"
                        ].map((item, index) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>

            </Container>
        </>
    )
}

export default Header
