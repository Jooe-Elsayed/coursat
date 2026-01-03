import { Container, Box, Typography} from "@mui/material"
import aboutImg from '../assets/images/card-img.png'

    const About = () => {
    return (
        <Container sx={{color:'#fff', direction:'rtl', pt:'25px'}}>
                <Typography variant="h3">من نحن</Typography>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Box sx={{pt:'30px'}}>
                        <img src={aboutImg} alt="" />
                    </Box>
                    <Box sx={{mr:'30px'}}>
                        <Typography sx={{color:'#D3D3D3', fontSize:'20px', }}>من نحن</Typography>
                        <Typography sx={{fontWeight:'bold', fontSize:'40px'}}>كورسات بلس منصة تعليمية متكاملة للتطوير المهني</Typography>
                        <Typography sx={{my:'20px',color:'#D3D3D3',fontSize:'18px'}}>نحن منصة تعليمية رقمية متخصصة في تقديم الدورات التدريبية المدفوعة بنظام الاشتراكات، نعمل على تمكين الأفراد من تطوير مهاراتهم المهنية والشخصية، ومساعدة الشركات والمؤسسات على رفع كفاءة فرق العمل وبناء قدراتهم وفق متطلبات سوق العمل المتجددة. نقدم محتوى تدريبي عالي الجودة في مجالات متعددة، يتم تطويره وتقديمه على يد خبراء ومختصين، مع التركيز على التطبيق العملي، وقياس الأثر التعليمي، وتحقيق نتائج ملموسة على مستوى الأداء الفردي والمؤسسي. توفر منصتنا تجربة تعليمية مرنة وسهلة الاستخدام، تتيح الوصول إلى الدورات في أي وقت ومن أي مكان، مما يساعد الأفراد على التعلم وفق جداولهم الخاصة، ويدعم الشركات في تنفيذ خطط تدريب فعّالة ومستدامة لموظفيها.</Typography>
                    </Box>
                </Box>
                <Box sx={{mt:'30px',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Box sx={{maxWidth:'400px',height:'180px', background:'#373E5B', p:'25px', margin:'10px',borderRadius:'10px'}}>
                        <Typography sx={{color:'#FFFFFF',fontWeight:'bold',pb:'10px'}}>رؤيتنا</Typography>
                        <Typography sx={{color:'#D3D3D3', maxWidth:'321px'}}>أن نكون منصة تعليمية رائدة تسهم في تطوير رأس المال البشري، وتمكّن الأفراد والمؤسسات من تحقيق النمو والتميّز من خلال التعلم المستمر.</Typography>
                    </Box>
                    <Box sx={{maxWidth:'400px',height:'180px', background:'#373E5B', p:'25px', margin:'10px',borderRadius:'10px'}}>
                        <Typography sx={{color:'#FFFFFF',fontWeight:'bold',pb:'10px'}}>رسالتنا</Typography>
                        <Typography sx={{color:'#D3D3D3', maxWidth:'321px'}}>تقديم حلول تعليمية رقمية مبتكرة وموثوقة، تلبي احتياجات الأفراد والشركات، وتساعدهم على اكتساب مهارات عملية ومعرفة عميقة، من خلال محتوى تدريبي احترافي وتجربة تعلم مرنة وفعّالة.</Typography>
                    </Box>
                    <Box sx={{maxWidth:'400px',height:'180px', background:'#373E5B', p:'25px', margin:'10px',borderRadius:'10px'}}>
                        <Typography sx={{color:'#FFFFFF',fontWeight:'bold',pb:'10px'}}>قيمنا</Typography>
                        <Typography sx={{color:'#D3D3D3', maxWidth:'321px'}}>نلتزم بتقديم تعليم عالي الجودة باحترافية ومصداقية، مع التركيز على التطوير المستمر، ووضع احتياجات المتعلم في مقدمة أولوياتنا، واعتماد الابتكار والشراكة لتحقيق أثر تعليمي فعّال ومستدام.</Typography>
                    </Box>
                </Box>
        </Container>
    )
    }

    export default About
