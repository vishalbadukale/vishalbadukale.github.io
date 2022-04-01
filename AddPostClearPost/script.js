
const input =document.getElementById('input')
const addButton = document.getElementById('add')
const list= document.querySelector('.postCount ul')

addButton.addEventListener('click',(e)=>
{
    if(input.value!='')
    {
        e.preventDefault()

        const myLi= document.createElement('li')
        input.style.borderColor="black"
        myLi.innerHTML=input.value
        list.appendChild(myLi)
        
        const mySpan =document.createElement('span')
        mySpan.className='close'
        mySpan.innerHTML='x'
        myLi.appendChild(mySpan)
    }
    else
    {
        e.preventDefault()
        input.style.borderColor="red"
        input.focus()
    }
    closeList()
})

var closeList= function()
{
    var close = document.querySelectorAll('span')
    for(let i=0;i<close.length;i++)
    {
    close[i].addEventListener("click",function()
    {
        close[i].parentElement.style.opacity="0"
        setTimeout(()=>{
            close[i].parentElement.style.display="none"
        },500)
        close[i].parentElement.remove();
    })
    }   
}   
var clear = document.querySelector('.clear')
clear.addEventListener('click',() =>
{
    var close = document.querySelectorAll('span')
    for(var j=0;j<close.length;j++)
    {
    close[j].addEventListener("click",function()
    {
        close[j].parentElement.remove();

    })
    }   
})

localStorage.setItem('vishal','data');
localStorage.setItem('age',23);

const age =localStorage.getItem('age')

const user =[
    {name:'vishal', age:23},
    {name:'pankaj',age:31}
]

localStorage.setItem('user',JSON.stringify(user))

const data = localStorage.getItem('user')
console.log(JSON.parse(data))


sessionStorage.setItem('Name','Vishal')









