import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box
} from "@mui/material";

import PageContainer from "../../components/common/PageContainer";
import carlos from "../../images/Carlos.jpeg"
import emma from "../../images/Emma.jpeg"
import isabel from "../../images/Isabel.jpeg"
import ivan from "../../images/Ivan.jpeg"

export default function Equipo() {

  const integrantes = [
    {
      nombre: "Ivan Segundo Montiel",
      matricula: "2022150481089",
      carrera: "Ingeniería en Sistemas Computacionales",
      correo: "2022150481089@tesjo.edu.mx",
      rol: "Frontend Developer",
      descripcion:
        "Administra la estructura y mantenimiento de la base de datos.",
      foto: ivan
    },
    {
      nombre: "María Isabel Martínez López",
      matricula: "2022150480686",
      carrera: "Ingeniería en Sistemas Computacionales",
      correo: "2022150480686@tesjo.edu.mx",
      rol: "Backend Developer",
      descripcion:
        "Responsable de la lógica del sistema y conexión con la base de datos.",
      foto: isabel
    },
    {
      nombre: "Carlos Esuardo Ramirez Alcalde",
      matricula: "2022150480925",
      carrera: "Ingeniería en Sistemas Computacionales",
      correo: "carlos.ramirez@institucion.edu.mx",
      rol: "Database Manager",
      descripcion:
        " Coordina las actividades del equipo y supervisa el avance del proyecto.",
      foto: carlos
    },
    {
      nombre: "María Emma Solis Gonzalez",
      matricula: "2022150481114",
      carrera: "Ingeniería en Sistemas Computacionales",
      correo: "fernanda.gomez@institucion.edu.mx",
      rol: "Project Manager",
      descripcion:
        "Encargado del diseño de interfaces y experiencia visual del proyecto.",
      foto: emma
    }
  ];

  return (
    <PageContainer title="Integrantes del equipo de trabajo">

      <Grid container spacing={3}>

        {integrantes.map((integrante, index) => (
          <Grid item xs={12} md={6} key={index}>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mb={2}
                >
                  <Avatar
                    src={integrante.foto}
                    alt={integrante.nombre}
                    sx={{ width: 120, height: 120, mb: 2 }}
                  />

                  <Typography variant="h6" align="center">
                    {integrante.nombre}
                  </Typography>
                </Box>

                <Typography>
                  <strong>Matrícula:</strong> {integrante.matricula}
                </Typography>

                <Typography>
                  <strong>Carrera:</strong> {integrante.carrera}
                </Typography>

                <Typography>
                  <strong>Correo:</strong> {integrante.correo}
                </Typography>

                <Typography>
                  <strong>Rol:</strong> {integrante.rol}
                </Typography>

                <Typography mt={1}>
                  <strong>Descripción:</strong> {integrante.descripcion}
                </Typography>

              </CardContent>
            </Card>

          </Grid>
        ))}

      </Grid>

    </PageContainer>
  );
}