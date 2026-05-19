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
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function QueryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("nombre");

  const [registros] = useState([
    {
      id: 1,
      nombre: "Juan",
      apellido: "García",
      email: "juan@ejemplo.com",
      telefono: "123456789",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "María",
      apellido: "López",
      email: "maria@ejemplo.com",
      telefono: "987654321",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "Martínez",
      email: "carlos@ejemplo.com",
      telefono: "555444333",
      estado: "Inactivo",
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "Rodríguez",
      email: "ana@ejemplo.com",
      telefono: "777888999",
      estado: "Activo",
    },
  ]);

  const registrosFiltrados = registros.filter((registro) => {
    const valor = registro[searchType]?.toString().toLowerCase() || "";
    return valor.includes(searchTerm.toLowerCase());
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // La búsqueda se realiza en tiempo real
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Consultas - Buscar Registros
      </Typography>

      <Grid container spacing={3}>
        {/* Panel de búsqueda */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Buscar Registros
              </Typography>
              <Box component="form" onSubmit={handleSearch}>
                <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
                  <TextField
                    label="Buscar por..."
                    select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{ minWidth: 150 }}
                  >
                    <option value="nombre">Nombre</option>
                    <option value="apellido">Apellido</option>
                    <option value="email">Email</option>
                    <option value="telefono">Teléfono</option>
                  </TextField>
                  <TextField
                    label="Término de búsqueda"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                    type="submit"
                  >
                    Buscar
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tabla de resultados */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Resultados ({registrosFiltrados.length})
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
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registrosFiltrados.length > 0 ? (
                  registrosFiltrados.map((registro) => (
                    <TableRow key={registro.id}>
                      <TableCell>{registro.id}</TableCell>
                      <TableCell>{registro.nombre}</TableCell>
                      <TableCell>{registro.apellido}</TableCell>
                      <TableCell>{registro.email}</TableCell>
                      <TableCell>{registro.telefono}</TableCell>
                      <TableCell>
                        <Chip
                          label={registro.estado}
                          color={
                            registro.estado === "Activo" ? "success" : "default"
                          }
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No se encontraron registros
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}