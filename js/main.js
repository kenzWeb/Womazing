let btnCont = document.querySelector('.contact-btn');
let successfully = document.querySelector('.message-send');

btnCont.addEventListener('click',()=> {
    successfully.classList.add('successfully')
    successfully.classList.remove('none')
})


// let UserName = prompt('Введите ваше имя:', '')

// if (UserName =='Админ') {
//     let pass = prompt('Введите пароль:', '')
//     if (pass == 'Я главный') {
//         alert('Здравствуйте')
//     } else if (pass = null || pass == '') {
//         alert('Отмена')
//     } else {
//         alert('Пароль не верный!')
//     }
// } else if (UserName == null || UserName == '') {
//     alert('Отмена')
// } else {
//     alert('Я вас не знаю')
// }