import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";
import AnshadTest1 from "./AnshadTest1";
import AnshadTest2 from "./AnshadTest2";
import AkshayTest1 from "./AkshayTest1";
import AkshayTest2 from "./AkshayTest2";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
          <Button style={{fontSize: "1.2rem", paddingBottom:"9px"  }} color="inherit" component={Link} to="/">v2.0 tututorial</Button>
          <Button color="inherit" component={Link} to="/anshadtest1">anshadtest1</Button>
          <Button color="inherit" component={Link} to="/anshadtest2">anshadtest2</Button>
          <Button color="inherit" component={Link} to="/akshaytest1">akshaytest1</Button>
          <Button color="inherit" component={Link} to="/akshaytest2">akshaytest2</Button>
          
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container style={{ textAlign: "center", padding: "20px" }}>
        

        <Routes>
          <Route path="/" element={<Typography variant="h5" >Welcome to React JS Assignment</Typography>} />
          <Route path="/anshadtest1" element={<AnshadTest1 />} />
          <Route path="/anshadtest2" element={<AnshadTest2 />} />
          <Route path="/akshaytest1" element={<AkshayTest1 />} />
          <Route path="/akshaytest2" element={<AkshayTest2 />} />
        </Routes>
      </Container>
    </div>
  );
}