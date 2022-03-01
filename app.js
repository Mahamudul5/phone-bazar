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
    displayResultDiv.innerHTML = '';
    const hTag = document.getElementById('result-massage');
    hTag.innerText = '';
    if (phone.length != 0) {
        // console.log(phone.length); 
        phone.forEach(show = phone => {
            // console.log(phone) 
            // create div for showing result 
            const phoneDetailsDiv = document.createElement('div');
            // set result dynamic 
            phoneDetailsDiv.innerHTML =
                `
                 <div class="card">
          <img src="${phone.image}" class="card-img-top p-2 m-auto img-fluid w-25" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h6> Brand: ${phone.brand}</h6>
            <button onclick="showDetails('${phone.slug}')" class="bg-secondary btn btn-dark" >About Phone</button>
           </div>
           </div>`
            // console.log(phone.slug);
            //    append the div into main div 

            displayResultDiv.appendChild(phoneDetailsDiv);

        });

    }
    else {
        hTag.innerText = 'no result found';
    }

}
// detail result show 
const showDetails = detailsById => {
    const url = ` https://openapi.programming-hero.com/api/phone/${detailsById}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMoreInformation(data.data))
}
const displayMoreInformation = detailsInformation => {
    console.log(detailsInformation);
    const detailsShowDiv = document.getElementById('details-show')
    const detailsInformationShow = document.createElement('div');
    detailsInformationShow.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${detailsInformation.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${detailsInformation.name}</h5>
      <p>releaseDate:${detailsInformation.releaseDate}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
    detailsShowDiv.appendChild(detailsInformationShow);
}