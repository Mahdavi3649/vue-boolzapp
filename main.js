/*
 Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Questa é la struttura dati che dovete usare:
copiatela cosí com'é e non fate modifiche a quello che contiene, c'é giá tutto quello che vi occorre per volgere l'esercizio.

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato

*/


const app = new Vue({
    el: "#app",
    data: {

        contacts: [
            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },

            {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                  {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        selected: 0,
        searchContact: "", 
        inputText: "",        // prende il testo digitato dall'utente

        message_dropdown: {
            open: false,     //la tendina è chiusa by default che dobbiamo invertire true quando clicco
            selectedmsg: 0   //index del messagio selezionato 
        },
 
    },
    methods: {

        contactChange(index){
            this.selected = index;
        },

        // funzione per il tasto enter
        enterKey(){
            // oggetto che si aggiunge all'array esistente
            let inputMsg = {
                date: new Date().toLocaleString("it"),
                message: '',
                status: 'sent'
            };

            inputMsg.message = this.inputText;
            this.contacts[this.selected].messages.push(inputMsg);
            this.inputText = "";     // pulizia del campo input

            // risposta automatica al messaggio inviato
            setTimeout( () => {
                let autoReply = {
                    date : new Date().toLocaleString("it"),
                    message: 'Va bene, ci penso!',
                    status: 'received'
                };
                // l'oggetto-risposta si pusha nell'array
                this.contacts[this.selected].messages.push(autoReply);
    
            }, 1000);
        },

        // funzione per la ricerca dei contatti
        filterContact(){
             // Ciclo tra i contatti
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.searchContact.toLowerCase())) {  // trasformo tutto in minuscolo per la ricerca
                    contact.visible = true
                    //console.log("trovato");
                } else {
                    contact.visible = false
                    //console.log("Mi dispiace");
                }
            });
        },

        // il methodo, cliccando sui messaggi per aprire e chiudere dropdown  
        toggleDropdown(index){
            //console.log(index)
            if(index == this.message_dropdown.selectedmsg) 
            {
                this.message_dropdown.open = !this.message_dropdown.open;
            }else{
                this.message_dropdown.open = true;
            }
            this.message_dropdown.selectedmsg = index;
        },

        // funzione per cancellazione dei messaggi
        DeleteMessage(index){
            this.contacts[this.selected].messages.splice(index, 1);
            this.message_dropdown.open = false;
        }
        
    }
    
})