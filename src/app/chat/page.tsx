// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";

// export default function Chat() {
//   const [messages, setMessages] = useState<
//     { role: "user" | "assistant"; content: string }[]
//   >([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { input };
//     setMessages((prev: any) => [
//       ...prev,
//       { role: "assistant", content: userMessage.input },
//     ]);
//     setInput("");

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ input }),
//       });
//       const data = await response.json();

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: data.message },
//       ]);
//     } catch (error) {
//       console.log(error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "⚠️ Error talking to model" },
//       ]);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Paper
//         elevation={3}
//         sx={{ p: 2, height: "70vh", display: "flex", flexDirection: "column" }}
//       >
//         <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
//           {messages.map((m, i) => (
//             <Box
//               key={i}
//               sx={{
//                 mb: 1,
//                 p: 1,
//                 borderRadius: 2,
//                 maxWidth: "80%",
//                 bgcolor: m.role === "user" ? "primary.main" : "grey.300",
//                 color: m.role === "user" ? "white" : "black",
//                 alignSelf: m.role === "user" ? "flex-end" : "flex-start",
//               }}
//             >
//               <Typography variant="body1">{m.content}</Typography>
//             </Box>
//           ))}
//         </Box>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <Button variant="contained" onClick={sendMessage}>
//             Send
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }
