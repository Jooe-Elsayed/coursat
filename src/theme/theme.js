    import { createTheme } from "@mui/material/styles";

    const theme = createTheme({
    direction: "ltr", 

    palette: {
        mode: "light",

        primary: {
        main: "#003B71", 
        },
        secondary: {
        main: "#09B096",
        },
        background: {
        default: "rgba(16, 23, 56, 1)",
        paper: "#FFFFFF",
        },
        text: {
        primary: "#1A1A1A",
        secondary: "#6B7280",
        },
    },

        typography: {
                fontFamily: ['"STC"', "Arial", "sans-serif"].join(","),
    },

    shape: {
        borderRadius: 12,
    },

    components: {
        MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
            borderRadius: 12,
            padding: "10px 20px",
            },
        },
        },

        MuiTextField: {
        defaultProps: {
            variant: "standard",
        },
        },

        MuiOutlinedInput: {
        styleOverrides: {
            notchedOutline: {
            border: "none",
            },
        },
        },

        MuiPaper: {
        styleOverrides: {
            root: {
            borderRadius: 16,
            },
        },
        },
    },
    });

    export default theme;
