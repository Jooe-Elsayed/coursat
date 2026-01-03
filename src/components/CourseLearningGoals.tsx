    import React from 'react';
    import { Avatar, Box, Typography } from '@mui/material';
    import goalsIcon from '../assets/icons/goals-icon.png'

    const CourseLearningGoals: React.FC = () => {
    const goals = [
        "التعرف على كيفية عمل التسويق وتأثيره على المنظمات",
        "تعلم كيفية بدء العمل في مجال التسويق بنجاح",
        "اكتساب المهارات التي تميزك عن المبتدئين في التسويق",
        "استخدام الخبرة العملية لتعزيز مهاراتك في التسويق",
        "تعلم كيفية إدارة الحسابات التسويقية بفعالية"
    ];

    return (
        <Box 
        sx={{ 
            bgcolor: '#373E5B', 
            py: 5,
            my:4, 
            width: '100%', 
            display: 'flex',
            justifyContent: 'center',
        }}
        >
        <Box 
            sx={{ 
            width: '1058px', // العرض المطلوب بدقة 
            direction: 'rtl',
            borderRadius: '4px',
            }}
        >
            <Typography 
            variant="h5" 
            sx={{ 
                color: 'white', 
                fontSize:'20px',
                fontWeight: 'bold', 
                mb: 4, 
                textAlign: 'right',
            }}
            >
            ماذا سوف يتعلم الطلاب خلال الكورس ؟!
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {goals.map((goal, index) => (
                <Box 
                key={index} 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start',
                    gap: 2 
                }}
                >
                {/* مكان وضع الأيقونة (الصورة) الخاصة بك */}
                <Box sx={{ width: 20, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar src={goalsIcon} alt="icon" sx={{width:'30px',height:'30px'}}/>
                </Box>
                {/* نص المحتوى */}
                <Typography 
                    sx={{ 
                    color: '#FFFFFF', 
                    opacity:'80%',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    textAlign: 'right'
                    }}
                >
                    {goal}
                </Typography>
                </Box>
            ))}
            </Box>
        </Box>
        </Box>
    );
    };

    export default CourseLearningGoals;