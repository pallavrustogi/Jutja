//this function toggles the hide and show of any id
var togglehide =  function(idname) {
    var e = document.getElementById(idname);
    if(e.style.display == 'none') e.style.display = 'block' ;
    else e.style.display = 'none' ;
};

//this attaches the hiding of sidebar to toggle icon link 
var tsb = document.getElementById('main-menu-toggle');
tsb.setAttribute('href', 'javascript: togglehide(\"sidebar-left\");');

//this function toggles the class name from 'dropdown hidden-xs' to 'dropdown hidden-xs open'
var class_toggle = function(class_name) {
    
   var noti = document.getElementById(class_name);

    var className = ' ' + noti.className + ' ';

    if ( ~className.indexOf(' open ') ) {
        noti.className = className.replace(' open ', ' ');
    } else {
       noti.className += ' open';
    }              

};
//this toggles the notifications
var tn = document.getElementById('notifications_dropdown_link');
tn.setAttribute('href', 'javascript: class_toggle(\'notifications_dropdown\');'); 

//this toggles the tasks list
var tkn = document.getElementById('tasks_link');
tkn.setAttribute('href', 'javascript: class_toggle(\'tasks_top\');'); 

//this toggles the messages
var tmsg = document.getElementById('messages_dropdown');
tmsg.setAttribute('href', 'javascript: class_toggle(\messages_list\');'); 

//thsi toggles the settings
var tsn = document.getElementById('accounts');
tsn.setAttribute('href', 'javascript: class_toggle(\'profile\');'); 
