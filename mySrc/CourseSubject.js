export default class CourseSubject extends EventTarget{
    constructor(courses){
        super();
        this.courses = courses ;
        this.observerList = [];
    }
    
    getCourses(){
        return this.courses;
    }

    setCourses(newCourses){
        this.courses = newCourses;
        this.dispatchEvent(new CustomEvent("observerUpdate",{
            detail: newCourses
        }));
        console.log("dispatch");
        
    }
    
    attach(observer){
        this.observerList = [...this.observerList,observer];
    }
}

