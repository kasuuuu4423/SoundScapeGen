import AudioPlayer from "./audioPlayer.js";
import ManagePlayer from "./managePlayer.js";
import AudioList from "./audioList.js";

let manage = new ManagePlayer();

window.onload = function() {

}


// var lis = document.querySelectorAll('main li');
// var draggingItem;
// [].forEach.call(lis, function(li){
//     li.setAttribute('draggable', true);
//     li.addEventListener('touchstart', function(e){
//         draggingItem = li;
//     });
//     li.addEventListener('touchend', function(e){
//         draggingItem = null;
//     });
//     li.addEventListener('touchmove', function(e){
//         e.preventDefault();
//         var getOrder = function(elem){
//             return [].indexOf.call(elem.parentNode.children, elem);
//         }
//         var ec = e.changedTouches[0];
//         var pointedElement = document.elementFromPoint(ec.pageX - window.pageXOffset, ec.pageY - window.pageYOffset);
//         if(!pointedElement.getAttribute('draggable') || pointedElement == draggingItem) return;
//         var order = getOrder(pointedElement) - getOrder(draggingItem);
//         if(order > 0) {
//             pointedElement.parentNode.insertBefore(pointedElement, draggingItem);
//         } else if (order < 0) {
//             pointedElement.parentNode.insertBefore(draggingItem, pointedElement);
//         }
//     });
// });