import ToDo from "./ToDo";

export default function ToDoList() {
    return (
        <ul>
            <ToDo isCompleted={true} isDeleted={true} text="Learn HTML"/>
            <ToDo isCompleted={true} text="Learn CSS"/>
            <ToDo isCompleted={false} text="Learn JavaScript"/>
            <ToDo isCompleted={false} text="Learn TypeScript"/>
            <ToDo isCompleted={false} text="Learn ReactJS"/>
        </ul>
    )
}