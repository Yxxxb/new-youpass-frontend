//api写在这里 可以根据需要穿件文件夹
import requests from "@/utils/requests";

export const signUp = (data) => {

    return requests({
        url:'/account/signup',method:'post',data:data
    })
}

export const login = (postData)=>{
    let ret =  requests({url:'/account/login',method:'post',data:postData})
    return ret
}
export const checkState = ()=>{
    return requests({url:'/account/checkState',method:'get'})
}
export const getAllInfo = (postData)=>{
    return requests({url:'/account/getAllInfo',method:'get',data:postData})
}
export const searchCourse1 = (data)=>{
    return requests({url:'/course/getCourseById',method:'get', params:data})
}
export const searchCourse2 = (data)=>{
    return requests({url:'/course/getCourseByTitle',method:'get', params:data});
}
export const searchCourse3 = (data)=>{
    return requests({url:'/course/getCourseByTName',method:'get', params:data})
}
export const setSession = (data)=>{
    return requests({url:'/exam/setSession',method:'post', data:data})
}
export const getExamQuestion = ()=>{
    return requests({url:'/exam/takeExam/getExamQuestion',method:'get'})
}
//老师添加题目
export const addQuestions = (postData)=>{
    return requests({url:'/question/update',method:'post',data:postData})
}
//获取课程的考试
export const getExams = (courseId)=>{
    return requests({url:"/exam/courseGetExam/"+courseId,method:'get'})
}
//获取考试所有学生的成绩
export const getAllStudents=(courseId,examId)=>{
    return requests({url:'/score/getGrade'+courseId+"/"+examId,method:'get'})
}



