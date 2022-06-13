const items = [];

const randomToDos = ["Feed the dog", "Wake up dad", "Buy oranges", "Call Florian", "Open a ticket on Slack", "Finish Boolean school and find a job", "Talk with the cat", "Think on what to do", "Do a To Do List with Vue.js", "Take sunbath"]

const appVue = new Vue({
    el: "#app",
    data:{
        listItems: items,
        inputText: "",
        randomItem: randomToDos[Math.floor(Math.random()*10)],
    },
    methods:{
        addToDo(){
            if(this.inputText.trim()){
            const th = this;
            this.listItems.push({title: th.inputText, done: false});
            this.inputText = "";
            this.randomItem = randomToDos[Math.floor(Math.random()*10)];
        } else {
            return;
        }
        },
        justDone(i){
            this.listItems[i].done = !this.listItems[i].done;
        },
        removeToDo(i){
            this.listItems.splice(i, 1);
        }
    },
})