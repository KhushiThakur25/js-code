import {questionOperations} from "../services/question-operation.js";

window.addEventListener('load',collect);
function collect(){
    bindEvents();
    //  disableButtons();
     
}

// function disableButtons(){
//     document.querySelector("#delete").disabled=true;
//     document.querySelector("#update").disabled=true;
// }

function bindEvents(){
    document.querySelector("#add").addEventListener('click',addQuestion);
    document.querySelector("#delete").addEventListener('click',deleteQuestion);
    // document.querySelector("#save").addEventListener('click',saveQuestion);
    // document.querySelector("#update").addEventListener('click',updateQuestion);
    // document.querySelector("#load").addEventListener('click',loadQuestion);
    // document.querySelector("#load-db").addEventListener('click',loadFromDB);
    // document.querySelector("#save-db").addEventListener('click',saveToDB);
    // document.querySelector("#clear-all").addEventListener('click',clearAll);

}
const fields =["testName","id","name","optionA","optionB","optionC","optionD","rightAns","score"];
function addQuestion(){
    const questionObject={};
    for(let field of fields){
        let value=document.querySelector(`#${field}`).value;
        questionObject[field]=value;
    }
    questionOperations.add(questionObject);
    printQuestion(questionObject);
}
function printQuestion(questionObject){
    const tbody= document.querySelector('#questions');
    const tr = tbody.insertRow();
    for(let key in questionObject){
        if(key === 'testName' || key == 'isMarked'){
            continue;
        }
        const td=tr.insertCell();
        td.innerText = questionObject[key];
    } 
    const tdForOperations = tr.insertCell();
    tdForOperations.appendChild(createIcon('fa-trash-can me-2',toggleDelete, questionObject.id));
    tdForOperations.appendChild(createIcon('fa-pen', edit, questionObject.id));
}
function createIcon(className, callBackFn, questionId) {
    const icon = document.createElement("i");
    icon.className = ` mx-2 hand fa-solid ${className}`;
    icon.addEventListener("click", callBackFn);
    icon.setAttribute("question-id", questionId);
    return icon;
  }
function toggleDelete(){
    const questionId = this.getAttribute('question-id');
    questionOperations.toggleMark(questionId);
    const icon = this;
    const tr = icon.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
}
function edit(){
        const icon = this;
        const id = icon.getAttribute('question-id');
        
        const tr = icon.parentNode.parentNode;
        tr.classList.toggle('alert-success');
}
function deleteQuestion(){
    let question = questionOperations.deleteForever();
    printTable(question);
    console.log("i'm delete");
}
function printTable(question ){
    document.querySelector("#questions").innerHTML="";
    question.forEach(question => printQuestion(question));
}