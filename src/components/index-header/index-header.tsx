import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import styles from "./index-header.module.css";

export default function IndexHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/" className={styles.link}>
            <Typography variant="h5" component="span">
              AaYA E-Shop
            </Typography>
          </Link>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<ReorderIcon />}>
              Category
            </Button>
            <TextField label="Search product" variant="standard" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}