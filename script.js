const { createApp } = Vue;

createApp({
  

  data() {
    return {
      
        contacts: [

            {
                name: 'Michele',
                avatar: 'boolzap-img/avatar_1.jpg',
                visible: true,
                messages: [

                    {
                        date: '25/12/2020',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '25/12/2020',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
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
                        date: '25/12/2020',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '25/12/2020',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '25/12/2020',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        
        activeContactIndex: 0,

        
        userMessageInput: '',

        
        userSearch: '',
    }
  },

  methods: {
    
    changeActiveContactIndex(contactIndex) {

      
      this.activeContactIndex = contactIndex;

      console.log(this.activeContactIndex);
    },

    sendMessage() {
        
        
        
        const newMessage = {
            date: '25/12/2020',
            message: this.userMessageInput,
            status: 'sent',
        };
        

        this.contacts[this.activeContactIndex].messages.push(newMessage);

        this.userMessageInput = '';

        const contactReply = {
            date: '25/12/2020',
            message: 'Daje!',
            status: 'received',
        }

        

        setTimeout(() => {
            this.contacts[this.activeContactIndex].messages.push(contactReply);
        }, 1000);
    },

    
    contactsSearch() {

        

        this.contacts.forEach(contact => {
            
            if(contact.name.toLowerCase().includes(this.userSearch.toLowerCase())) {
                contact.visible = true;
            } else {
                contact.visible = false;
            }

        });
    },

  },


}).mount('#app');