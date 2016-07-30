/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T13:05:14+05:30
*/

var isAlreadyInjected = false;
function isInjected() {
  if(!isAlreadyInjected ) {
    isAlreadyInjected=true;
    return false;
  }
  else
    return true;
}
