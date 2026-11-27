import { useState, type ChangeEvent } from "react";

type Contact = {
    name: string,
    message: string
}

export default function ContactForm() {
    const [contact, setContact] = useState<Contact>({
        name: "",
        message: ""
    });

    function changeName(e: ChangeEvent<HTMLInputElement>) {
        setContact({
            ...contact,
            name: e.target.value
        });
    }

    function changeMessage(e: ChangeEvent<HTMLInputElement>) {
        setContact({
            ...contact,
            message: e.target.value
        });
    }

    return(
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={changeName} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={changeMessage} />
            </form>

            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    );
}