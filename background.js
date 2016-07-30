/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T12:04:39+05:30
*/



chrome.extension.onMessage.addListener(function(data) {
  console.log('Received:', data);
  if(data.event === 'record') recordDOMEvents();
  else if(data.event === 'stop') stopRecordingDOMEvents();
  else if(data.event === 'play') dispatchTasks();
});
