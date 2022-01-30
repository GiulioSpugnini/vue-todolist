console.log('Vue OK', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: ' #root',
    data: {
        inputText: '',
        items: [{
                text: 'Carne',
                done: true,
            },
            {
                text: 'Latte',
                done: false,
            },
            {
                text: 'Pesce',
                done: true,
            },
            {
                text: 'Acqua',
                done: false,
            },
            {
                text: 'Pane',
                done: true,
            },
            {
                text: 'Cioccolate',
                done: false,
            },
        ]
    },
    methods: {
        isActive(index) {
            return this.done;
        },
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        addItem() {
            newText = this.inputText.trim();
            this.items.push({ text: newText, done: false });
            this.inputText = '';
        },
        changeDone(index) {
            const changeDone = this.items.map((item, i) => {
                if (i === index) item.done = !item.done;
                return item;
            });
            this.item = changeDone;
        },
    }
});