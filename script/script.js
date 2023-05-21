var modal = document.getElementById("myModal");
console.log(modal);

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];

// When the user clicks the button, open the modal
let myBtnFunc = ()=>{
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
console.log(span);
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// "use strict"

// document.addEventListener('DOMContentLoaded', function(){
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e){
//     e.preventDefault();

//     let error = formValidate(form);

//     function formValidate(form){
//       let error = 0;
//       let formReq = document.querySelectorAll('_req');
         
//       for(let index = 0; index < formReq.length; index++){
//         const input = formReq[index];
//         formRemoveError(input);

//         if(input.classList.contains('_email')){
//           if(emailTest(input)){
//             formAddError(input);
//             console.log("Email not found");
//             error++;
//           }
//         }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
//           formAddError(input);
//           error++;
//         }else{
//           if(input.value === ''){
//             formAddError(input);
//             error++;
//           }
//         }
//       }
//       return error;
//     }
//     function formAddError(input){
//       input.parentElement.classList.add('_error');
//       input.classList.add('_error');
//     }
//     function formRemoveError(input){
//       input.parentElement.classList.remove('_error');
//       input.classList.remove('_error');
//     }
//   }
//   // Функція тесту email
//   function emailTest(input) {
//     var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//     return re.test(String(input).toLowerCase());
//   }
// });


document.getElementById("form").addEventListener("submit", async function(event) {
  var nameInput = document.getElementById("recipient-name");
  var emailInput = document.getElementById("email");
  var checkboxInput = document.getElementById("blankCheckbox");
  var isValid = true;

  let formData = new FormData(form);

  if (nameInput.value === "") {
    nameInput.style.boxShadow = "0 0 15px red";
    isValid = false;
  } else {
    nameInput.style.boxShadow = "none";
  }

  if (phoneInput.value === "") {
    phoneInput.style.boxShadow = "0 0 15px red";
    isValid = false;
  } else {
    phoneInput.style.boxShadow = "none";
  }

  if (emailInput.value === "") {
    emailInput.style.boxShadow = "0 0 15px red";
    isValid = false;
  } else {
    emailInput.style.boxShadow = "none";
  }

  if (!checkboxInput.checked) {
    checkboxInput.style.boxShadow = "0 0 15px red";
    isValid = false;
  } else {
    checkboxInput.parentNode.style.boxShadow = "none";
  }
  if (!isValid) {
    event.preventDefault(); // Зупиняємо відправку форми, якщо дані неправильні
    alert("Заповніть обов'язкові поля!")
  }else{
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if(response.ok){
      let result = await response.json();
      alert(response.message);
      formPreview.innerHTML = '';
      form.reset();
    }else{
      alert("Помилка!")
    }
  }
});



const portfolioButtons = document.querySelectorAll('.portfolio-button');

// Додати обробник подій для кожної кнопки
portfolioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonType = button.textContent.toLowerCase();
    
    // При натисканні кнопки, перебираємо всі елементи портфоліо
    const portfolioItems = document.querySelectorAll('.kinds-of-work');
    portfolioItems.forEach((item) => {
      const itemType = item.id;
      
      // Перевіряємо, чи збігається тип елемента з типом кнопки
      if (itemType === buttonType || buttonType === 'усі') {
        // Показуємо відповідний елемент
        item.style.display = 'block';
      } else {
        // Ховаємо всі інші елементи
        item.style.display = 'none';
      }
    });
  });
});



// Отримуємо посилання на всі кнопки і елементи списку робіт
const allButton = document.getElementById('all-button');
const webSitesButton = document.getElementById('web-sites-button');
const applicationsButton = document.getElementById('applications-button');
const designButton = document.getElementById('design-button');
const marketingButton = document.getElementById('marketing-button');

const webSiteElements = document.querySelectorAll('#web-site');
const applicationElements = document.querySelectorAll('#application');
const designElements = document.querySelectorAll('#design');
const marketingElements = document.querySelectorAll('#marketing');

// Додаємо обробник події для кнопок
allButton.addEventListener('click', showAllElements);
webSitesButton.addEventListener('click', showWebSiteElements);
applicationsButton.addEventListener('click', showApplicationElements);
designButton.addEventListener('click', showDesignElements);
marketingButton.addEventListener('click', showMarketingElements);

// Функція для показу всіх елементів
function showAllElements() {
  showElements(webSiteElements);
  showElements(applicationElements);
  showElements(designElements);
  showElements(marketingElements);
}

// Функції для показу відповідних елементів
function showWebSiteElements() {
  hideAllElements();
  showElements(webSiteElements);
}

function showApplicationElements() {
  hideAllElements();
  showElements(applicationElements);
}

function showDesignElements() {
  hideAllElements();
  showElements(designElements);
}

function showMarketingElements() {
  hideAllElements();
  showElements(marketingElements);
}

// Функція для приховування всіх елементів
function hideAllElements() {
  hideElements(webSiteElements);
  hideElements(applicationElements);
  hideElements(designElements);
  hideElements(marketingElements);
}

// Функції для показу та приховування елементів
function showElements(elements) {
  elements.forEach(element => {
    element.style.display = 'block';
  });
}

function hideElements(elements) {
  elements.forEach(element => {
    element.style.display = 'none';
  });
}