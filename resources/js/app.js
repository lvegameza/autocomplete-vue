require('./bootstrap');
window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('autocomplete-component', require('./components/AutocompleteComponent.vue').default);

const app = new Vue({
    el: '#app',
});
