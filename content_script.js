/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T12:44:54+05:30
*/

var tasks = [];
var events = ['click', 'keypress'];
var eventHandler = function(event) {
  event = $.Event(event);
  tasks.push(event);
  console.log(tasks);
  console.log('new event');
};

function recordDOMEvents() {
  events.forEach(function(eventName, idx) {
    document.addEventListener(eventName, eventHandler);
  });
};

function stopRecordingDOMEvents() {
  console.log(tasks);
  events.forEach(function(eventName, idx) {
    document.removeEventListener(eventName, eventHandler);
  });
};

function dispatchTasks() {
  console.log(tasks);
  tasks.forEach(function(event, idx) {
    var element = $(event.target);
    console.log("Trigger:", event);
    element.trigger(event);
  });
};

chrome.runtime.onMessage.addListener(
  function(data, sender, sendResponse) {
    console.log("Received", data.event);
    if(data.event === 'record') recordDOMEvents();
    else if(data.event === 'stop') stopRecordingDOMEvents();
    else if(data.event === 'play') dispatchTasks();
});
