type ToDoProps = {
    text: string;
    isCompleted: boolean;
    isDeleted?: boolean;
};

export default function ToDo({
    text,
    isCompleted,
    isDeleted = false,
}: ToDoProps) {
    if (isDeleted) {
        return null
    }

    return (
        <li>
            {isCompleted ? <del>{text}</del> : text}
        </li>
    );
}
