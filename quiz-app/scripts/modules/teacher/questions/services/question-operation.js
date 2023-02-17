import { Question } from "../model/question-model.js";
 export const questionOperations = {
    questions :[],
    add(questionObject){
        const question =new Question();
        for(let key in question){
            question[key]=questionObject[key];
        }

     this.questions.push(question);
    },
    toggleMark(id){
        const questionObject = this.questions.find((question)=>question.id==id);
        if(questionObject){
           questionObject.isMarked = !questionObject.isMarked;
        }
    },
    // edit(id){
        
    // },
    deleteForever(){
        this.questions = this.questions.filter((question) => !question.isMarked);
        return this.questions;
    }
}