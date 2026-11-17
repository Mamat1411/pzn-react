import type { MouseEventHandler } from "react";

type ToolbarProps = {
    onClick: MouseEventHandler<HTMLElement>;
}

export default function Toolbar({onClick}: ToolbarProps) {
    return (
        <div onClick={onClick} style={{ backgroundColor: "yellow" }}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}