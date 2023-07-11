import { Container, Paper } from "@mui/material";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md" component={Paper} sx={{ my: 2 }}>
      {children}
    </Container>
  );
};

export default Layout;
