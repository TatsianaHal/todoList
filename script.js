const addBtn = document.querySelector('.add');

let list = document.getElementById('list');
let li = document.createElement('li');

let todos = []; 

let getTodos = () => {
    if(localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}

let push = () => {
    let li = document.createElement('li');
    let inputFirst = document.querySelector('.in').value;
    let inputSecond = document.querySelector('.date').value;
    let inputInfo = inputFirst + ' ' + inputSecond;
    let textN = document.createTextNode(inputInfo);

    const dellBtn = document.createElement('span');
    const dellTxt = document.createTextNode(' X');

    dellBtn.className = 'trash';

    li.appendChild(textN);
    dellBtn.appendChild(dellTxt);
    li.appendChild(dellBtn);
    list.appendChild(li);
    


    li.addEventListener('click', () => { 
        li.classList.toggle('checked'); 
    });

    dellBtn.addEventListener('click', () => {
        const div = dellBtn.parentNode;
        div.remove();
    });



    if(!inputFirst || !inputSecond) {
        alert('Введите необходимые данные');
        list.removeChild(li); 
    } else {
        list.appendChild(li);
    }



    document.querySelector('.in').value = '';
    document.querySelector('.date').value = '';


    let todo = {};
    todo.text = inputInfo;
    todo.btn = dellBtn;
    let i = todos.length;
    todos[i] = todo;
    console.log(todos);

    localStorage.setItem('todos', JSON.stringify(todos));   
    
    console.log(localStorage);
}




















// const inputFirst = document.querySelector('.in');
// const inputSecond = document.querySelector('.date');
// const addBtn = document.querySelector('.add');
// let list = document.getElementById('list');

// let li = document.createElement('li');

// // let todos = []; 

// // let getTodos = () => {
// //     if(localStorage.getItem('todos')) {
// //         todos = JSON.parse(localStorage.getItem('todos'));
// //     }
// // }

// let push = () => {
//     //let li = document.createElement('li');
//     const text = inputFirst.value;
//     const date = inputSecond.value;

//     console.log(text);
//     console.log(date);
//     // let inputInfo = inputFirst + ' ' + inputSecond;
//     // let textN = document.createTextNode(inputInfo);

//     if(inputFirst && inputSecond) {
//         localStorage.setItem(inputFirstVal, inputSecondVal);
//         location.reload();
//     // } else {
//     //     list.appendChild(li);
//     }

//     for(let i = 0; i < localStorage.length; i++) {
//         const inputFirstVal = localStorage.key(i);
//         const inputSecondVal = localStorage.getItem(inputFirstVal);

//         li.innerHTML += 

//     }

//     const dellBtn = document.createElement('span');
//     const dellTxt = document.createTextNode(' X');

//     dellBtn.className = 'trash';

//     li.appendChild(textN);
//     dellBtn.appendChild(dellTxt);
//     li.appendChild(dellBtn);
//     list.appendChild(li);
    


//     li.addEventListener('click', () => { 
//         li.classList.toggle('checked'); 
//     });

//     dellBtn.addEventListener('click', () => {
//         const div = dellBtn.parentNode;
//         div.remove();
//     });

//     document.querySelector('.in').value = '';
//     document.querySelector('.date').value = '';


//     let todo = {};
//     todo.text = inputInfo;
//     todo.btn = dellBtn;
//     let i = todos.length;
//     todos[i] = todo;
//     console.log(todos);

//     localStorage.setItem('todos', JSON.stringify(todos));   
    
//     console.log(localStorage);
// };





























