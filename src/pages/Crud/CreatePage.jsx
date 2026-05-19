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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CreatePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const [registros, setRegistros] = useState([
    {
      id: 1,
      nombre: "Juan Pablo",
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
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRegistro = {
      id: Math.max(...registros.map((r) => r.id), 0) + 1,
      ...formData,
    };
    setRegistros([...registros, nuevoRegistro]);
    setFormData({ nombre: "", apellido: "", email: "", telefono: "" });
  };

  const handleDelete = (id) => {
    setRegistros(registros.filter((r) => r.id !== id));
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Altas - Crear Registros
      </Typography>

      <Grid container spacing={3}>
        {/* Formulario */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Nuevo Registro
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    type="submit"
                  >
                    Agregar Registro
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tabla */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Registros Creados
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
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(registro.id)}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}