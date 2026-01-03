    import React, { useState } from 'react';
    import { Box, Typography, TextField, Button, Grid, InputAdornment } from '@mui/material';
    import GoogleIcon from '@mui/icons-material/Google';
    import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
    import MailOutlineIcon from '@mui/icons-material/MailOutline';
    import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
    import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
    import logo from '../assets/images/logo.png'

    const SignUp = () => {
    const [accountType, setAccountType] = useState<'individuals' | 'companies'>('individuals');

    const inputStyles = {
        '& .MuiOutlinedInput-root': {
        bgcolor: '#4A516B', 
        borderRadius: '8px',
        color: 'white',
        height: '48px',
        '& fieldset': { border: 'none' },
        },
        '& .MuiInputBase-input': {
        textAlign: 'right',
        fontSize: '14px',
        },
        mb: '18px'
    };

    const labelStyle = { 
        color: 'white', 
        mb: '2px', 
        textAlign: 'right', 
        fontSize: '16px', 
        display: 'block',
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, direction: 'rtl', mt:'15px' }}>
        <Box sx={{ width: '100%', maxWidth: '480px', bgcolor: '#373E5B', p: { xs: 3, md: 4 }, borderRadius: '12px' }}>
        
            {/* --- اللوجو داخل الفورم --- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            {/* ضع وسم الـ img الخاص بك هنا */}
            <Box component='img' src={logo}></Box>
            </Box>

            {/* زر جوجل */}
            <Button 
            fullWidth 
            variant="contained" 
            sx={{ bgcolor: '#ea4335', py: 1.2, borderRadius: '4px', fontWeight: 'bold', textTransform: 'none' }}
            startIcon={<GoogleIcon sx={{ ml: 1 }} />}
            >
            التسجيل عبر جوجل
            </Button>

            <Box sx={{ borderTop: '1px dashed rgba(255,255,255,0.2)', my: 2 }} />

            {/* نوع الحساب */}
            <Typography sx={labelStyle}>نوع الحساب</Typography>
            <Box sx={{ display: 'flex',bgcolor: '#4A516B', borderRadius: '8px', p: 0.3, mb: 2}}>
            <Button 
                fullWidth
                onClick={() => setAccountType('individuals')}
                sx={{ color: 'white',fontSize:'16px', bgcolor: accountType === 'individuals' ? '#141C3E' : 'transparent', borderRadius: '6px' }}
            >
                أفراد
            </Button>
            <Button 
                fullWidth
                onClick={() => setAccountType('companies')}
                sx={{ color: 'white',fontSize:'16px', bgcolor: accountType === 'companies' ? '#141C3E' : 'transparent', borderRadius: '6px' }}
            >
                شركات
            </Button>
            </Box>

            {/* الحقول */}
            <Box>
            <Typography sx={labelStyle}>{accountType === 'individuals' ? 'الاسم كامل' : 'اسم الشركة'}</Typography>
            <TextField 
                fullWidth 
                sx={inputStyles}
                InputProps={{
                endAdornment: <InputAdornment position="end"><PersonOutlineIcon sx={{ color: '#888', fontSize: '20px' }} /></InputAdornment>,
                }}
            />

            <Typography sx={labelStyle}>البريد الالكتروني</Typography>
            <TextField 
                fullWidth 
                sx={inputStyles}
                InputProps={{
                endAdornment: <InputAdornment position="end"><MailOutlineIcon sx={{ color: '#888', fontSize: '20px' }} /></InputAdornment>,
                }}
            />

            {accountType === 'companies' && (
                <>
                <Typography sx={labelStyle}>عدد الأفراد</Typography>
                <TextField 
                    fullWidth 
                    placeholder="عدد الأفراد من 2/20"
                    sx={inputStyles}
                    InputProps={{
                    endAdornment: <InputAdornment position="end"><PeopleOutlineIcon sx={{ color: '#888', fontSize: '20px' }} /></InputAdornment>,
                    }}
                />
                </>
            )}

            <Grid container spacing={7}>
                <Grid item xs={6}>
                <Typography sx={labelStyle}>تأكيد كلمة المرور</Typography>
                <TextField 
                    fullWidth 
                    type="password" 
                    sx={inputStyles}
                    InputProps={{
                    endAdornment: <InputAdornment position="end"><LockOutlinedIcon sx={{ color: '#888', fontSize: '20px' }} /></InputAdornment>,
                    }}
                />
                </Grid>
                <Grid item xs={6}>
                <Typography sx={labelStyle}>كلمة المرور</Typography>
                <TextField 
                    fullWidth 
                    type="password" 
                    sx={inputStyles}
                    InputProps={{
                    endAdornment: <InputAdornment position="end"><LockOutlinedIcon sx={{ color: '#888', fontSize: '20px' }} /></InputAdornment>,
                    }}
                />
                </Grid>
            </Grid>
            </Box>

            {/* سطر التسجيل */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
            <Button 
                variant="contained" 
                sx={{ bgcolor: '#0A3E6E', px: 6, py: 1.2, borderRadius: '0px' }}
            >
                تسجيل الدخول
            </Button>
            <Typography sx={{ color: '#888', fontSize: '14px'}}>
                لدي حساب بالفعل؟ <span style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>تسجيل دخول</span>
            </Typography>
            </Box>

        </Box>
        </Box>
    );
    };

    export default SignUp;