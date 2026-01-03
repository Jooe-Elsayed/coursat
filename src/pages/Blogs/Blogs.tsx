import { Box, Container, Typography } from '@mui/material';
import blogImg from '../assets/images/blog-img.png'
import dataIcon from '../assets/images/date-icon.png'

    const Blogs = () => {
    return (
        <Container sx={{direction:'rtl',color:'#ffff', py:'20px'}}>
            <Typography variant='h2'>المدونات</Typography>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',gap:'40px'}}>
                <Box sx={{backgroundColor:'#373E5B',maxWidth:'340px',p:'15px', pb:'25px', textAlign:'right'}}>
                    <Box
                    component='img'
                    src={blogImg}
                    alt='blog-img'
                    sx={{
                        width:'100%',
                        borderRadius:'15px'
                    }}>
                    </Box>
                    <Typography sx={{fontSize:'22px',fontWeight:'bold',width:'309px'}}>دور التعليم الإلكتروني في تطوير المهارات المهنية</Typography>
                    <Typography sx={{color:'#D3D3D3', py:'5px'}}>يُعدّ التعليم الإلكتروني أحد أبرز التطورات في مجال التعليم الحديث</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img src={dataIcon} alt="date-icon" />
                        <Typography sx={{pr:'5px'}}>16/11/2024</Typography>
                    </Box>
                </Box>
                <Box sx={{backgroundColor:'#373E5B',maxWidth:'340px',p:'15px', pb:'25px', textAlign:'right'}}>
                    <Box
                    component='img'
                    src={blogImg}
                    alt='blog-img'
                    sx={{
                        width:'100%',
                        borderRadius:'15px'
                    }}>
                    </Box>
                    <Typography sx={{fontSize:'22px',fontWeight:'bold',width:'309px'}}>دور التعليم الإلكتروني في تطوير المهارات المهنية</Typography>
                    <Typography sx={{color:'#D3D3D3', py:'5px'}}>يُعدّ التعليم الإلكتروني أحد أبرز التطورات في مجال التعليم الحديث</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img src={dataIcon} alt="date-icon" />
                        <Typography sx={{pr:'5px'}}>16/11/2024</Typography>
                    </Box>
                </Box>
                <Box sx={{backgroundColor:'#373E5B',maxWidth:'340px',p:'15px', pb:'25px', textAlign:'right'}}>
                    <Box
                    component='img'
                    src={blogImg}
                    alt='blog-img'
                    sx={{
                        width:'100%',
                        borderRadius:'15px'
                    }}>
                    </Box>
                    <Typography sx={{fontSize:'22px',fontWeight:'bold',width:'309px'}}>دور التعليم الإلكتروني في تطوير المهارات المهنية</Typography>
                    <Typography sx={{color:'#D3D3D3', py:'5px'}}>يُعدّ التعليم الإلكتروني أحد أبرز التطورات في مجال التعليم الحديث</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img src={dataIcon} alt="date-icon" />
                        <Typography sx={{pr:'5px'}}>16/11/2024</Typography>
                    </Box>
                </Box>
                <Box sx={{backgroundColor:'#373E5B',maxWidth:'340px',p:'15px', pb:'25px', textAlign:'right'}}>
                    <Box
                    component='img'
                    src={blogImg}
                    alt='blog-img'
                    sx={{
                        width:'100%',
                        borderRadius:'15px'
                    }}>
                    </Box>
                    <Typography sx={{fontSize:'22px',fontWeight:'bold',width:'309px'}}>دور التعليم الإلكتروني في تطوير المهارات المهنية</Typography>
                    <Typography sx={{color:'#D3D3D3', py:'5px'}}>يُعدّ التعليم الإلكتروني أحد أبرز التطورات في مجال التعليم الحديث</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img src={dataIcon} alt="date-icon" />
                        <Typography sx={{pr:'5px'}}>16/11/2024</Typography>
                    </Box>
                </Box>
                <Box sx={{backgroundColor:'#373E5B',maxWidth:'340px',p:'15px', pb:'25px', textAlign:'right'}}>
                    <Box
                    component='img'
                    src={blogImg}
                    alt='blog-img'
                    sx={{
                        width:'100%',
                        borderRadius:'15px'
                    }}>
                    </Box>
                    <Typography sx={{fontSize:'22px',fontWeight:'bold',width:'309px'}}>دور التعليم الإلكتروني في تطوير المهارات المهنية</Typography>
                    <Typography sx={{color:'#D3D3D3', py:'5px'}}>يُعدّ التعليم الإلكتروني أحد أبرز التطورات في مجال التعليم الحديث</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img src={dataIcon} alt="date-icon" />
                        <Typography sx={{pr:'5px'}}>16/11/2024</Typography>
                    </Box>
                </Box>
                <Box sx={{backgroundColor:'#373E5B',maxWidth:'340px',p:'15px', pb:'25px', textAlign:'right'}}>
                    <Box
                    component='img'
                    src={blogImg}
                    alt='blog-img'
                    sx={{
                        width:'100%',
                        borderRadius:'15px'
                    }}>
                    </Box>
                    <Typography sx={{fontSize:'22px',fontWeight:'bold',width:'309px'}}>دور التعليم الإلكتروني في تطوير المهارات المهنية</Typography>
                    <Typography sx={{color:'#D3D3D3', py:'5px'}}>يُعدّ التعليم الإلكتروني أحد أبرز التطورات في مجال التعليم الحديث</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img src={dataIcon} alt="date-icon" />
                        <Typography sx={{pr:'5px'}}>16/11/2024</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
    }

    export default Blogs
