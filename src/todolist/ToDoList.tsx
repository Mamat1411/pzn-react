import ToDo, { type ToDoProps } from "./ToDo";

const data: ToDoProps[] = [
    {
        text: "Learn HTML",
        isCompleted: true
    },
    {
        text: "Learn CSS",
        isCompleted: true
    },
    {
        text: "Learn JavaScript",
        isCompleted: true
    },
    {
        text: "Learn TypeScript",
        isCompleted: false
    },
    {
        text: "Learn React",
        isCompleted: false
    },
];

export default function ToDoList() {
    const todos = data.map((todo) => (
        <ToDo {...todo} />
    ));

    return (
        <ul>
            {todos}
        </ul>
    )
}