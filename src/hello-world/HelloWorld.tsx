export default function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld() {
    const text = `Hello World`;
    return (
        <h1 style={{ 
            color: `red`,
            backgroundColor: `aqua`
         }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const paragraph = `Selamat Belajar ReactJS dari PZN`;
    const style = {
        color: `blue`,
        backgroundColor: `yellow`
    }
    return (
        <p style={style}>{paragraph.toLowerCase()}</p>
    )    
}