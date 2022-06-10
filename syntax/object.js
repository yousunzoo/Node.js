var members = ['seon', 'k8805', 'hoya'];
console.log(members[1]);
var i = 0;

while(i<members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}

var roles = {
  'programmer':'seon',
  'designer':'k8805',
  'con':'hoya'
}

console.log(roles.programmer);
console.log(roles['programmer']);


for(var name in roles){
  console.log('object ==> ', name, 'value ==> ', roles[name]);
}