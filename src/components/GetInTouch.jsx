import React from 'react'
import {  
    Button,
    ListItem,
    Stack,
    Typography,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
import TextSpan from './BackGroundAnim/TextSpan'
import { AwesomeButton } from 'react-awesome-button'
import { ZapIcon } from '@primer/octicons-react'
import PhoneIcon from '@mui/icons-material/Phone';
import FooterLink from './Footer/FooterLink'
const GetInTouch = () => {
    const sentence = "СВЯЖИТЕСЬ С НАМИ !".split("");
    const sentence2 = `Мы постараемся выполнить профессиональный опыт ремонта локомотивов.`.split("");
    const sentence3 = "Исследовать".split("");
    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        position={'relative'}

        sx={{
            py: 10,
            // mx: 8,
            color: '#e3e2df'
        }}
        >
        {/* <div id="section_2" style={{"height": "500px"}}></div> */}

            <Title 
            
            text={sentence.map((letter,index) =>{
                    return (
                        <TextSpan key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </TextSpan>
                    )
                }
            )}
            textAlign={'center'}
            
            />
            <Paragraph 
            text={sentence2.map((letter,index) =>{
                return (
                    <TextSpan key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                )
            }
        )}
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            
            />
             <Stack 
        direction='row' 
        width= '150px'
        maxWidth='100%'
        justifyContent='center'
        alignItems='center'
        
        >
        <ListItem variant="body2"
          sx={{
            color: '#fff',
            padding: '0px',
            // marginX: '-3px',
            marginBottom: '0px'

          }}
        >
          <PhoneIcon />   
        </ListItem>
        <ListItem variant="body2" 
          sx={{
            color: '#fff',
            // padding: '4px',
            marginBottom: '0px',
            minWidth: '200px'
          }}
          >
          <Typography  sx={{
  textDecorationLine: 'none',
      fontSize: '1.3rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#fff',
      textTransform: 'capitalize',
     
    }}>8-777-333-44-66</Typography>
            
          </ListItem> 
        </Stack>
            {/* <Title 
            text={
                'телефон: +77776665544'
                } 
            justifyContent={'center'}
            textAlign={'center'}
            /> */}
            {/* <Link to='/contact'>
            <AwesomeButton style={{}} before={<ZapIcon />}
                    // ripple={true}
                        //   cssModule={AwesomeButtonStyles}
                    //  component={Link}
                    //     to={'/about'}
                    //     variant='contained'
                    >
                        Исследовать
                    </AwesomeButton>
                    </Link> */}
            {/* <Button component={Link} 
            
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&&:hover": {
                    backgroundColor: "#343a55"
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
 
        </Stack>
    )
}

export default GetInTouch;