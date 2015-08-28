module.exports = {
  repeat: function(str) {
    return str + str;
  }
};


//another way to make a module
//please go to http://www.sitepoint.com/understanding-module-exports-exports-node-js/ and read about the difference

//exports.repeat = function(str, n) {
//  return Array(n).join(str);
//};
