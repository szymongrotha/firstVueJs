Vue.config.productionTip = false;
new Vue({
    el:'#events',

    data: {
        event: { name: '', description: '', date: ''},
        events: []
    },

    mounted: function() {
        this.runEvents();
    },

    methods: {
        runEvents: function() {
            var events = [
                {
                    id: 1,
                    name: 'Star Wars In Concert',
                    description: 'Tickets are bought! :D',
                    date: '2017-04-01'
                },
                {
                    id: 2,
                    name: 'May Vacation! :D',
                    description: 'Where sould we go?',
                    date: '2017-05-01'
                },
            ];
            this.events = events;
        },

        addEvent: function() {
            if(this.event.name && this.event.description && this.event.date) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            } else {
                alert('Please fill out all required fields!')
            }
        },

        deleteEvent: function(index) {
            if(confirm("Are you sure you want to delete this event?")) {
                this.events.splice(index, 1);        
            }
        }
    }
});