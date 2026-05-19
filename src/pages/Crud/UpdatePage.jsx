import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

export default function UpdatePage() {
  const [registros, setRegistros] = useState([
    {
      id: 1,
      nombre: "Juan",
      apellido: "García",
      email: "juan@ejemplo.com",
      telefono: "123456789",
    },
    {
      id: 2,
      nombre: "María",
      apellido: "López",
      email: "maria@ejemplo.com",
      telefono: "987654321",
    },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "Martínez",
      email: "carlos@ejemplo.com",
      telefono: "555444333",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleOpenDialog = (registro) => {
    setRegistroSeleccionado(registro);
    setFormData(registro);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setRegistroSeleccionado(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setRegistros(
      registros.map((r) =>
        r.id === registroSeleccionado.id ? formData : r
      )
    );
    handleCloseDialog();
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Actualizaciones - Modificar Registros
      </Typography>

      <Grid container spacing={3}>
        {/* Información */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Selecciona un registro en la tabla para editarlo. Los cambios
                se guardarán automáticamente.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tabla */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Registros Disponibles
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registros.map((registro) => (
                  <TableRow key={registro.id}>
                    <TableCell>{registro.id}</TableCell>
                    <TableCell>{registro.nombre}</TableCell>
                    <TableCell>{registro.apellido}</TableCell>
                    <TableCell>{registro.email}</TableCell>
                    <TableCell>{registro.telefono}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => handleOpenDialog(registro)}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* Dialog de edición */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Registro #{registroSeleccionado?.id}</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Stack spacing={2}>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
          >
            Guardar Cambios
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}