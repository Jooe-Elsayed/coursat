        import {
        Box,
        TextField,
        Button,
        Checkbox,
        FormControlLabel,
        Typography,
        Link,
        Paper
        } from "@mui/material";

        import logo from "../assets/images/logo.png";

        const LoginForm = () => {
        return (
            <Paper
            elevation={3}
            sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 8,
                p: 4,
                backgroundColor: "rgba(55, 62, 91, 1)",
                color: "#fff",
            }}
            >

                <Box sx={{ textAlign: "center", mb: 3 }}>
                <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                    width: 220,
                    height: 50,
                    objectFit: "contain",
                }}
                />
            </Box>

            {/* Email */}
            <TextField sx={{backgroundColor:'rgba(74, 81, 107, 1)', borderRadius:'5px', outline:'none'}}
                fullWidth
                type="email"
                margin="normal"
            />

            {/* Password */}
            <TextField sx={{backgroundColor:'rgba(74, 81, 107, 1)', borderRadius:'5px', outline:'none'}}
                fullWidth
                type="password"
                margin="normal"
            />

            {/* Remember me + Forget password */}
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
                }}
            >
                <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remember me"
                />

                <Link
                href="#"
                underline="hover"
                fontSize="14px"
                >
                Forgot password?
                </Link>
            </Box>

            {/* Login Button */}
            <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
            >
                Login
            </Button>

            {/* Signup */}
            <Typography
                textAlign="center"
                mt={3}
                fontSize="14px"
            >
                Don’t have an account?{" "}
                <Link href="#" underline="hover">
                Sign up
                </Link>
            </Typography>
            </Paper>
        );
        };

        export default LoginForm;
