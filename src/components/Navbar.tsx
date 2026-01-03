    import React, { useState } from 'react';
    import { AppBar, Toolbar, Box, Typography, Button, InputBase, IconButton, Badge, Menu, MenuItem, Avatar } from '@mui/material';
    import SearchIcon from '@mui/icons-material/Search';
    import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
    import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
    import LanguageIcon from '@mui/icons-material/Language';
    import ContrastIcon from '@mui/icons-material/Contrast';
    import logo from '../assets/images/logo.png'

    const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
    const [anchorElNotify, setAnchorElNotify] = useState<null | HTMLElement>(null);

    // دوال لفتح وإغلاق القوائم
    const handleOpenProfile = (event: React.MouseEvent<HTMLElement>) => setAnchorElProfile(event.currentTarget);
    const handleCloseProfile = () => setAnchorElProfile(null);
    const handleOpenNotify = (event: React.MouseEvent<HTMLElement>) => setAnchorElNotify(event.currentTarget);
    const handleCloseNotify = () => setAnchorElNotify(null);

    return (
        <AppBar 
        position="static" 
        elevation={0} 
        sx={{ 
            bgcolor: '#161738', 
            width: '100%' 
        }}
        >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', direction: 'rtl', px: { xs: 2, md: 2 } }}>
            
            {/* اللوجو والروابط */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap:8}}>
            <Box sx={{ cursor: 'pointer' }}>
                {/* هنا مكان صورتك اللي هتضيفها */}
                <Avatar src={logo} sx={{width:'100%',p:'2px'}}/>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                <Typography sx={{ color: '#ffb74d', cursor: 'pointer', fontWeight: 'bold' }}>الرئيسية</Typography>
                <Typography sx={{ color: 'white', cursor: 'pointer', opacity: 0.8 }}>من نحن</Typography>
                {isLoggedIn && (
                <>
                    <Typography sx={{ color: 'white', cursor: 'pointer', opacity: 0.8 }}>كورساتي</Typography>
                    <Typography sx={{ color: 'white', cursor: 'pointer', opacity: 0.8 }}>المجتمعات</Typography>
                </>
                )}
            </Box>
            </Box>

            {/* حقل البحث - الأيقونة يسار */}
            <Box sx={{ 
            bgcolor: 'rgba(255,255,255,0.08)', 
            borderRadius: '8px', 
            px: 2, 
            py: 1.2, 
            display: 'flex', 
            alignItems: 'center', 
            width: { xs: '180px', md: '350px' }
            }}>
            <InputBase 
                placeholder="ابحث عن الدورات التدريبية..." 
                sx={{ color: 'white', width: '100%', fontSize: '0.85rem' }} 
            />
            <SearchIcon sx={{ color: 'rgba(255,255,255,0.5)', mr: 1 }} />
            </Box>

            {/* الأيقونات والقوائم */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton sx={{ color: 'white' }}><ContrastIcon fontSize="small" /></IconButton>
            <IconButton sx={{ color: 'white' }}><LanguageIcon fontSize="small" /></IconButton>
            
            <Box sx={{ width: '1px', height: '20px', bgcolor: 'rgba(255,255,255,0.2)', mx: 1 }} />

            {!isLoggedIn ? (
                <Button variant="contained" sx={{ bgcolor: '#ff9800', color: 'black', fontWeight: 'bold' }}>
                تسجيل دخول/جديد
                </Button>
            ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* أيقونة التنبيهات */}
                <IconButton onClick={handleOpenNotify}>
                    <Badge variant="dot" color="error">
                    <NotificationsNoneIcon sx={{ color: 'white' }} />
                    </Badge>
                </IconButton>

                {/* أيقونة البروفايل */}
                <IconButton onClick={handleOpenProfile}>
                    <PersonOutlineIcon sx={{ color: 'white' }} />
                </IconButton>
                </Box>
            )}
            </Box>

            {/* --- القوائم المنسدلة --- */}

            {/* قائمة التنبيهات (الرسايل العامة) */}
            <Menu
            anchorEl={anchorElNotify}
            open={Boolean(anchorElNotify)}
            onClose={handleCloseNotify}
            PaperProps={{ 
                sx: { bgcolor: '#2a2b50', color: 'white', width: '320px', mt: 1.5, borderRadius: '8px' } 
            }}
            >
            {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', textAlign: 'right' }}>
                    3:50 PM
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, textAlign: 'right', lineHeight: 1.4 }}>
                    قام المدرب <span style={{color: '#ffb74d'}}>هشام مصطفى</span> بنشر دورة جديدة بعنوان احتراف عالم التصميم
                </Typography>
                </Box>
            ))}
            </Menu>

            {/* قائمة الملف الشخصي */}
            <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleCloseProfile}
            PaperProps={{ 
                sx: { bgcolor: '#2a2b50', color: 'white', minWidth: '200px', mt: 1.5, borderRadius: '8px' } 
            }}
            >
            <MenuItem onClick={handleCloseProfile} sx={{ justifyContent: 'flex-end', py: 1.5 }}>الملف الشخصي</MenuItem>
            <MenuItem onClick={handleCloseProfile} sx={{ justifyContent: 'flex-end', py: 1.5 }}>لوحة تحكم تحليلية</MenuItem>
            <MenuItem onClick={handleCloseProfile} sx={{ justifyContent: 'flex-end', py: 1.5 }}>الاعدادات</MenuItem>
            <Box sx={{ height: '1px', bgcolor: 'rgba(255,255,255,0.1)', my: 1 }} />
            <MenuItem onClick={handleCloseProfile} sx={{ justifyContent: 'flex-end', py: 1.5, color: '#ff5252' }}>تسجيل خروج</MenuItem>
            </Menu>

        </Toolbar>
        </AppBar>
    );
    };

    export default Navbar;