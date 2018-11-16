import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const styles = {
    card: {
        maxWidth:235,
        
    },
    media: {
        objectFit: 'cover',
    },

};

function CharacterCard(props){
    const {classes} = props;
    return(
    <Card className={classes.card}>
    <CardActionArea>
        <CardMedia
        component='img'
        alt='Character Card'
        className={classes.media}
        height='300'
        width='75'
        image='./'
        title='Insert Character Name Here'/
        >
        <CardContent>
        <Typography gutterBottom variant = 'h5' component = 'h2'>
            {props.CharacterName? props.CharacterName:'Your character here'}
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
    )
    CharacterCard.PropTypes = {
        classes: PropTypes.object.isRequired,

    };
    
};
export default withStyles(styles)(CharacterCard);