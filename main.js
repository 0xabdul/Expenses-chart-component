let mondayhover = document.getElementById('mon-btn');
let tuesdayhover = document.getElementById('tue-btn');
let wednesdayhover = document.getElementById('wed-btn');
let thursdayhover = document.getElementById('thu-btn');
let fridayhover = document.getElementById('fri-btn');
let saturdayhover = document.getElementById('sat-btn');
let sundayhover = document.getElementById('sun-btn');
let dataone = document.getElementById('blackone');
let datatwo = document.getElementById('blacktwo');
let datathree = document.getElementById('blackthree');
let datafour = document.getElementById('blackfour');
let datafive = document.getElementById('blackfive');
let datasix = document.getElementById('blacksix');
let dataseven = document.getElementById('blackseven');
let align = document.getElementById('align-one');
/* mouse enter components */
mondayhover.addEventListener('mouseenter',()=>{
mondayhover.style.opacity = '0.7';
dataone.style.display = 'block';
datatwo.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'none';
dataseven.style.display = 'none';
})
tuesdayhover.addEventListener('mouseenter',()=>{
tuesdayhover.style.opacity = '0.7';
dataone.style.display = 'none';
datatwo.style.display = 'block';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'none';
dataseven.style.display = 'none';
})
wednesdayhover.addEventListener('mouseenter',()=>{
wednesdayhover.style.opacity = '0.7';
dataone.style.display = 'none';
datatwo.style.display = 'none';
datathree.style.display = 'block';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'none';
dataseven.style.display = 'none';
})
thursdayhover.addEventListener('mouseenter',()=>{
thursdayhover.style.opacity = '0.7';
dataone.style.display = 'none';
datatwo.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'block';
datafive.style.display = 'none';
datasix.style.display = 'none';
dataseven.style.display = 'none';
})
fridayhover.addEventListener('mouseenter',()=>{
fridayhover.style.opacity = '0.7';
dataone.style.display = 'none';
datatwo.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'block';
datasix.style.display = 'none';
dataseven.style.display = 'none';
})
saturdayhover.addEventListener('mouseenter',()=>{
saturdayhover.style.opacity = '0.7';
dataone.style.display = 'none';
datatwo.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'block';
dataseven.style.display = 'none';
})
sundayhover.addEventListener('mouseenter',()=>{
sundayhover.style.opacity = '0.7';
dataone.style.display = 'none';
datatwo.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'none';
dataseven.style.display = 'block';
})

/* mouse leave components */
mondayhover.addEventListener('mouseleave',()=>{
mondayhover.style.opacity = '1';
dataone.style.display = 'none';
})
tuesdayhover.addEventListener('mouseleave',()=>{
tuesdayhover.style.opacity = '1';
datatwo.style.display = 'none';
dataone.style.display = 'none';
})
wednesdayhover.addEventListener('mouseleave',()=>{
wednesdayhover.style.opacity = '1';
datatwo.style.display = 'none';
dataone.style.display = 'none';
datathree.style.display = 'none';
})
thursdayhover.addEventListener('mouseleave',()=>{
thursdayhover.style.opacity = '1';
datatwo.style.display = 'none';
dataone.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
})
fridayhover.addEventListener('mouseleave',()=>{
fridayhover.style.opacity = '1';
datatwo.style.display = 'none';
dataone.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
})
saturdayhover.addEventListener('mouseleave',()=>{
saturdayhover.style.opacity = '1';
datatwo.style.display = 'none';
dataone.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'none';
})
sundayhover.addEventListener('mouseleave',()=>{
sundayhover.style.opacity = '1';
datatwo.style.display = 'none';
dataone.style.display = 'none';
datathree.style.display = 'none';
datafour.style.display = 'none';
datafive.style.display = 'none';
datasix.style.display = 'none';
dataseven.style.display = 'none';
})

/* days color change*/
switch(new Date().getDay()){
    case 0:
        sundayhover.style.backgroundColor = '#76B5BC';
        break;
    
    case 1:
        mondayhover.style.backgroundColor = '#76B5BC';
        break;
    
    case 2:
        tuesdayhover.style.backgroundColor = '#76B5BC';
        break;
    
    case 3:
        wednesdayhover.style.backgroundColor = '#76B5BC';
        break;
    
    case 4:
        thursdayhover.style.backgroundColor = '#76B5BC';
        break;
    
    case 5:
        fridayhover.style.backgroundColor = '#76B5BC';
        break;
    
    case 6:
        saturdayhover.style.backgroundColor = '#76B5BC';
        break;
}

/* get data.json */
let url = 'data.json';
fetch(url)
.then(response => response.json())
.then(data=>{
    dataone.innerHTML = `$${data[0].amount}`;
    datatwo.innerHTML = `$${data[1].amount}`;
    datathree.innerHTML = `$${data[2].amount}`;
    datafour.innerHTML = `$${data[3].amount}`;
    datafive.innerHTML = `$${data[4].amount}`;
    datasix.innerHTML = `$${data[5].amount}`;
    dataseven.innerHTML = `$${data[6].amount}`;
})
