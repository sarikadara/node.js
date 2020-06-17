const url = require('url');

const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized URL
console.log(myurl.href);
console.log(myurl.toString());
//host (root domain)
console.log(myurl.host);
//hostname(does not get port)
console.log(myurl.hostname);

//post name
console.log(myurl.pathname);
//serialized query
console.log(myurl.search);

// params object
console.log(myurl.searchParams);
//add param
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);
//loop through params
myurl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));