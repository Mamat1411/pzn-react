import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import ToDoList from "../todolist/ToDoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <ToDoList/>
            <Table />
            <AlertButton text="Click Me" message="You clicked Me!"/>
        </Container>
    </StrictMode>
)