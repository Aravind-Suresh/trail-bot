/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T13:09:20+05:30
*/



function injectTheScript() {
  var bgpage=chrome.extension.getBackgroundPage();
  if(!bgpage.isInjected()) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { file: "jquery.js" }, function() {
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
      });
    });
  };
};

injectTheScript();

function sendMessageToCurrentTab(data) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
};

function record() {
  sendMessageToCurrentTab({ 'event': 'record' });
}

function stop() {
  sendMessageToCurrentTab({ 'event': 'stop' });
}

function play() {
  sendMessageToCurrentTab({ 'event': 'play' });
}

window.addEventListener('DOMContentLoaded', function() {
 document.getElementById('record').onclick = record;
 document.getElementById('stop').onclick = stop;
 document.getElementById('play').onclick = play;
}, false);
