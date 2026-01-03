    import React from 'react';
    import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    Stack, 
    Link, 
    Divider 
    } from '@mui/material';
    import logo from '../assets/images/logo.png'

    const Footer: React.FC = () => {
    return (
        <Box 
        component="footer"
        sx={{ 
            bgcolor: '#0a192f', 
            color: 'white', 
            pt: 8, 
            pb: 4, 
            width: '100vw', 
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            // -------------------------
            px: { xs: 2, md: 10 } 
        }}
        >
        {/* اللوجو - مكان الصورة */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
            <Box 
            component="img"
            src={logo} // حط مسار صورتك هنا
            alt="Logo"
            sx={{ height: 50, width: 'auto' }} 
            />
        </Box>

        {/* الوصف */}
        <Typography 
            sx={{ fontSize:'18px',color: '#D3D3D3',mb: 5,maxWidth: '655px', mx: 'auto', textAlign: 'center' }}
        >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
        </Typography>

        {/* Newsletter */}
        <Box 
            sx={{ 
            display: 'flex', 
            maxWidth: '826px', 
            mx: 'auto', 
            mb: 5,
            bgcolor: '#373E5B',
            borderRadius: '8px',
            px:'30px',
            py:'12px'
            }}
        >
            <Button 
            variant="contained" 
            sx={{ fontSize:'16px',fontWeight:'500',bgcolor: '#0A3E6E', px: 8, borderRadius: '0px' }}
            >
            اشتراك
            </Button>
            <TextField 
            fullWidth 
            placeholder="البريد الالكتروني ..." 
            variant="standard"
            dir="rtl"
            InputProps={{ 
                disableUnderline: true,
                sx: { color: 'white', px: 2,pt:'7px' ,textAlign: 'right' } 
            }}
            />
        </Box>

        {/* الروابط والأيقونات */}
        <Box 
            sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px', // عشان الكلام ميروحش في أطراف الشاشة أوي
            mx: 'auto',
            mb: 4
            }}
        >
            {/* الأيقونات */}
            <Stack direction="row" spacing={2}>
            {[1, 2, 3, 4].map((i) => (
                <Box 
                key={i}
                sx={{ 
                    width: 40, height: 40, 
                    border: '1px solid #F8B100', 
                    borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                >
                </Box>
            ))}
            </Stack>

            {/* الصفحات في النص */}
            <Stack 
            direction="row-reverse" 
            spacing={{ xs: 2, md: 5 }} 
            sx={{ flexGrow: 1, justifyContent: 'center' }}
            >
            {['من نحن', 'شروط الاستخدام', 'سياسة الخصوصية', 'حسابي'].map((item) => (
                <Link 
                key={item} 
                href="#" 
                underline="none" 
                sx={{ color: '#D3D3D3',fontSize:'18px', fontWeight: 500, '&:hover': { color: '#F8B100' } }}
                >
                {item}
                </Link>
            ))}
            </Stack>

            {/* موازن مساحة */}
            <Box sx={{ width: { xs: 0, md: 160 }, display: { xs: 'none', md: 'block' } }} />
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', borderStyle: 'dashed', mb: 3 }} />
        <Typography sx={{ color: '#D3D3D3', display: 'block' }}>
            جميع الحقوق محفوظة مسار المعرفة للتسويق الإلكتروني بالمملكة العربية السعودية ©
        </Typography>
        </Box>
    );
    };

    export default Footer;