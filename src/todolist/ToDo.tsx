export type ToDoProps = {
    id: number|string;
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
            {text} {isCompleted && '✅'}
        </li>
    );
}
