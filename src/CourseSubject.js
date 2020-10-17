const  StudentObserver = require("./StudentObserver")
const  TeacherObserver = require("./TeacherObserver")

class CourseSubject {
    constructor(courses){
        this.courses = courses;
        this.observerList = [];
    }

    setCourses(newCourses){
        this.courses = newCourses;
        this.notifyAllObservers();
    }
    
    getCourses(){
        return this.courses;
    }
  
    attach(observer){
        this.observerList = [...this.observerList, observer];
    }

    notifyAllObservers(){
       this.observerList.forEach(observer=>{
           observer.update(this.courses);
       })
    }
}

module.exports = CourseSubject;