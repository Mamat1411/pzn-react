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
    } else if (!isCompleted) {
        return <li>{text}</li>;
    }
    
    return (
        <li>
            <del>{text}</del>
        </li>
    );
}
