var app = new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Sam',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        show_name: true,
        show_age: true,
        items: ['Banana', 'Green Shells', 'Red Shells', 'Mushrooms', 'Star'],
        ninjas: [
            { name: 'Foo', age: 12 },
            { name: 'Bar', age: 23 }
          ]
    },
    methods: {
        greet(time) {
            return `Hello There ${time} ${this.name}`
        },
        change_wage(amount) {
            this.wage += amount
        },
        log_event(e) {
            console.log(e)
        },
        log_coords(e) {
            // console.log(e)
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        update_name(e) {
            // console.log(e.target.value)
            this.name = e.target.value
        },
        log_message() {
            console.log("this is a message")
        },
        toggle_name() {
            this.show_name = !(this.show_name)
        }
    }
})