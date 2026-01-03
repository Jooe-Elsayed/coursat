    import { Box, Button, Container, Typography } from "@mui/material"
    import courseImg from '../assets/images/course-img.png'
    import personIcon from '../assets/icons/person-icon.png'
    import likeIcon from '../assets/icons/like-icon.png'
    import videoIcon from '../assets/icons/video-icon.png'
    import timeIcon from '../assets/icons/time-icon.png'
    import languageIcon from '../assets/icons/Global-language.png'

        const CoursePreview = () => {
        return (
            <Container sx={{ direction: "rtl", color: "#ffff", py: "20px" }}>
                <Typography>تصميم جرافيك من البداية تصميم جرافيك من البداية</Typography>
                <Box 
                component='img'
                src={courseImg}
                alt="course-img"
                width='100%'>
                </Box>
                {/* Course Details Layout */}
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                    {/* Right Side */}
                    <Box sx={{backgroundColor:'#373E5B', maxWidth:'750px',maxHeight:'443px', p:'35px', alignContent:'right'}}>
                    <Box sx={{fontSize:'20px'}} component='span'>الفئات : تصميم جرافيك</Box>
                    <Box sx={{display:'flex', alignItems:'center', gap:'10px', py:'15px'}}>
                        <Typography sx={{backgroundColor:'#4A516B',width:'120px', textAlign:'center', p:'5px', borderRadius:'15px'}}>تصميم شعارات</Typography>
                        <Typography sx={{backgroundColor:'#4A516B',width:'120px', textAlign:'center', p:'5px', borderRadius:'15px'}}>تصميم شعارات</Typography>
                        <Typography sx={{backgroundColor:'#4A516B',width:'120px', textAlign:'center', p:'5px', borderRadius:'15px'}}>تصميم شعارات</Typography>
                    </Box>
                    <Typography sx={{fontSize:'20px', fontWeight:'bold'}} variant="h6">ماذا سوف تتعلم</Typography>
                    <Typography sx={{fontSize:'16px',py:'12px'}}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع</Typography>
                    </Box>

                    {/* Left Side */}
                    <Box sx={{backgroundColor:'#373E5B',maxWidth:'320px',maxHeight:'443px',p:'20px',display:'flex',flexDirection:'column', gap:'15px'}}>
                        {/* Students */}
                        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                        <Box component='img' src={personIcon} alt="person-icon" sx={{width:'24px',height:'24px'}}></Box>
                        <Typography>عدد غير محدود من الطلاب</Typography>
                        </Box>
                        {/* Course Review */}
                        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <Box component='img' src={likeIcon}></Box>
                            <Typography>100% رضا الطلاب</Typography>
                        </Box>

                        {/* Lessons Count */}
                        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <Box component='img' src={videoIcon} alt="video-icon"></Box>
                            <Typography>15 درساً</Typography>
                        </Box>

                        {/* Course Duration */}
                        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <Box component='img' src={timeIcon} alt="time-icon"></Box>
                            <Typography>3 ساعة 40 دقيقة</Typography>
                        </Box>

                        {/* Course Level */}
                        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <Box component='img' src={videoIcon} alt="video-icon"></Box>
                            <Typography>مستوى المهارة لكل المستويات</Typography>
                        </Box>


                        {/* Course Languages */}
                        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <Box component='img' src={languageIcon} alt="laguage-icon"></Box>
                            <Typography>3 لغات متاحة ( اللغة العربية، English ، اللغة التركية)</Typography>
                        </Box>

                        
                        <Button sx={{backgroundColor:'#F8B100',fontSize:'20px', fontWeight:'bold',borderRadius:'0px',width:'247px',height:'50px',margin:'auto'}} variant="contained">أبدأ الأن</Button>
                    </Box>
                </Box>
                {/* Course Content */} 
            </Container>
        )
        }

        export default CoursePreview
