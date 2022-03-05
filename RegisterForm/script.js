
document.querySelector('.reg-logIn').addEventListener("click",()=>
{
    const login= document.querySelector('.login')
    login.classList.toggle('active')
})
document.querySelector('.closeLogin').addEventListener("click",()=>
{
    const login= document.querySelector('.login')
    login.classList.remove('active')
    
})
document.querySelector('.sign_up').addEventListener("click",()=>
{
    const login= document.querySelector('.login')
    login.classList.remove('active')
})