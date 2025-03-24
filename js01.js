    // display alert good after
    //window.alert("good Afternoon");
    // declare the variable to hold the div element 
     let container = document.getElementById("container");
    // get ElementById is the method to locate the element by the ID
    // container is an HTML element, it is a div in this case
    // set the content of element
  
    container.innerHTML = "<p>This is the container place</p>";
    // change the color style into red
    container.style.color = "red";
    // add the new element p into the page

    document.write("<p>This is new paragraph</p>");

    //declare a variable to hold the header
    let header = document.getElementsByTagName("h1")[0];

    let footer = document.getElementsByTagName("h1")[1];

    // declare a variable to hold button element
   
    let btnClickMe = document.getElementByID ("btnClickMe");// using 1
    //btnClickMe is an HTML element, an object
    // get ElementById is a method of a document object

    let img= document.getElementByID("image");


   btnClickMe.oncancel = function () { //onclick is a property

   // window.alert("hello");
   header.style.color = "red";

   footer.style.color = "blue";

   //container.style.visibility ="hidden";

   img.src = "flower.png";

    //assign text to input element
   //username.innerHTML= container.innerText; //change value of input text
    //assign text to input element
   container.innerText=username.value;
   //containter.innerText="some text"

   }

   //handle the mouse over event the header
   header.onmouseover = function () {
        header.style.color= "red";
   }
    //handle the mouse out event the header
   header.onmouseout = function () {
        header.style.color="black";
   }
    // declare a variable to work on the text input user name
    let username = document.getElementById("username");
    
    username.onchange = function () {
        container.innerHTML = username.value;
    }

    //4 ways to associate a handler to an events
    //1.inline associated
    // button id="btnClickMe" onclick="window.alert('clicked')">Click me </button>
    //2. associate the onclick to an anonymous function
    //btnClickme.onclick = function() { // onclick is an property
    //          window.alert("hello")
    //}
    //3. associate a non-anonymous function to onclick 

    // function handleclick()
    // {
    //     window.alert('clicked');
    // }
    // btnClickMe.onClick= handleClick;

    //4. user the method addEventListener () to associate handler
    // document.addEventListener('click', handleClick);
    // function handleClick ()
    // {
    //     window.alert('clicked');
    // }
    // 5. arrow function
    // btnClickMe.onclick =()=>window.alert('clicked');
    
    //declare global variable
    let x=5;
    const PI = 3.14 ;

    let emptString="";
    let specialString = "I'm fine"
    btnClickMe.onClick= handleClick2;
    function handleClick (x)
    {
        let y = 5; // local variable
       window.alert(x);
    }

    function handleClick2 (x)
    {
       window.alert(x);
    }
    