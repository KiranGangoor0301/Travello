import React from 'react'
import { useState } from 'react';
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'

const Header = ({setCoordinates}) => {
    const classes=useStyles();
    const [autocomplete,setAutocomplete]=useState(null);
    const onLoad=(autoC)=>setAutocomplete(autoC);

    const onPlaceChanged=()=>
    {
        const lat=autocomplete.getPlace().geometry.location.lat();
        const lng=autocomplete.getPlace().geometry.location.lng();

        setCoordinates({lat,lng})
    }
  return (
    <AppBar position='static' className={classes.header}>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.head}>
        Travello Advise
            </Typography>
            <Box display='flex' className={classes.box}>
            <Typography variant='h5' className={classes.title}>
        Search for new Vibes
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase placeholder='Search...' classes={{root:classes.inputBase ,input:classes.inputInput}}/>
                </div>
            </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
