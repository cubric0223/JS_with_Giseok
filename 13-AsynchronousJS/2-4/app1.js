// 🌟 13.2.4 More on Promises and Errors

// 😀 .catch() := .then() with null as the first argument and an error-handling callback as the second argument

p = fetch("http://xxx:3000/web"); // It'll throw an error

// lines 4 and 5 are exactly the same
p.then(null, cb);
p.catch(cb);

function cb(response) {
  console.log("🔥");
  console.error(response);
}
