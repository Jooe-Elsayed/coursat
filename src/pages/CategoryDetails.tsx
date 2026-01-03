    import { Box, Container, Typography } from "@mui/material";
    import videoIcon from "../assets/icons/video-icon.png";
    import categoryImg from "../assets/images/category-img.png";
    import personIcon from "../assets/icons/person-icon.png";

    const CategoryDetails = () => {
    return (
        <Container sx={{ direction: "rtl", color: "#ffff", py: "20px" }}>
        <Typography variant="h4">تصميم جرافيك من البداية</Typography>
        <Box sx={{ display: "flex", alignItems: "center", pt: "5px" }}>
            <Box component="img" src={videoIcon} alt="video-icon"></Box>
            <Typography sx={{ color: "#BFBFBF", pr: "5px" }}>
            7 كورسات تعليمية
            </Typography>
        </Box>
        <Typography sx={{ color: "#D3D3D3", my: "15px" }}>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
            النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
            تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات
            كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد
            لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن
            يطلع على صورة حقيقية لتصميم الموقع
        </Typography>
        <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>

            <Box component="img" src={categoryImg} alt="categoryImg"></Box>
            <Box sx={{ pr: "20px" }}>
                <Typography sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                تصميم جرافيك
                </Typography>
                <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                كورس التصميم الشامل وكيفية الربح منه
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#D3D3D3" }}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى ...
                </Typography>
                <Box sx={{ display: "flex",pt:'10px', alignItems: "center",}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={personIcon} alt="personIcon"></Box>
                    <Typography sx={{ px: "5px" }}>هشام مصطفى</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={videoIcon} alt="videoIcon"></Box>
                    <Typography sx={{ pr: "5px" }}>5 ساعات، 23 دقيقة</Typography>
                </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        {/* Card 2 */}
            <Box sx={{my:'20px'}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

            <Box component="img" src={categoryImg} alt="categoryImg"></Box>
            <Box sx={{ pr: "20px" }}>
                <Typography sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                تصميم جرافيك
                </Typography>
                <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                كورس التصميم الشامل وكيفية الربح منه
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#D3D3D3" }}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى ...
                </Typography>
                <Box sx={{ display: "flex",pt:'10px', alignItems: "center",}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={personIcon} alt="personIcon"></Box>
                    <Typography sx={{ px: "5px" }}>هشام مصطفى</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={videoIcon} alt="videoIcon"></Box>
                    <Typography sx={{ pr: "5px" }}>5 ساعات، 23 دقيقة</Typography>
                </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        {/* Card 3 */}
            <Box sx={{my:'20px'}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

            <Box component="img" src={categoryImg} alt="categoryImg"></Box>
            <Box sx={{ pr: "20px" }}>
                <Typography sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                تصميم جرافيك
                </Typography>
                <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                كورس التصميم الشامل وكيفية الربح منه
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#D3D3D3" }}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى ...
                </Typography>
                <Box sx={{ display: "flex",pt:'10px', alignItems: "center",}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={personIcon} alt="personIcon"></Box>
                    <Typography sx={{ px: "5px" }}>هشام مصطفى</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={videoIcon} alt="videoIcon"></Box>
                    <Typography sx={{ pr: "5px" }}>5 ساعات، 23 دقيقة</Typography>
                </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        {/* card 4 */}
            <Box sx={{my:'20px'}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

            <Box component="img" src={categoryImg} alt="categoryImg"></Box>
            <Box sx={{ pr: "20px" }}>
                <Typography sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                تصميم جرافيك
                </Typography>
                <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                كورس التصميم الشامل وكيفية الربح منه
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#D3D3D3" }}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى ...
                </Typography>
                <Box sx={{ display: "flex",pt:'10px', alignItems: "center",}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={personIcon} alt="personIcon"></Box>
                    <Typography sx={{ px: "5px" }}>هشام مصطفى</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={videoIcon} alt="videoIcon"></Box>
                    <Typography sx={{ pr: "5px" }}>5 ساعات، 23 دقيقة</Typography>
                </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        </Container>
    );
    };

    export default CategoryDetails;
