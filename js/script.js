console.log('Vue OK', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: ' #root',
    data: {
        items: [{
                text: 'Carne',
                done: false,
            },
            {
                text: 'Latte',
                done: false,
            },
            {
                text: 'Pesce',
                done: false,
            },
            {
                text: 'Acqua',
                done: false,
            },
            {
                text: 'Pane',
                done: false,
            },
            {
                text: 'Cioccolate',
                done: false,
            },
        ]
    },
});