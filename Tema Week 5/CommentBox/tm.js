window.addEventListener("load", function() {
    var addButtonElement=document.querySelector("#addButton");
    var commentContainer = document.querySelector(".CommentSection");
    var addCommentElement = document.querySelector("#addComment");
    addButtonElement.addEventListener("click", function() {
    var commentElement = createCommentElement(addCommentElement.value);
    commentContainer.appendChild(commentElement);
    })
});
 function deleteCommentElement(event){
 event.target.parentElement.parentElement.removeChild(event.target.parentElement);
 }
 function createCommentElement(textareaValue) {
    var div =document.createElement("div")
    div.classList.add("comment");
    div.innerHTML = "" + textareaValue + " <button onclick=deleteCommentElement(event)>Delete</button>";
    return div;
}

