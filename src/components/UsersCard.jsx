
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { UserCard } from 'react-ui-cards';
import sk from '../assets/sagitkamilovic.jpg'
import tz from '../assets/tenizovsabyrzhan.jpg'
import mr from '../assets/mazhitovrenat.jpg'
import ai from '../assets/rena.jpg'
import ba from '../assets/bolatbekovaAsel.jpg'
import ta from '../assets/tobulovaaliya.jpg'
import Title from './Title';
import TextSpan from './BackGroundAnim/TextSpan';
import Slider from 'react-slick';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
// import jsondata from '../data.json'
const UsersCard = () => {

const users = [
  [{
        "id": 1,
        "name": "Сабит Камилович",
        "job": "Директор",
        "photo": sk
      },
      {
        "id": 2,
        "name": "Тенизов Сабыржан",
        "job": "Старший мастер",
        "photo": tz
      },
      {
        "id": 3,
        "name": "Мажитов Ренат",
        "job": "Инспектор по ОТиТБ",
        "photo": ai
      },
   ],
[   {
        "id": 4,
        "name": "Айтхожин Канат",
        "job": "Начальник Технического отдела",
        "photo": mr
      },
      {
        "id": 5,
        "name": "Болатбекова Асель",
        "job": "помощник инженера технолога",
        "photo": ta
      },
      {
        "id": 6,
        "name": "Тобулова Алия",
        "job": "ведущий бухгалтер",
        "photo": ba
      },
],

]

    return (
        <Grid
        sx={{py: 6,
            px: 2,}}
            >
           <Typography
             variant='h4'
             component='h3'
             py={3}
             sx={{ 
               fontWeight: '700',
               justifyContent: 'center',
               display: 'flex',
               color: '#fff',
               position: 'relative',

            }}
            >
            НАШИ РАБОТНИКИ
           </Typography>
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        }}
        >
            {/* <Slider {...settings}>
             {users.map((users) => (
        <UserCard
    float
    // href='https://github.com/nukeop'
    header={users.photo}
    // avatar='https://i.imgur.com/XJxqvsU.jpg'
    name={users.name}
    positionName={users.job}
/>

))}
</Slider> */}
 <Carousel sx={{'width': '100%','maxWidth':'850px',}} >
    {users.map((userData) => {
      return(
    <div style={{'display': 'flex','flexWrap': 'wrap'}}>
    {userData.map((users) => {
      return(
        <div style={{'flexBasis': '33.33%'}}>
        <UserCard
        
        float
        // href='https://github.com/nukeop'
        header={users.photo}
        // avatar='https://i.imgur.com/XJxqvsU.jpg'
        name={users.name}
        positionName={users.job}
       
    />
     </div>
      )
      })}
    </div>
      )
      })}
</Carousel>
 
</Grid>
</Grid>
    )
    }

// return (
//     <Box
//       sx={{
//         px: 1.5,
//         py: 5,
//       }}
//     >
// <Box sx={{ mb: 2 }}>
//           <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
//             {item.name}
//           </Typography>
//           <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography>
//           <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
//             {item.description}
//           </Typography>
//           <Box sx={{ '& img': { height: 26 } }}>
//             {/* eslint-disable-next-line */}
//             <img src={item.company?.logo} alt={item.company?.name + ' logo'} />
//           </Box>
//         </Box>
//         </Box>
//         )
        
export default UsersCard;