import CssBaseline from '@mui/material/CssBaseline'
import  Toolbar  from "@mui/material/Toolbar"
import { AppBar } from './Appbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import  Typography  from "@mui/material/Typography"

const Navbar = (props) => {
    return(
        <>
            <CssBaseline/>
            <AppBar 
            style={{backgroundColor:'#83072D'}}
            position="fixed" 
            open={props.open} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        sx={{mr:2, ...(props.open && {display:'none'})}}
                    >
                         <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Lineal-Algebra-PDI
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar