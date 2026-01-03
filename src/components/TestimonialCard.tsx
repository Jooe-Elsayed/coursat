    import { Box, Typography, Avatar, Divider, Paper } from '@mui/material';
    import feedbackIcon from '../assets/icons/feedback-icon.png'
    import studentImg from '../assets/images/student-img.png'

    const TestimonialCard = () => {
    return (
        <Paper
        elevation={0}
        sx={{
            backgroundColor: '#373E5B',
            color: 'white',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: 500,
            margin: 'auto',
            textAlign: 'right', 
            '&::before': { 
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FE450A 0%, #FB9F11 100%)',
            }
        }}
        >
        <Box sx={{ padding: '40px 20px 20px' }}>
            <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'end', 
                alignItems: 'flex-start',
                mb: 3 
            }}
            >
            <Box sx={{ order: 2 }}>
                <Box 
                sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    border: '2px dashed #f57c00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                <Typography sx={{ color: '#f57c00', fontSize: '2rem'}}><Avatar sx={{p:'5px'}} src={feedbackIcon}/></Typography>
                </Box>
            </Box>

            <Typography 
                variant="h5" 
                sx={{ 
                fontWeight: 'bold', 
                maxWidth: '75%', 
                lineHeight: 1.4,
                order: 1, 
                pr:'15px'
                }}
            >
                كورس التصميم الشامل وكيفية الربح منه
            </Typography>
            </Box>

            {/* النص الوصفي */}
            <Typography 
            variant="body1" 
            sx={{ 
                color: '#D3D3D3', 
                lineHeight: 1.3, 
                mb: 3,
                fontSize: '18px'
            }}
            >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.
            </Typography>

            {/* الخط المقطع */}
            <Divider 
            sx={{ 
                borderColor: '#EBEBEB', 
                borderStyle: 'dashed', 
                mb: 3 
            }} 
            />

            {/* الجزء السفلي: الصورة والاسم */}
            <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-end',
                gap: 2 
            }}
            >
            <Typography variant="subtitle1" sx={{ color:'#D3D3D3', fontSize:'14px' }}>
                هشام مصطفى
            </Typography>
            <Avatar 
                src={studentImg} 
                sx={{ width: 30, height: 30 }} 
            />
            </Box>
        </Box>
        </Paper>
    );
    };

    export default TestimonialCard;