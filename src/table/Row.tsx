let counter: number = 0;

export default function Row({text}: {text: string}) {
    counter++;
    return (
        <tr>
            <td>{counter}</td>
            <td>{text}</td>
        </tr>
    )
}