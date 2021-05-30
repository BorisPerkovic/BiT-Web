
function changeRemoveClass () {
    var liActive = document.querySelector('.active');
    liActive.removeAttribute('class');
    var ulParent = liActive.parentElement;
    var divParent = ulParent.parentElement;
    var divPreviousSibling = divParent.previousElementSibling;
    var ulChild = divPreviousSibling.children;
    var liChilds = ulChild[0].children[0];
    liChilds.className = "active";
}
changeRemoveClass();
