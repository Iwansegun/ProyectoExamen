import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";

export default function DeletePage() {
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
    {
      id: 4,
      nombre: "Ana",
      apellido: "Rodríguez",
      email: "ana@ejemplo.com",
      telefono: "777888999",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [eliminados, setEliminados] = useState([]);

  const handleOpenDialog = (registro) => {
    setRegistroSeleccionado(registro);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setRegistroSeleccionado(null);
  };

  const handleDelete = () => {
    setRegistros(registros.filter((r) => r.id !== registroSeleccionado.id));
    setEliminados([...eliminados, registroSeleccionado]);
    handleCloseDialog();
  };

  const handleRestore = (id) => {
    const registroARestaurar = eliminados.find((r) => r.id === id);
    setRegistros([...registros, registroARestaurar]);
    setEliminados(eliminados.filter((r) => r.id !== id));
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Eliminación - Eliminar Registros
      </Typography>

      {/* Advertencia */}
      <Alert severity="warning" sx={{ mb: 3 }}>
        <WarningIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Tenga cuidado al eliminar registros. Puede restaurarlos desde la sección
        de registros eliminados.
      </Alert>

      <Grid container spacing={3}>
        {/* Registros activos */}
        <Grid item xs={12} lg={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Registros Activos ({registros.length})
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registros.length > 0 ? (
                  registros.map((registro) => (
                    <TableRow key={registro.id}>
                      <TableCell>{registro.id}</TableCell>
                      <TableCell>
                        {registro.nombre} {registro.apellido}
                      </TableCell>
                      <TableCell>{registro.email}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleOpenDialog(registro)}
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No hay registros activos
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Registros eliminados */}
        <Grid item xs={12} lg={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Registros Eliminados ({eliminados.length})
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eliminados.length > 0 ? (
                  eliminados.map((registro) => (
                    <TableRow key={registro.id} sx={{ opacity: 0.6 }}>
                      <TableCell>{registro.id}</TableCell>
                      <TableCell>
                        {registro.nombre} {registro.apellido}
                      </TableCell>
                      <TableCell>{registro.email}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => handleRestore(registro.id)}
                        >
                          Restaurar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No hay registros eliminados
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* Dialog de confirmación */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WarningIcon color="error" />
          Confirmar Eliminación
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 2 }}>
            ¿Está seguro de que desea eliminar el registro de{" "}
            <strong>
              {registroSeleccionado?.nombre} {registroSeleccionado?.apellido}
            </strong>
            ?
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Puede restaurar este registro desde la sección de registros
            eliminados.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}