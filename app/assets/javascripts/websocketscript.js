// $(document).ready(function(){
//
//
//   var conn = new WebSocket('ws://echo.websocket.org/');
//   // The action fired when you're successfully connected to a Websocket
//   conn.onopen = function(e) {
//     console.log("Connection established!");
//   };
//   // This function catches all the incoming messages
//   conn.onmessage = function(e) {
//     console.log('New message: ' + e.data);
//     $('#messages').append('<li>' + e.data + '</li>');
//   };
//   // This one catches all the errors
//   conn.onerror = function(e) {
//     console.log('Error: ' + e.data);
//   };
//   // And finally this function catches the successful disconnection
//   conn.onclose = function(e) {
//     console.log('Disconnected');
//   };
//   // A little event to send the current message
//   $('#fire').click(function() {
//     conn.send($('#send').val());
//     $('#send').val('');
//   });







//alert("Dom ready");
// });



$(function() {
  // Here we instantiate a new WebSocketRails instance
  dispatcher = new WebSocketRails($('#echo').data('uri'), true)
  // We send the message when we push the 'send' button
  document.querySelector('button#fire').onclick = function() {
    send(document.querySelector('#send').value);
    document.querySelector('#send').value = '';
  };
  // We bind the incoming message event
  dispatcher.bind('new_message',
  function(message) {
    document.querySelector('#messages').innerHTML += '<li>' + message + '</li>';
  })
});
// Here we send the message in the websocket
function send(message) {
  dispatcher.trigger('new_message', message);
}
