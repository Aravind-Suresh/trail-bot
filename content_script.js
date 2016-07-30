/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T13:31:02+05:30
*/

var tasks = [];
var events = ['click', 'keypress'];
var eventHandler = function(evt) {
  var event = $.Event(evt);
  tasks.push(event);
  console.log(tasks);
};

function recordDOMEvents() {
  events.forEach(function(eventName, idx) {
    document.addEventListener(eventName, eventHandler);
  });
};

function stopRecordingDOMEvents() {
  events.forEach(function(eventName, idx) {
    document.removeEventListener(eventName, eventHandler);
  });
};

function generateEvent(event) {
  var t = event.type, e;
  if (t == 'click') {
    e = $.Event(t);
  } else if (t == 'keypress') {
    e = $.Event(t);
    e.keyCode = event.keyCode;
    e.which = event.keyCode;
  }
  e.target = event.target;
  return e;
}

function dispatchTasks() {
  tasks.forEach(function(event, idx) {
    var _element = $(event.target);
    _element.focus();
    var _event = generateEvent(event);
    _element.trigger(_event);
    console.log("Trigger:", _event);
  });
  tasks = [];
};

chrome.runtime.onMessage.addListener(
  function(data, sender, sendResponse) {
    console.log("Received", data.event);
    if(data.event === 'record') recordDOMEvents();
    else if(data.event === 'stop') stopRecordingDOMEvents();
    else if(data.event === 'play') dispatchTasks();
});
