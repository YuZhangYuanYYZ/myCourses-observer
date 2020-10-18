class StudentObserver{
    constructor(name){
        this.name = name;
        
    }
    //be notified
    update(data){
        console.log(this.name);
        console.log(data);
        let element = document.getElementById("student")
            element.innerHTML = `this.name,${data}`;
    }
}

module.exports = StudentObserver;