type RowProps = {
    id: string | number;
    text: string;
}

export default function Row({id, text}: RowProps) {
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}