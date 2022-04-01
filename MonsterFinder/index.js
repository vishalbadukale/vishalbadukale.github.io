

for(let monsterDiv of monsters)  // checking data import  and access values 
{
    monsterElement(monsterDiv);   // making argument to access value in display area
}



// creating element for monster display
function monsterElement(monsterDiv)
{
    const monster = document.createElement('div')
    monster.className='monster'

    const img = document.createElement('img')
    img.src =`https://robohash.org/${monsterDiv.id}?set=set2` // ${monsterDiv.id} access a id but not taking value because it is a string 
    // so its has a coalition so make it headga (` `) this
    img.alt ='Kazi Ariyan'

    const mname= document.createElement('p')
    mname.className='name'
    mname.innerText=monsterDiv.name

    const email = document.createElement('p')
    email.className='email'
    email.innerText=monsterDiv.email

    monster.append(img,mname,email)

    document.querySelector('.monsters').append(monster)
    
}
notfound()
function notfound()
{
    const notFound = document.createElement('div')
    notFound.className='p-5 not-found'
    notFound.style.display='none'

    const span = document.createElement('span')
    span.innerText='404'

    const h1 = document.createElement('h1')
    h1.innerText ='🧟‍♂️ No Monster Found 🧟‍♂️'

    notFound.append(span,h1)

    document.querySelector('.monsters').append(notFound)
    
}



// monster input value base searching
document.querySelector('#search-monster').addEventListener('keyup',(e)=>{

    const inputValue = e.target.value.toLowerCase()
    const monsterFinder = document.querySelectorAll('.monster') // monster is in a div so get all div by this

    for(let monster of monsterFinder)   // getting each div 
    {
        const name = monster.children[1].innerText.toLowerCase() // by children get whats inside also and
        const email = monster.children[2].innerText.toLowerCase()
        let notFound = true // creating a value and making true default also access for display
        
        if(name.includes(inputValue) || email.includes(inputValue))
        {
            monster.style.display='block'
            notFound=false
        }
        else
        {
            monster.style.display='none'
        }
    }
    if(notfound)
    {
        document.querySelector('.not-found').style.display='none'
    }
    else
    {
        document.querySelector('.not-found').style.display='block'
    }
})