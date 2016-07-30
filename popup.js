/**
* @Author: aravind
* @Date:   2016-07-29T22:44:05+05:30
* @Last modified by:   aravind
* @Last modified time: 2016-07-30T12:04:29+05:30
*/



function injectTheScript() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        // and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, { file: "jquery.js" }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
        });
    });
}

injectTheScript();

function record() {
  chrome.tabs.sendMessage({ 'event': 'record' });
}

function stop() {
  chrome.tabs.sendMessage({ 'event': 'stop' });
}

function play() {
  chrome.tabs.sendMessage({ 'event': 'play' });
}
