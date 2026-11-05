type AlertProps = {
    text: string;
    message: string;
}

export default function AlertButton({text, message}: AlertProps) {
    function handleClick() {
        alert(message);
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}