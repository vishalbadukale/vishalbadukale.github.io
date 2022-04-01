// on submit form
document.querySelector('#ewallet-form').addEventListener('submit',function(e){
    e.preventDefault()

var type = document.querySelector('.add__type').value
var des = document.querySelector('.add__description').value
var amo = document.querySelector('.add__value').value

if(des.length>0 && amo.length>0)
{
    const time=currentTime()
    createElement(type,des,amo)
    resetForm()
}
})

// creating element and giving values also
// function parameter used for sending data in local storage
function createElement(type,des,amo)
{
    const time=currentTime()
        const newHtml =`
                <div class="item">
                    <div class="item-description-time">
                    <div class="item-description">  
                        <p>${des}</p>  
                    </div>
                    <div class="item-time">
                        <p>${time}</p>
                    </div>
                    </div>
                    <div class="item-amount ${type=='+'?'income-amount':'expense-amount'}">
                    <p>${type}$${amo}</p>
                    </div>
                </div>`;
    
    const collection =document.querySelector(".collection")
    collection.insertAdjacentHTML('afterbegin',newHtml)
    
    sendToLocals(type,des,amo,time)
    incomeArea()
    expenseArea()
    totalAmount()
}

function currentTime()
{
    const date = (new Date().toLocaleDateString('en-us',{
        day:"numeric"}))+ " " +
        (new Date().toLocaleDateString('en-us',{
        month:"short",
        hour:"2-digit",
        minute:"2-digit"}))
        
        return date;
}

function sendToLocals(type,des,amo,time)
{
    let items= localStorage.getItem('items')
        if(items)
        {
            items=JSON.parse(items);
        }
        else
        {
            items=[];
        }

    items.push({type,des,amo,time})
    localStorage.setItem('items',JSON.stringify(items))

}

showLocalData()
function showLocalData()
{
    const item=JSON.parse(localStorage.getItem('items'))
for(let items of item)
    {
    const newHtml =`
            <div class="item">
                <div class="item-description-time">
                <div class="item-description">  
                    <p>${items.des}</p>  
                </div>
                <div class="item-time">
                    <p>${items.time}</p>
                </div>
                </div>
                <div class="item-amount ${items.type=='+'?'income-amount':'expense-amount'}">
                <p>${items.type}$${items.amo}</p>
                </div>
            </div>`;

    const collection =document.querySelector(".collection")
    collection.insertAdjacentHTML('afterbegin',newHtml)
    }
}


incomeArea()
function incomeArea()
{
    
    let income =0
    let item=JSON.parse(localStorage.getItem('items'))

for(let items of item)
    {
        if(items.type==="+")
        {
            income+=parseInt(items.amo)
        }
    }
    document.querySelector('.income__amount p').innerText="$"+income
}


expenseArea()
function expenseArea()
{
    let expense =0
    let item=JSON.parse(localStorage.getItem('items'))

for(let items of item)
    {
        if(items.type==="-")
        {
            expense+=parseInt(items.amo)
        }
    } 
    document.querySelector('.expense__amount p').innerText="$"+expense
}

totalAmount()
function totalAmount()
{
    let total =0
    let item=JSON.parse(localStorage.getItem('items'))

for(let items of item)
    {
        if(items.type==="+")
        {
            total+=parseInt(items.amo)
        }
        else
        {
            total-=parseInt(items.amo)
        }
    }

    document.querySelector('.balance__amount p').innerText=`${total}$`
        if(total>=0)
        document.querySelector('header').className="green"
        else
        document.querySelector('header').className="red"
}

function resetForm()
{
        document.querySelector('.add__type').value ="+"
        document.querySelector('.add__description').value=""
        document.querySelector('.add__value').value=""
}



// var incomeAmount= document.querySelector('.income__amount p').innerText
// var expenseAmount= document.querySelector('.expense__amount p').innerText
    
// if(type==="+")
// {
//     income+=parseInt(amo)
//     incomeAmount=income
    
// }
// else
// {
//     expense+=parseInt(amo)
//     expenseAmount=expense
// }














//  var clickButton = document.querySelector('.add__btn')
//  clickButton.addEventListener('click',(e)=>
//  {
//      // making not reload onclick
//     e.preventDefault()
//     creatElement()
//     selectArea()
    
// // 
        
//  })
// function creatElement()
// {
//     var selectOption =document.querySelector('.add__type')

// // creating element 
//     var collection = document.querySelector('.collection')
            
//     var item = document.createElement('div')
//     item.className="item"
    
//     var itemDescriptionTime = document.createElement('div')
//     itemDescriptionTime.className="item-description-time"
   

//     var itemDescription = document.createElement('div')
//     itemDescription.className="item-description"
//     itemDescriptionTime.append(itemDescription)

//     var description = document.createElement('p')
//     description.innerText=descriptionText.value
//     itemDescription.append(description)

//     var itemTime =document.createElement('div')
//     itemTime.className="item-time"
//     description.append(itemTime)

//     var time = document.createElement('p')
//     time.innerText =currentDate+" "+month+", "+ currentTime
//     itemTime.append(time)
    
//     var itemAmount = document.createElement('div')
//     itemAmount.className='item-amount'
    
//     var amount = document.createElement('p')
//     amount.innerText= '$'+addValue.value
//     itemAmount.append(amount)

//     item.append(itemDescriptionTime,itemAmount)
//     collection.append(item)


// }

// var expenseAmount =document.querySelector('.expense__amount p')
// var incomeAmount =document.querySelector('.income__amount p')
// var addValue =document.querySelector('.add__value')
// let descriptionText =document.querySelector('.add__description')
// let date = new Date()
// var currentTime = date.toLocaleTimeString()
// let currentDate = date.getDate()
// let month =  date.toLocaleString('default', { month: 'long' })
// let income =0
// let expense=0
// var totalAmount =0

// let itemAmount=document.querySelector('.item-amount')
// let expenseAmountPara=document.querySelector('.expense-amount')

// function selectArea()
// {
//     var selectOption =document.querySelector('.add__type')
//     var balanceAmount=document.querySelector('.balance__amount')
//     if(selectOption.value=='+')
//     {
//         income+=parseInt(addValue.value)
//         incomeAmount.innerHTML="+"+"$"+income 
    
//     }
//     else if(selectOption.value=='-')
//     {
//         expense+=parseInt(addValue.value)
//         expenseAmount.innerHTML="-"+"$"+expense
//         document.querySelector('.item-amount').classList.add('expense-amount')
//     }
//     totalAmount=income-expense
//     balanceAmount.innerHTML="$"+totalAmount
// }
