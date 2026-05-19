import { Box, Container, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        py: 3,
        mt: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Creador: Segundo Montiel Ivan
        </Typography>
        <Typography variant="body2">
          Correo: 2022150481089@tesjo.edu.mx
        </Typography>
        <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
          © 2026 Sistema IC0802 - Todos los derechos reservados
        </Typography>
      </Container>
    </Box>
  );
}