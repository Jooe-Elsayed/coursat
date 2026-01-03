    import React from 'react';
    import { Box, Typography } from '@mui/material';

    const ProjectsSection: React.FC = () => {
    return (
        <Box 
        component="section"
        sx={{ 
             // نفس لون خلفية الموقع لضمان التناسق
            color: 'white',
            py: { xs: 10, md: 15 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            // التكنيك لضمان عرض الصفحة بالكامل
            width: '100vw',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
        }}
        >
        {/* 1. الكلمة الخلفية (العلامة المائية) */}
        <Typography
            variant="h1"
            sx={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: { xs: '100px', md: '250px' },
            fontWeight: 900,
            background: 'linear-gradient(180deg, #212B54 0%, #182144 50%)', // جريدينت كما يظهر أحياناً في الأرقام
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap',
            zIndex: 0,
            userSelect: 'none',
            pointerEvents: 'none', // لضمان عدم إعاقة النقر على العناصر الأمامية
            }}
        >
            مشاريع
        </Typography>

        {/* 2. المحتوى الأمامي */}
        <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
            {/* الرقم البرتقالي */}
            <Typography 
            variant="h2" 
            sx={{ 
                fontWeight: 800, 
                background: 'linear-gradient(180deg, #FE450A 0%, #FB9F11 100%)', // جريدينت كما يظهر أحياناً في الأرقام
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: '#f57c00', //fallback
                fontSize: { xs: '70px', md: '150px' },
                lineHeight: 1,
            }}
            >
            38+
            </Typography>

            {/* العنوان الرئيسي */}
            <Typography 
            variant="h4" 
            sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                fontSize: { xs: '20px', md: '45px' }
            }}
            >
            مشاريع عملية مع آراء الخبراء
            </Typography>

            {/* الوصف */}
            <Typography 
            variant="body1" 
            dir="rtl"
            sx={{ 
                color: '#D3D3D3', 
                maxWidth: '585px', 
                mx: 'auto', 
                lineHeight: 1.8,
                fontSize: '16px'
            }}
            >
            استثمر في نفسك وانضم لمجتمع مبدعين العرب ولتحقيق هدفك وفرنا لك جميع طرق الدفع العالمية لتسهيل انضمامك أينما كنت
            </Typography>
        </Box>
        </Box>
    );
    };

    export default ProjectsSection;