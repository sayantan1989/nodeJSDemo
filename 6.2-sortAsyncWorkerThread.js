module.exports = (input, callback) => {
  var startTime = new Date().getTime();
  input.sort();
  var endTime = new Date().getTime();
  var execTime = ( endTime - startTime) / 1000;
  callback(null,execTime,input)
}
