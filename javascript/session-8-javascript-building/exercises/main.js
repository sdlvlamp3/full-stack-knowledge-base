// 1) Use JavaScript to select the element with an ID of "myDiv" and change its background color to "lightblue". Select all the paragraph (<p>) elements on the page and log their inner text.

function changebg() {
  document.getElementById('myDiv').style.backgroundColor = '#72D8FE';
};
changebg();

function para() {
 const text = document.getElementsByTagName('p');
 console.log(text);
}

para();