type MyButtonProps = {
    text: string;
    onSmash: () => void
}

export default function MyButton({text, onSmash}: MyButtonProps) {
    return (
        <button onClick={onSmash}>{text}</button>
    )
}