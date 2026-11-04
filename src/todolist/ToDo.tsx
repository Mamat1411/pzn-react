type ToDoProps = {
    text: string;
    isCompleted: boolean;
};

export default function ToDo({
    text,
    isCompleted
}: ToDoProps) {
    if (isCompleted) {
        return (
            <li>
                <del>{text}</del>
            </li>
        )
    } else {
        return (
            <li>
                {text}
            </li>
        )
    }
}