import ToDo, { type ToDoProps } from "./ToDo";

const data: ToDoProps[] = [
    {
        id: 0,
        text: "Learn HTML",
        isCompleted: true
    },
    {
        id: 1,
        text: "Learn CSS",
        isCompleted: true
    },
    {
        id: 2,
        text: "Learn JavaScript",
        isCompleted: true
    },
    {
        id: 3,
        text: "Learn TypeScript",
        isCompleted: false
    },
    {
        id: 4,
        text: "Learn React",
        isCompleted: false
    },
];

export default function ToDoList() {
    return (
        <ul>
            {data.map((todo) => (
                <ToDo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}