import { useState } from "react"

export default function Accordion() {
    const [open, useOpen] = useState()


    const language = [
        {
            id: 1,
            title: 'HTML',
            description: 'HTML, acronimo di HyperText Markup Language, è il linguaggio standard utilizzato per creare pagine web. Non è un linguaggio di programmazione nel senso tradizionale, ma un linguaggio di markup che definisce la struttura e il contenuto di un documento web.'
        },
        {
            id: 2,
            title: 'CSS',
            description: 'CSS, acronimo di Cascading Style Sheets, è un linguaggio di stile utilizzato per descrivere l\'aspetto e la formattazione di un documento scritto in HTML. CSS consente di separare il contenuto dalla presentazione, facilitando la gestione e la modifica dello stile delle pagine web.'
        },
        {
            id: 3,
            title: 'JavaScript',
            description: 'JavaScript è un linguaggio di programmazione utilizzato per creare contenuti interattivi e dinamici sulle pagine web. È un linguaggio di scripting lato client, il che significa che viene eseguito nel browser dell\'utente, consentendo di aggiornare il contenuto della pagina senza doverla ricaricare.'
        },
        {
            id: 4,
            title: 'Node JS',
            description: 'Node.js è un ambiente di esecuzione per JavaScript costruito con il motore V8 di Google Chrome. Permette di eseguire JavaScript sul server, consentendo la creazione di applicazioni web scalabili e performanti.'
        },
        {
            id: 5,
            title: 'Express',
            description: ' Express è un framework per Node.js che semplifica la creazione di applicazioni web e API. Fornisce una serie di funzionalità per gestire le richieste HTTP, le rotte e i middleware, rendendo lo sviluppo di applicazioni web più veloce e intuitivo.'
        },
        {
            id: 6,
            title: 'React US',
            description: 'React è una libreria JavaScript per la creazione di interfacce utente. Sviluppata da Facebook, consente di costruire applicazioni web complesse e reattive in modo semplice e modulare.'
        }
    ]


    function handleClick() {
        console.log("CLICK")
    }




    return (
        <div className="container d-flex gap-3 mt-4">
            {
                language.map((item) => {
                    return(
                    <div className="accordion-item">
                        <button type="button" class="btn btn-primary" >
                            {item.title}
                        </button>


                    </div>
                )})
            }
        </div>
    )



}





