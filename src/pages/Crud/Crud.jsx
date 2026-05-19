import { Box, Card, CardContent, Button, Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Crud() {
  const navigate = useNavigate();

  const crudOptions = [
    {
      title: "Altas",
      description: "Crear nuevos registros en el sistema",
      icon: AddCircleIcon,
      path: "/crud/create",
      color: "success",
    },
    {
      title: "Consultas",
      description: "Buscar y consultar registros existentes",
      icon: SearchIcon,
      path: "/crud/query",
      color: "primary",
    },
    {
      title: "Actualizaciones",
      description: "Modificar datos de registros existentes",
      icon: EditIcon,
      path: "/crud/update",
      color: "info",
    },
    {
      title: "Eliminación",
      description: "Eliminar registros del sistema",
      icon: DeleteIcon,
      path: "/crud/delete",
      color: "error",
    },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Gestión CRUD
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Selecciona una operación para gestionar los registros del sistema
      </Typography>

      <Grid container spacing={2}>
        {crudOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={option.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
                  },
                }}
                onClick={() => navigate(option.path)}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <IconComponent
                    sx={{
                      fontSize: 40,
                      mb: 1,
                      color: `${option.color}.main`,
                    }}
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {option.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {option.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}