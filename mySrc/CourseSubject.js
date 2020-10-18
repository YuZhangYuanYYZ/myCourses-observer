export default class CourseSubject extends EventTarget{
    constructor(courses){
        this.courses = courses ;
        this.observerList = [];
    }
    getCourses(){
        return this.courses;
    }
    setCourses(newCourses){
        this.courses = newCourses;
        this.dispatchEvent(new CustomEvent("observerUpdate",{
            detail:newCourses
        }));
    }
    
    attach(observer){
        this.observerList = [...this.observerList,observer];
    }

    // notify(){
    //     this.observerList.forEach(observer=>{
    //         observer.update(this.courses)
    //     })

    // }
}

