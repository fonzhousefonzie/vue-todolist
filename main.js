const items = [];

const appVue = new Vue({
    el: "#app",
    data:{
        listItems: items,
        inputText: "",

    },
    methods:{
        addToDo(){
            if(this.inputText.trim()){
            const th = this;
            this.listItems.push({title: th.inputText, done: false});
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