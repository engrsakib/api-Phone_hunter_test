// data-theme
document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');

// all connect
const sipinarShow = document.getElementById('sipinarShow');

const loadPhone = () =>{
    sipinarShow.classList.add('hidden');
}

const handelSearch = () =>{
    sipinarShow.classList.remove('hidden');

    setTimeout(function(){
        loadPhone();
    }, 3000);
}