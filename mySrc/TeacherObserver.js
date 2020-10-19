export default class TeacherObserver extends EventTarget{
    constructor(name){
        super();
        this.name = name;
        this.addEventListener("observerUpdate",e=>{
            let element = document.getElementById("teacher")
            element.innerHTML = `this.name,e.detail`;
            console.log(this.name,e.detail) ;
       })  
    }
    observe(newCourses){
        this.update(newCourses);
    }
    update(newCourses){
        console.log(this.name,newCourses) ;
    }
}