let aaab = fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    })


let asss = fetch('https://this-site-doesnt-exists.intocode')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
})
  .catch (err => console.log(err))


let aaad = fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then((data) => {
    console.log(typeof data)
  })


let aaac = fetch('https://reqres.in/api/users/1')
  .then(res => res.json())
  .then((data) => {
    console.log(data.data.email)
  })

let aaaz = fetch('https://reqres.in/api/users', {
  method: 'POST',
    body: `{ "first_name": "intocode" }`,
    headers: {
    'Content-type' : 'application/json'
    }
})
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })

let aaat = fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify({ "first_name": "intocode" }),
  headers: {
    'Content-type' : 'application/json'
  }
})
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })


 const fetTwoMetod = {
    method: 'POST',
    body: JSON.stringify({ "first_name": "intocode" }),
    headers: {'Content-type': 'application/json'}
  }
fetch ('https://reqres.in/api/users', fetTwoMetod)
.then(res => res.json())
  .then((data) => {
    console.log(data)
  })

let aaam = fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: `{ "into": "code" }`,
  headers: {
    'Content-type' : 'application/json'
  }
})
  .then(res => res.json())
  .then((data) => {
    console.log(data.id)
  })

