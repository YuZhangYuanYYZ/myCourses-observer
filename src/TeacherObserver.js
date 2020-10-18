class TeacherObserver{
    constructor(name){
        this.name = name;
        
    }
    //be notified
    update(data){
        let element = document.getElementById("teacher")
            element.innerHTML = `this.name,${data}`;
        console.log(this.name);
        console.log(data);
    }
}

module.exports = TeacherObserver;