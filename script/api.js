// data-theme
document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");

// all connect
const sipinarShow = document.getElementById("sipinarShow");

const loadPhone = async (barnadName) => {
  sipinarShow.classList.add("hidden");

  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      barnadName ? barnadName : "iphone"
    }`
  );
  const data = await response.json();
  displayAll(data.data);
};

const displayAll = (phones) => {
  const phoneConatiner = document.getElementById("phone_conatiner");
  phones.forEach((phone) => {
    // console.log(phone);
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="card m-3 card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;
    phoneConatiner.appendChild(div);
  });
};

const handelSearch = () => {
  sipinarShow.classList.remove("hidden");
  const searchText = document.getElementById("search-text").value;

  setTimeout(function () {
    loadPhone(searchText);
  }, 3000);
};
