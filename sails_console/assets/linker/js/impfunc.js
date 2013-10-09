//this function toggles the hide and show of any id
var togglehide =  function(idname) {
    var e = document.getElementById(idname);
    if(e.style.display == 'none') e.style.display = 'block' ;
    else e.style.display = 'none' ;
};

//this attaches the hiding of sidebar to toggle icon link 
var n = document.getElementById('main-menu-toggle');
n.setAttribute('href', 'javascript: togglehide(\"sidebar-left\");');