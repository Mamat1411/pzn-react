import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return(
        <div>
            <h1>Programmer Zaman Now</h1>
            {children}
            <footer>
                <p>2026 Muhammad Mujahid</p>
            </footer>
        </div>
    )
}