var app = new Vue({
    el: '#app',
    data: {
        todos: [{
            text: "make an app",
            completed: false,
        }, {
            text: "declare victory",
            completed: false,
        } , {
            text: "profit",
            completed: false
        }],
        message: '',
    },
    // "happy message"
    computed: {
        activeTodos() {
            // item => {} is another way of defining a function?
            //  item = parameter
            // . pass into this function.
            return this.todos.filter(item => {
                return !item.completed;
            });
        },
    },
    methods: {
        addItem() {
            this.todos.push({text: this.message, completed: false});
            this.message = '';
        },
        deleteItem(item) {
            var index = this.todos.indexOf(item);
            // remove & delete item from list...
            if(index > -1)
                this.todos.splice(index,1);
        }
    }
});