//Часть 1. Метод GET
//Задача 1.1.
fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    })

//Задача 1.2
fetch ('https://this-site-doesnt-exists.intocode')
.then(res => res.json())
.then((data) => {

})
.catch (err => console.log(err))

//Задача 1.3
fetch('https://reqres.in/api/users')
.then(res => res.json())
.then((data) => {
  console.log(typeof data)
})

//Задача 1.4
fetch('https://reqres.in/api/users')
.then(res => res.json())
.then((data) => {
  console.log(data.data.length)
})

//Задача 1.5
fetch('https://reqres.in/api/users/1')
.then(res => res.json())
.then((data) => {
  console.log(data.data.email)
})

//Часть 2. Методы POST, PATCH, DELETE
//Задача 2.1

fetch('https://reqres.in/api/users', {
  method: "POST",
    body: '{ "first_name": "intocode" }',
    headers: {
    'Content-type': 'application/json'
  }
})
.then(res => res.json())
.then((data) => {
  console.log(data)
})

//Задача 2.2
fetch('https://reqres.in/api/users', {
  method: "POST",
  body: JSON.stringify({ "first_name": "intocode" }),
  headers: {
    'Content-type': 'application/json'
  }
})
.then(res => res.json())
.then((data) => {
  console.log(data)
})

//Задача 2.3
const masha = {
  method: "POST",
  body: JSON.stringify({ "first_name": "intocode" }),
  headers: {
    'Content-type': 'application/json'
  }
};
fetch('https://reqres.in/api/users', masha)
.then(res => res.json())
.then((data) => {
  console.log(data)
})

//Задача 2.4
const mashala = {
  method: "PATCH",
  body: JSON.stringify({ "first_name": "into", "id": "999", "last_name": "code"}),
  headers: {
    'Content-type': 'application/json'
  }
};
fetch('https://reqres.in/api/users', mashala)
.then(res => res.json())
.then((data) => {
  console.log(data.id)
  console.log(data.updatedAt)
})

//Задача 2.5
fetch('https://reqres.in/api/users/5', { method: "DELETE" })
.then(res => {
  if (res.status = 204) {
    console.log("пользователь с id 5 успешно удален")
  }
})


//Задача 2.6
const misha = {
  method: "PATCH",
  body: JSON.stringify({ "first_name": "intocode"}),
  headers: {
    'Content-type': 'application/json'
  }
};
fetch('https://reqres.in/api/users/3', misha)
.then(res => res.json())
.then((data) => {
  console.log(data.first_name)
})


