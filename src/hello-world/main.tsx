import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import ToDoList from "../todolist/ToDoList";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <ToDoList/>
        </Container>
    </StrictMode>
)