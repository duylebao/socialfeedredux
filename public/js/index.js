/**
 * TODO: Implement
 * 1. Connect to socket.io
 * 2. Listen for new posts event
 * 3. Use jQuery to add new posts to UI by cloning #template element
 */

let $ = require('jquery')
let io = require('socket.io-client')
let socket = io('http://socialauthenticator.com:8000')
let $template = $('#template')

socket.on('connect', ()=>console.log('client connectedxxxxx'))

socket.on('posts', ({posts})=> {
  if (posts && posts.length > 0){
    $('#messages').empty()
  }
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let $li = $template.clone().show()
    $li.children('i').text(post.username+': ')
    $li.children('span').text(post.text)
    $('#messages').append($li)
  }
})
