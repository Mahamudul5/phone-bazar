
const searchItem = () => {
    const inputFieldItem = document.getElementById('input');
    showField = inputFieldItem.value;
    // console.log(showField); 
    const url = `https://openapi.programming-hero.com/api/phones?search=${showField}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))
}
const displayResult = phone => {
    // console.log(phone)

    const displayResultDiv = document.getElementById('displayDiv');
    phone.forEach(show = phone => {
        console.log(phone.phone_name)
        const phoneDetailsDiv = document.createElement('div');
        phoneDetailsDiv.innerHTML = `<h3>${phone.phone_name}</h3>`
        displayResultDiv.appendChild(phoneDetailsDiv);

    });

}