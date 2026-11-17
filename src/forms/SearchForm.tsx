import type { MouseEvent } from "react";

export default function SearchForm() {
    return (
        <form>
            <input type="text" />
            <button onClick={(e: MouseEvent<HTMLElement>) => {
                e.preventDefault();
                alert("You searched");
            }}>
                Search
            </button>
        </form>
    )    
}