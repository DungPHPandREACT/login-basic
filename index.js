// console.log(document.getElementById('login'));
// console.log(document.getElementsByTagName('input'));

// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector('#id tag .class');
// document.querySelectorAll

const listUser = [
  {
    email: 'abcxyz@gmail.com',
    password: '123456',
  },
  {
    email: 'test@gmail.com',
    password: '123456',
  },
  {
    email: 'test1@gmail.com',
    password: '123456',
  },
  {
    email: 'test2@gmail.com',
    password: '123456',
  },
];

document.getElementById('login').onclick = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email.length <10 || email.includes('#')) {
    alert('email chưa đúng định dạng');
    return;
  }
  if (password.length < 6) {
    alert('password chưa hợp lệ');
    return;
  }

  let checkEmail = false;
  for (let user of listUser) {
    if (user.email === email) {
      if (user.password === password) {
        alert('Đăng nhập thành công');
        window.location = './homepage.html';
      } else {
        alert('Password sai');
      }

      checkEmail = true;
    }
  }
  if (checkEmail === false) {
    alert('Email chưa được đăng ký');
  }
};
