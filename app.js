
const searchItem = () => {
    const inputFieldItem = document.getElementById('input');
    showField = inputFieldItem.value;
    // console.log(showField); 
    const url = `https://openapi.programming-hero.com/api/phones?search=${showField}`
    inputFieldItem.value = '';

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))

}

const displayResult = phone => {
    // console.log(phone)

    const displayResultDiv = document.getElementById('displayDiv');
    phone.forEach(show = phone => {
        console.log(phone)

        const phoneDetailsDiv = document.createElement('div');

        phoneDetailsDiv.innerHTML =
            ` <div class="card">
          <img src="${phone.image}" class="card-img-top img-fluid w-25" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
           </div>
           </div>`

        //   `  <div class="container d-flex flex-row">
        //     <div class="">
        //     <div class=" " style="width: 18rem;">
        //     <img class="card-img-top" src="..." alt="Card image cap">
        //     <div class="card-body">
        //       <h5 class="card-title">${phone.phone_name}</h5>
        //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        //   </div>
        //   </div>
        //  </div>`

        displayResultDiv.appendChild(phoneDetailsDiv);
    });
}
