export default function HelloWorld() {
    const props = {
        text: "Hello World"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld({
    text = "Default Value"
}) {
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