import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/sitephoto7.jpg';
import imgDetail2 from '../assets/sitephoto8.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#fff',
        marginTop: '1.5rem',
    })

    return (
        <section
        data-aos="fade-right"
        className="services-container"
        name="services"
        id="services"
        style={{display: 'flex',margin: '25px'}}
        
      >

        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 8,
            px: 2,
             
        }}
        >
            
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'О КОМПАНИИ'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    ТОО «Esil-Lokomotiv» располагает 6 сервисными центрами, 2 производственными <br />
                    участками, расположенными на станциях Алматинского, Шымкентского, Экибастузского, <br />
                    Карагандинского, Жанааркаского, и Сарыозекского отделений железных дорог,в границах <br />
                    полигона работы локомотивов группы компаний. Штатная численность производственного <br />
                    персонала составляет 380 сотрудников. Количество локомотивов, находящихся на сервисном <br />
                    обслуживании, составляет более 100 единиц.
                    </CustomTypography> 
                </Box>
                

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                    borderRadius: '20px',
                    position: 'relative'
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                    borderRadius: '20px',
                    position: 'relative'
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                    py: 3
                }}
                >
                    <Title
                    text={
                        'РЕМОНТ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    ТОО «Loco-Center» является одним из двух базовых предприятий, которое оказывает услуги по<br /> 
                    ремонту и сервисному обслуживанию маневровых тепловозов ТОО «КТЖ - Грузовые перевозки» <br />
                    на территории РК. Заключен долгосрочный контракт, сроком до 2027 года, на сервисное <br />
                    обслуживание маневровых тепловозов СКД-6 в количестве 74 единиц.
                    </CustomTypography>
                </Box>
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'ДЕПОВСКИЕ БАЗЫ'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Алматы, Шымкент, Экибастуз, Есиль, Жанаарка, Сарыозек - для производства 
                    периодических сервисных обслуживаний локомотивов (от технического обслуживания СДПМ до капитального ремонта).
                    </CustomTypography> 
                </Box>
            </CustomGridItem>
        </Grid>
        </section>
    )
}

export default GetStarted;