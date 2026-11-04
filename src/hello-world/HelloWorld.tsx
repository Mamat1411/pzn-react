import './HelloWorld.css';

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
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const paragraph = `Selamat Belajar ReactJS dari PZN`;
    return (
        <p className="content">{paragraph.toLowerCase()}</p>
    )    
}