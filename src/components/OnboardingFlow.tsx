    import React, { useState } from 'react';
    import { Box, Typography, Button, Grid, Paper } from '@mui/material';
    import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // أريد أن أبدأ بمهارة
    import TransformIcon from '@mui/icons-material/Transform'; // تغيير مجالي الحالي
    import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // تطوير مهارتي الحالية
    import TravelExploreIcon from '@mui/icons-material/TravelExplore'; // استكشاف مواضيع خارج مجالي

    const OnboardingFlow = () => {
    const [step, setStep] = useState(1);
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

    // قائمة الأهداف بناءً على التصميم
    const goals = [
        { id: 'start', title: 'أريد أن أبدأ بمهارة', icon: <RocketLaunchIcon sx={{ fontSize: 40 }} /> },
        { id: 'change', title: 'تغيير مجالي الحالي', icon: <TransformIcon sx={{ fontSize: 40 }} /> },
        { id: 'improve', title: 'تطوير مهارتي الحالية', icon: <TrendingUpIcon sx={{ fontSize: 40 }} /> },
        { id: 'explore', title: 'استكشاف المواضيع خارج مجالي', icon: <TravelExploreIcon sx={{ fontSize: 40 }} /> },
    ];

    const handleNext = () => {
        if (selectedGoal) {
        setStep(step + 1);
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#161738', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, direction: 'rtl' }}>
        <Box sx={{ width: '1800px', maxWidth: '900px', bgcolor: '#2c314d', p: { xs: 4, md: 6 }, borderRadius: '15px', textAlign: 'center', position: 'relative' }}>
            
            {/* اللوجو داخل الفورم في الأعلى */}
            <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                COURSSAT<span style={{ color: '#ff9800' }}>.com</span>
            </Typography>
            </Box>

            {/* أيقونة الترحيب والاسم */}
            <Box sx={{ mb: 5 }}>
            <Box sx={{ fontSize: '50px', mb: 2 }}>👤</Box>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                أهلاً محمد عمار !
            </Typography>
            <Typography sx={{ color: '#BFBFBF', fontSize: '16px' }}>
                أخبرنا قليلاً عن نفسك لنتمكن من تقديم أفضل التوصيات.. <br /> أولاً، ما هو هدفك؟
            </Typography>
            </Box>

            {/* خيارات الأهداف */}
            <Grid container spacing={3} sx={{ mb: 6 }}>
            {goals.map((goal) => (
                <Grid  item xs={12} sm={6} md={3} key={goal.id}>
                <Paper
                    onClick={() => setSelectedGoal(goal.id)}
                    elevation={0}
                    sx={{
                    bgcolor: selectedGoal === goal.id ? '#1a4f8b' : '#3e4462', // تغيير اللون عند الاختيار
                    color: 'white',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    height: '200px',       
                    padding:3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth:'260px',
                    width:'100%',
                    transition: '0.3s',
                    border: selectedGoal === goal.id ? '2px solid #ff9800' : 'none',
                    '&:hover': { bgcolor: '#4a5175' }
                    }}
                >
                    <Box sx={{ mb: 2, color: selectedGoal === goal.id ? 'white' : '#BFBFBF' }}>
                    {goal.icon}
                    </Box>
                    <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>
                    {goal.title}
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>

            {/* زر التالي */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
                variant="contained"
                disabled={!selectedGoal}
                onClick={handleNext}
                sx={{
                bgcolor: '#1a4f8b',
                px: 6,
                py: 1.2,
                borderRadius: '4px',
                '&.Mui-disabled': { bgcolor: 'rgba(26, 79, 139, 0.5)', color: 'rgba(255,255,255,0.3)' }
                }}
            >
                التالي
            </Button>
            </Box>
        </Box>
        </Box>
    );
    };

    export default OnboardingFlow;