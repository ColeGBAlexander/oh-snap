const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getData = () => {
  axios.get('https://reques.in/api/users').then(response => {
    console.log(response);
  });
};

const sendData = () => {
  axios.post('https://reques.in/api/register', {
    email: 'eve.holt@reqres.in'
    password: 'pistol'
  }).then(response => {
    console.log(response);
  })
    .catch(err => {
      console.log(err, err,response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);