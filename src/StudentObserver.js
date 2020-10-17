class StudentObserver{
    constructor(name){
        this.name = name;
    }
    //be notified
    update(data){
        console.log(this.name);
        console.log(data);
    }
}

module.exports = StudentObserver;