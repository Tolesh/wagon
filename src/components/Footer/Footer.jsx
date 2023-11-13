import React from 'react'
import {
  Box,
  Stack,
  styled,
  Typography,
  ListItem
} from '@mui/material'
import FooterTitle from './FooterTitle'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FooterLink from './FooterLink';


const Footer = () => {

  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#221F2E',
    flex: 1,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    

    }
  }));
const CustomTypography2 = styled(Typography) ({
  fontSize: '1.1rem',
  textAlign: 'start',
  // lineHeight: '1.5',
  color: '#fff',
  textDecorationLine: 'none',
 
})




  return (

    <BoxRow
      component='footer'
      sx={{
        py: 4,
        bottom: 0,
        width: '100%',
        height: '16%',
        position: 'relative'
      }}
    >
  
      <StackColumn>
        <FooterTitle text={'Адрес'} />
        <FooterLink text={'Тарас Шевченко (БЦ Достык), Астана'} />
        <Stack 
        direction='row' 
        width= '150px'
        maxWidth='100%'
        justifyContent='space-between'
        
        >
        <ListItem variant="body2"
          sx={{
            color: '#fff',
            padding: '4px',
            marginBottom: '0px'

          }}
        >
          <PhoneIcon />   
        </ListItem>
        <ListItem variant="body2" 
          sx={{
            color: '#fff',
            padding: '4px',
    marginBottom: '0px'

          }}
          >
          <FooterLink text={'+7773334466'} />
            
          </ListItem> 
        </Stack>
        <Stack 
        direction='row' 
        width= '150px'
        maxWidth='100%'
        justifyContent='space-between'
        >
        <ListItem variant="body2"
          sx={{
            color: '#fff',
            padding: '4px',
            
          }}
        >
          <EmailIcon />   
        </ListItem>
        <ListItem variant="body2" 
          sx={{
            color: '#fff',
            padding: '4px'
          }}
          >
         <FooterLink text={'qwerty@mail.ru'} />
          </ListItem> 
        </Stack>
      </StackColumn>
      

      {/* <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'buy house'} />
        <FooterLink text={'sell house'} />
        <FooterLink text={'rent house'} />
        <FooterLink text={'build house'} />
      </StackColumn> */}
      {/* <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn> */}

      {/* <StackColumn>
        <FooterTitle text={'Есиль'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2022 HBSales Inc.
        </Typography>
      </StackColumn> */}
    </BoxRow>
  )
}

export default Footer