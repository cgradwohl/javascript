var citiesDB = ['sante fe', 'seattle', 'chicago', 'san francisco', 'toyko'];

var city = prompt('Please Enter your city');
city = city.toLowerCase();

for( var i = 0; i<citiesDB.length; i++ ){
  if( city===citiesDB[i] ) alert('your city is a match');
}
