let list = document.getElementById('list'); 
const addBtn = document.querySelector('.add'); 

addBtn.onclick = () => { 
    const li = document.createElement('li');
    const inputFirst = document.querySelector('.in').value;
    const inputSecond = document.querySelector('.date').value;

    const inputInfo = inputFirst + ' ' + inputSecond;
    li.innerHTML = inputInfo;
    list.appendChild(li);


    // let arr = localStorage.arr ? JSON.parse(localStorage.getItem('arr')) : [];

    // arr.push({
    //     text: inputFirst,
    //     data: inputSecond
    // });

    // localStorage.setItem('arr', JSON.stringify(arr));
    // console.log(arr);



    li.addEventListener('click', () => { 
        li.classList.toggle('checked'); 
    });

    if(!inputFirst || !inputSecond) {
        alert('Введите необходимые данные');
        document.getElementById('list').removeChild(li); 
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.querySelector('.in').value = '';
    document.querySelector('.date').value = '';

    const dellBtn = document.createElement('button');
    dellBtn.innerHTML = 'Dell';
    dellBtn.className = 'trash';
    li.appendChild(dellBtn);    

    dellBtn.addEventListener('click', () => {
        const div = dellBtn.parentNode;
        div.remove();
    }); 
}
 
    
    







