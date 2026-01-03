        import { Box, Container } from "@mui/material"
        import thankYouImg from '../assets/images/thank-you-img.png'

            const ThankYou = () => {
            return (
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',     
                            minHeight: '100vh',       
                        }}
                    >
                    <img 
                        src={thankYouImg} 
                        alt="Thank You" 
                        style={{ maxWidth: '100%', height: 'auto' }} 
                    />
                    </Box>
                </Container>
            )
            }

            export default ThankYou
