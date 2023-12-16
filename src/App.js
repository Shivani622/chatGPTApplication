import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Homepage from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/Homepage.js";
import Register from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/Register.js";
import Login from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/Login.js";
import Summary from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/Summary.js";
import Paragraph from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/Paragraph.js";
import ChatBot from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/ChatBot.js";
import JsConverter from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/JsConverter.js";
import ScifiImage from "C:/Users/shiva/Desktop/chat-gpt/client/src/Pages/ScifiImage.js";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;