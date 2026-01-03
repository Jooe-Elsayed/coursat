            import Card from '@mui/material/Card';
            import CardContent from '@mui/material/CardContent';
            import CardMedia from '@mui/material/CardMedia';
            import CardActionArea from '@mui/material/CardActionArea';
            import { Box, Typography } from '@mui/material';
            import courseImage from '../assets/images/category-img.png'
            import personIcon from '../assets/icons/person-icon.png'
            import videoIcon from '../assets/icons/video-icon.png'

            const CourseCard = () => {
            return (
            <Card sx={{ maxWidth: '305px', textAlign:'right',direction:'rtl',backgroundColor:'#373E5B',color:'#ffffff',borderRadius:'0px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="100%"
                image={courseImage}
                alt="green iguana"
                sx={{width:'100%'}}
                />
                <CardContent>
                <Typography>تصميم جرافيك</Typography>

                <Typography sx={{maxWidth:'242px',fontSize:'20px',fontWeight:'bold'}}>كورس التصميم الشامل وكيفية الربح منه</Typography>

                <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <Box sx={{display:'flex',alignItems:'center',gap:'5px'}}>
                    <Box component='img' src={personIcon} alt='person-icon'></Box>
                    <Typography sx={{fontSize:'14px',color:'#BFBFBF'}}>هشام مصطفى</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center', gap:'5px'}}>
                    <Box component='img' src={videoIcon}></Box>
                    <Typography sx={{fontSize:'14px',color:'#BFBFBF'}}>5 ساعات، 23 دقيقة</Typography>
                </Box>

                </Box>



                </CardContent>
            </CardActionArea>
            </Card>
        );
            }

            export default CourseCard
