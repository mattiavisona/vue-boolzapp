const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {
      // contacts è un array di oggetti
      // ogni oggetto contiene i dettagli dell'utente con cui chattiamo
      // contiene anche un array di messaggi
        // ogni messaggio contiene la data, il testo e lo stato (inviato o ricevuto)
      
        contacts: [

            {
                name: 'Michele',
                avatar: 'boolzap-img/avatar_1.jpg',
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
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: 'boolzap-img/avatar_2.jpg',
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
                avatar: 'boolzap-img/avatar_3.jpg',
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
                avatar: 'boolzap-img/avatar_4.jpg',
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
                avatar: 'boolzap-img/avatar_5.jpg',
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
                avatar: 'boolzap-img/avatar_6.jpg',
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
                avatar: 'boolzap-img/avatar_7.jpg',
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
                avatar: 'boolzap-img/avatar_8.jpg',
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
        // questa proprietà mi dice quale sia la chat da visualizzare a destra, cambia in abse
        // al contatto cliccato a sinistra
        activeContactIndex: 0,

        // una proprietà che memorizza il testo inserito dall'utente nell'input
        userMessageInput: '',

        // proprietà che memorizza la ricerca dell'utente tra i contatti
        userSearch: '',
    }
  },

  methods: {
    
    changeActiveContactIndex(contactIndex) {
      // cambiare la proprietà activeContactIndex
      // in base a quale contatto abbiamo cliccato
      
      this.activeContactIndex = contactIndex;

      console.log(this.activeContactIndex);
    },

    sendMessage() {
        
        
        // creare un nuovo messaggio
        const newMessage = {
            date: '10/01/2020 15:51:00',
            message: this.userMessageInput,
            status: 'sent',
        };
        
        // aggiungerlo alla lista dei messaggi nella chat corrente

        this.contacts[this.activeContactIndex].messages.push(newMessage);

        // cancellare il contenuto del campo di input
        this.userMessageInput = '';

        // mi aspetto una risposta dal contatto
        const contactReply = {
            date: '10/01/2020 15:51:00',
            message: 'ok',
            status: 'received',
        }

        // aggiungo il messaggio alla lista di chat

        setTimeout(() => {
            this.contacts[this.activeContactIndex].messages.push(contactReply);
        }, 1000);
    },

    // funzione che filtra i contatti in base alla ricerca
    contactsSearch() {

        // visualizzare o meno i contatti nella lista in base alla ricerca dell'utente

        // ciclo ogni contatto
        // controllo la stringa digitata dall'utente
        // se il nome del contatto contiene questa stringa
        // la sua proprietà "done" viene settata a true
        // ALTRTIMENTI
        // la sua proprietà "done" viene settata a false

        this.contacts.forEach(contact => {
            // contact in questo caso è il contatto singolo dall'array contacts
            // cambia ad ogni iterazione

            // per permettere una ricerca NON case sensitive, faccio il controllo sulle stringhe
            // convertite in minuscolo

            if(contact.name.toLowerCase().includes(this.userSearch.toLowerCase())) {
                contact.visible = true;
            } else {
                contact.visible = false;
            }

        });
    },

  },


}).mount('#app');