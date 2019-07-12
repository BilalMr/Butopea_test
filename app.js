// Posting the Email to backend point
// Console logging the email

document.getElementById('post-data').addEventListener('submit', addPost)
function addPost(e){
    e.preventDefault();

    
    let email = document.querySelector('.form-control').value;

    if(email){
        fetch('https://jsonplaceholder.typicode.com/users', {
            method:'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-type':'application/json'
            },
            body:JSON.stringify({email:email})
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          alert("Thank you for Subscribing!");
          document.querySelector('.form-control').value=''
    }

   else{ alert('Please Enter an Email')}
  }


//   Changing the background image every 3 secondes
  const images = ['./img/image001.jpg', './img/image002.jpg', './img/image003.jpg', './img/image004.jpg', './img/image005.jpg', './img/image006.jpg', './img/image007.jpg', './img/image008.jpg']
  const main = document.querySelector('.main')
  let i = 0;
 

  setInterval(function() {
      main.style.backgroundImage = `url(${images[i]})`
      i = i + 1;
      if (i == images.length) {
          i =  0;
      }
  }, 5000);
