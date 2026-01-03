    import { Box, Typography,Container } from "@mui/material";
    import playerIcon from '../assets/icons/video-icon.png'
    import CourseCard from "../components/CategoryCard";

    const Categories = () => {
    return (
        <Container
        sx={{
            textAlign: "right",
            direction: "rtl",
            maxWidth: "fixed",
            color:'#ffff'
        }}
        >
        <Typography sx={{pt:3}} variant="h4">التصنيفات</Typography>
        <Box
        sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 1,
            py: 1,
            borderRadius: "999px",
            width: "fit-content",
            direction: "rtl",
        }}
        >
        <Box
            component="img"
            src={playerIcon}
            alt="play"
            sx={{
            width: 25,
            height: 25,
            objectFit: "contain",
            }}
        />
        <Typography
            sx={{
            color: "rgba(191, 191, 191, 1)",
            fontSize: "14px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            }}
        >
            7 كورسات تعليمية
        </Typography>
        </Box>
        <Typography sx={{pt:2}}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع</Typography>
        
        <Box sx={{display:'flex', alignItems:'center',flexWrap:'wrap',gap:'15px', my:'20px'}}>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        </Box>

        </Container>
    );
    };

    export default Categories;
