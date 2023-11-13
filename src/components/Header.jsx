import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import TextSpan from "./BackGroundAnim/TextSpan";
import Img from '../assets/ii2.jpg'
import { motion } from "framer-motion"
import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import 'react-awesome-button/dist/styles.css';
import { BeakerIcon, TrashIcon, ZapIcon } from "@primer/octicons-react"; 
// import { Link } from "react-scroll"

const Header = () => {
    const sentence = "WAGONIUM - КАЧЕСТВО ОБЕСПЕЧЕНО".split("");
    const sentence2 = "Более 1000 поездов было отремонтировано".split("");
    const sentence3 = "Исследовать".split("");
 
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#fff',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    return (
        <CustomBox component='header' >
            {/*  Box text  */}
            <div style={{"height": "400px"}}></div>
            <BoxText
                component='section'
                position={'absolute'}
            >
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    WAGONIUM - КАЧЕСТВО ОБЕСПЕЧЕНО
                       {/* {sentence.map((letter,index) =>{
            return (
                <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </TextSpan>
            )
        }
    )} */}
                </Typography>
             

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                     {sentence2.map((letter,index) =>{
            return (
                <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </TextSpan>
            )
        }
    )}
                </Typography>
          <Typography
            style={{ fontSize: "1.5rem ", fontWeight: "600", marginLeft: "2%" }}
          >
            {/* <Typed
              strings={["Full Stack Developer", "Level One Seller at Fiverr"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            /> */}
          </Typography>

                <Box sx={{textAlign: 'center', py:2 }}>
                    <img src={Img} alt="" width={'80%'} style={{borderRadius: '20px'}}/>
                    {/* <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        buy now
                    </Button> */}
                    {/* <Link to='/about'>
                    <AwesomeButton type="link" before={<ZapIcon />}
                    // ripple={true}
                        //   cssModule={AwesomeButtonStyles}
                    //  component={Link}
                    //     to={'/about'}
                    //     variant='contained'
                    >
                        Исследовать
                    </AwesomeButton>
                    </Link> */}
                    {/* <Button
                        component={Link}
                        to={'/about'}
                        variant='contained'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#14192d',
                            color: '#e3e2df',
                            backgroundColor: '#14192d',
                            "&&:hover": {
                                backgroundColor: "#343a55",
                                transform: [{rotateY: '45deg'}]
                            },
                            "&&:focus": {
                                backgroundColor: "#343a55"
                            }
                        }}
                    >
                         {sentence3.map((letter,index) =>{
            return (
                <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </TextSpan>
            )
        }
    )}
                    </Button> */}
                </Box>
            </BoxText>

          

        </CustomBox>
    )
}

export default Header