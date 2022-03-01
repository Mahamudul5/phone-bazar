// search button function create 
const searchItem = () => {
    const inputFieldItem = document.getElementById('input');
    showField = inputFieldItem.value;
    // console.log(showField); 
    const url = `https://openapi.programming-hero.com/api/phones?search=${showField}`
    // clear input field 
    inputFieldItem.value = '';
    // call the api 
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))

}
// displayReault function call for show result 
const displayResult = phone => {
    // console.log(phone)
    const displayResultDiv = document.getElementById('displayDiv');
    phone.forEach(show = phone => {
        // console.log(phone) 
        // create div for showing result 
        const phoneDetailsDiv = document.createElement('div');
        // set result dynamic 
        phoneDetailsDiv.innerHTML =
            ` <div class="card">
          <img src="${phone.image}" class="card-img-top p-2 m-auto img-fluid w-25" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
           </div>
           </div>`
        //    append the div into main div 
        displayResultDiv.appendChild(phoneDetailsDiv);
    });
}
