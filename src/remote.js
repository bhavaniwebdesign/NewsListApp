'use strict';

define(function (require, exports, module) {
  let httpRequest = null;
  let remote = module.exports = {
    makeRequest: function(url) {
      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        console.log('Cannot create an XMLHTTP instance');
        return false;
      }

      httpRequest.onreadystatechange = this.responder;
      httpRequest.open('GET', url);
      httpRequest.send();
    },
    responder: function() {
      if ( httpRequest.readyState === XMLHttpRequest.DONE ) {
        if ( httpRequest.status === 200 ) {
          remote.process(httpRequest.response);
        } else {
          console.log('There was a problem with the request.');
        }
      }
    },
    process: function( data ) {
      let json = JSON.parse(data);
      let storiesContainer = document.getElementById('stories');
      for (var index in json.results) {
        let item = json.results[index];
          var element = document.createElement('div');
          element.innerHTML = `<div>${item.standFirst}. Although if you're talking to .</div>`;
          storiesContainer.appendChild(element);
      }
    }
  };
});
