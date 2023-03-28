import React, { useEffect, createRef } from 'react';
import { useState } from 'react';
import useStyles from './styles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

const List = ({ places, childClicked, isLoading,type,setType,rating,setRating }) => {
  const classes = useStyles();
  
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  useEffect(() => {
    if (childClicked !== null && elRefs[childClicked]) {
      elRefs[childClicked].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [childClicked, elRefs]);

  return (
    <div className={classes.configure}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Typography variant="h4" className={classes.type}>
            Restaurants, Hotels & Attractions around you
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)} className={classes.type}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.type}>Ratings</InputLabel>
            <Select
              className={classes.type}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid item key={index} xs={12} ref={elRefs[index]}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
