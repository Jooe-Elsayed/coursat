    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import CardActionArea from '@mui/material/CardActionArea';
    import { Box, Typography } from '@mui/material';
    import cardImage from '../assets/images/card-img.png';
    import personIcon from '../assets/icons/person-icon.png';

    const CategoryCard = () => {
        return (
            <Card 
                sx={{ 
                    // تم إزالة maxWidth الثابت لملء الحاوية
                    width: '275px', 
                    textAlign: 'right',
                    direction: 'rtl',
                    backgroundColor: '#373E5B',
                    color: '#ffffff',
                    borderRadius: '0px',
                    boxShadow: 'none' // لإلغاء أي هوامش مخفية
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={cardImage}
                        alt="تصميم جرافيك"
                        sx={{ width: '100%', objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: '16px' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                            تصميم جرافيك من البداية
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', pt: '15px' }}>
                            <Box 
                                component='img' 
                                src={personIcon} 
                                alt='person-icon'
                                sx={{ width: '18px', height: '18px' }} // ضبط حجم الأيقونة
                            />
                            <Typography sx={{ fontSize: '14px', color: '#BFBFBF' }}>
                                5 كورسات تعليمية
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    export default CategoryCard;