    import React from 'react';
    import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

    const CourseContent: React.FC = () => {
    const curriculum = [
        "برومو الكورس",
        "تمهيد",
        "مدخل التصميم الشامل وكيفية الربح منه",
        "مدخل التصميم (1-4)",
        "مدخل التصميم (2-4)",
        "مدخل التصميم (3-4)",
        "مدخل التصميم (4-4)",
        "تعريف التصميم الشامل"
    ];

    return (
        <Box 
        sx={{ 
            bgcolor: '#373E5B', 
            py: 4,
            my:4,
            width: '100%', 
            display: 'flex',
            justifyContent: 'center', // توسيط السكشن في نص الصفحة
        }}
        >
        <Box 
            sx={{ 
            width: '1058px', // العرض المطلوب بدقة
            maxWidth: '95%', 
            display: 'flex',
            flexDirection: 'column'
            }}
        >
            <Typography 
            variant="h6" 
            sx={{ 
                fontSize:'20px',
                color: 'white', 
                fontWeight: 'bold', 
                mb: 4, 
                textAlign: 'right', 
            }}
            >
            محتوى الدورة
            </Typography>

            {curriculum.map((item, index) => (
            <Accordion 
                key={index}
                elevation={0}
                sx={{ 
                bgcolor: 'transparent', 
                color: 'white', 
                borderBottom: '2px solid rgba(255, 255, 255, 0.05)', 
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: 0 }
                }}
            >
                <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: 'white', fontSize: '25px' }} />}
                sx={{ 
                    px: 0,
                    py: 1,
                    /* لضمان أن يكون السهم يسار والنص يمين */
                    flexDirection: 'row-reverse', 
                    '& .MuiAccordionSummary-content': {
                    m: 0,
                    }
                }}
                >
                <Typography 
                    sx={{ 
                    fontSize: '1rem',
                    fontWeight: 400,
                    textAlign: 'right',
                    width: '100%',
                    pr: 2 // مسافة بسيطة من اليمين
                    }}
                >
                    {item}
                </Typography>
                </AccordionSummary>
                
                <AccordionDetails sx={{ px: 2, pb: 2 }}>
                <Typography sx={{ color: '#94a3b8', fontSize: '14px', textAlign: 'right',direction:'rtl' }}>
                    محتوى إضافي للدرس يظهر هنا عند الضغط على العنوان...
                </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </Box>
        </Box>
    );
    };

    export default CourseContent;