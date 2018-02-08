var exports = module.exports = {};

var smsArray = [
  {id: 1, modtager: '22222222', afsender: 'Havnen', text: 'Hej1'},
  {id: 2, modtager: '22223322', afsender: 'Den anden havn', text: 'Hej2'},  
];


exports.remove = function(id) {
  if(id) {
     smsArray = smsArray.filter(obj => 
         id !== obj.id);
  }
}

exports.addManySms = function() {
  for(var i = 1; i<100; i++){
    smsArray.push({
      id: i,
      modtager:'m' + i, 
      afsender:'a' + i, 
      text: 'hej' + i})
  }
  return ;
};

exports.getSmsStored = function() {
  return smsArray;
};

exports.add = function(modt, afs, text) {
  smsArray.push({
      modtager:modt, 
      afsender:afs, 
      text: text});
}