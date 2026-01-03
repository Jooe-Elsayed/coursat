    import React from 'react';
    import { Box, Typography, Grid, Paper, Container } from '@mui/material';

    const statsData = [
    { id: 1, value: '2.1 K', label: 'دورات تدريبية مميزة' },
    { id: 2, value: '2.1 K', label: 'طلاب مسجلين' },
    { id: 3, value: '2.1 K', label: 'العديد من المجتمعات' },
    { id: 4, value: '15', label: 'ترجمة بعدة لغات' },
    { id: 5, value: '2.1 K', label: 'خبراؤنا' },
    ];

    const StatsSection: React.FC = () => {
    return (
        <Box sx={{ bgcolor: '#0a192f', py: 15, color: 'white', textAlign: 'center', overflow: 'hidden' }}>
        <Container maxWidth="lg">
            {/* العنوان */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Cairo, sans-serif' }}>
            لماذا اخترت كورسات بلس
            </Typography>
            
            {/* الوصف */}
            <Typography 
            variant="body1" 
            sx={{ color: '#94a3b8', mb: 12, maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}
            >
            استثمر في نفسك وانضم لمجتمع مبدعين العرب ولتحقيق هدفك وفرنا لك جميع طرق الدفع العالمية لتسهيل انضمامك أينما كنت
            </Typography>

            {/* الشبكة بتنسيق متعرج */}
            <Grid container spacing={3} justifyContent="center">
            {statsData.map((stat, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={stat.id}>
                <Paper
                    elevation={0}
                    sx={{
                    bgcolor: '#343a56', // لون الكارت من الصورة
                    p: 4,
                    borderRadius: '8px',
                    aspectRatio: '1/1.2', // يخلي الكل نفس المقاس والمقاس موحد
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // عشان يوزع المحتوى (أيقونة فوق أو تحت)
                    alignItems: 'center',
                    // التعديل السحري للمكان (الـ Zigzag)
                    transform: index % 2 === 0 ? 'translateY(40px)' : 'translateY(-40px)',
                    transition: '0.3s ease-in-out',
                    '&:hover': {
                        bgcolor: '#3d4466',
                        transform: index % 2 === 0 ? 'translateY(30px)' : 'translateY(-50px)',
                    }
                    }}
                >
                    {/* إذا كان العنصر فردي (1, 3, 5) الأيقونة تكون فوق */}
                    {index % 2 !== 0 ? (
                    <>
                        <Box sx={{ width: 50, height: 50, border: '1px dashed #94a3b8', borderRadius: '50%' }} />
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{stat.value}</Typography>
                            <Typography variant="body1" sx={{ color: '#cbd5e1' }}>{stat.label}</Typography>
                        </Box>
                        <Box sx={{ height: 50 }} /> {/* مساحة فارغة للموازنة */}
                    </>
                    ) : (
                    <>
                        <Box sx={{ height: 50 }} /> {/* مساحة فارغة للموازنة */}
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{stat.value}</Typography>
                            <Typography variant="body1" sx={{ color: '#cbd5e1' }}>{stat.label}</Typography>
                        </Box>
                        <Box sx={{ width: 50, height: 50, border: '1px dashed #94a3b8', borderRadius: '4px' }} />
                    </>
                    )}
                </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
        </Box>
    );
    };

    export default StatsSection;