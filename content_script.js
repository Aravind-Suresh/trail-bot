/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T12:01:10+05:30
*/

var tasks = [];
var events = ['click', 'keypress'];
var eventHandler = function(event) {
  event = $.Event(event);
  tasks.push(event);
};

function recordDOMEvents() {
  events.forEach(function(event, idx) {
    document.addEventListener(event, eventHandler);
  });
};

function stopRecordingDOMEvents() {
  events.forEach(function(event, idx) {
    document.removeEventListener(event, eventHandler);
  });
}

function dispatchTasks() {
  tasks.forEach(function(event, idx) {
    var element = $(event.target);
    console.log("Trigger:", event);
    element.trigger(event);
  });
  tasks = [];
};
