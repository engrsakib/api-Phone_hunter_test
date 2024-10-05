// data-theme
document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');

// all connect
const sipinarShow = document.getElementById('sipinarShow');

const loadPhone = async () =>{
    sipinarShow.classList.add('hidden');

    const response = await fetch(" https://openapi.programming-hero.com/api/phones?search=iphone");
    const data = await response.json(); 
    displayAll(data.data)

}

const displayAll = (phones) =>{
    console.log(phones);
}

const handelSearch = () =>{
    sipinarShow.classList.remove('hidden');

    setTimeout(function(){
        loadPhone();
    }, 3000);
}