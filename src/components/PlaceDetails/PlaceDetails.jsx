import React from 'react'
import {Box,Button,Card,CardMedia,CardContent,CardActions,Chip, Typography, CardActionArea} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles.js'
const PlaceDetails = ({place,selected,refProp}) => {
  const classes=useStyles();

  if(selected) refProp?.current?.scrollIntoView({behavior:"smooth",block:'start'})
  return (
    <div className={classes.div}>
    <Card elevation={6}>
      <CardActionArea>
      <CardMedia
        style={{height:300}}
        image={place.photo?place.photo.images.large.url:""}
        title={place.name}/>
        <CardContent>
          <Typography gutterBottom variant='h5'>{place.name}</Typography>
          <Box display="flex" justifyContent='space-between'>
          <Rating  value={Number(place.rating)} readonly/>
            <Typography gutterBottom variant='subtitle1'>Out of {place.num_reviews} reviews</Typography>
          </Box>
          <Box display="flex" justifyContent='space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
          </Box>
          {place?.awards?.map((award)=>
          (
            <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
              <img src={award.images.small} alt={award.display_name}/>
            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({name})=>
          (
            <Chip key={name} size='small' label={name} className={classes.chip}/>
          ))}

          {place?.address && (
            <Typography gutterBottom variant='body' color='textSecondary' className={classes.subtitle}>
              <LocationOnIcon/>{place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography gutterBottom variant='body' color='textSecondary' className={classes.spacing}>
              <PhoneIcon/>{place.phone}
            </Typography>
          )}
          <CardActions>
            <Button size='small' color='primary' onClick={()=>
            {
              window.open(place.web_url, '_blank')
            }} >
              Trip Advisor
            </Button>
            <Button size='small' color='primary' onClick={()=>
            {
              window.open(place.website, '_blank')
            }} >
              Website
            </Button>
          </CardActions>
        </CardContent>
        </CardActionArea>
    </Card>
    </div>
  )
}

export default PlaceDetails
