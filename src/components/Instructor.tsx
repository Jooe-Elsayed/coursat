    import React from 'react';
    import { Box, Typography, Avatar, Stack, Paper } from '@mui/material';
    import instructorImg from '../assets/images/instructor-img.png'
    import facebookIcon from '../assets/icons/facebook-icon.png'
    import linkedinIcon from '../assets/icons/linkedin-icon.png'
    import instagramIcon from '../assets/icons/instagram-icon.png'
    import snapchatIcon from '../assets/icons/snapchat-icon.png'

    const ProfileCard: React.FC = () => {
    return (
        <Paper
        elevation={0}
        sx={{
            backgroundColor: '#373E5B',
            color: '#ffffff',
            padding:'25px 15px',
            textAlign: 'center',
            maxWidth: '344px',
            maxHeight:'436px',
            margin: '20px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:'0px'
        }}
        >

        <Avatar
            src={instructorImg} 
            alt="Profile Image"
            sx={{
            width: 130,
            height: 130,
            mb: 2,
            }}
        />

        <Typography variant='h4' sx={{fontSize:'26px',fontWeight:'bold'}}>وائل الحسيني</Typography>

        <Typography 
            variant="h6" 
            sx={{ 
            fontWeight: 500,
            background: 'linear-gradient(90deg, #FE450A, #FB9F11)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            py:'10px'
            }}
        >
            تسويق إلكتروني
        </Typography>

        <Typography 
            sx={{ 
            color: '#D3D3D3', 
            lineHeight: 1.8,
            fontSize: '16px',
            maxWidth:'325px',
            mb:'15px',
            direction:'rtl'
            }}
        >
            حقق أهدافك أسرع مع إحدى خططنا أو برامجنا. جرّبها مجانًا اليوم أو تواصل مع قسم المبيعات لمعرفة المزيد.
        </Typography>


        <Stack sx={{py:'15px'}} direction="row" spacing={2.5} justifyContent="center">
            <Box component='img' src={linkedinIcon} sx={{ width: 30, height: 30, borderRadius: '4px' }} />
            <Box component='img' src={facebookIcon} sx={{ width: 26, height: 26, borderRadius: '4px' }} />
            <Box component='img' src={instagramIcon} sx={{ width: 26, height: 26, borderRadius: '4px' }} />
            <Box component='img' src={snapchatIcon} sx={{ width: 26, height: 26, borderRadius: '4px' }} />
        </Stack>
        </Paper>
    );
    };

    export default ProfileCard;