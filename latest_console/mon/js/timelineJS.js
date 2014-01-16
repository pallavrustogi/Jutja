function myFunction()
		{
			document.getElementById('col1').style.cssText = 'display:inherit !important;';
		}
		
function deleteEntry(i)
{
	var entryname = 'entry' + i;
	document.getElementById(entryname).innerHTML = "";
}

function editEntry(i)
{
	var entryname = 'entry' + i;
	var tasktype = prompt("Enter type of task");
	var taskdetails = prompt("Enter details of the task");
	var tasktime = prompt("Enter deadline for the task");
	var details = document.getElementById(entryname).innerHTML;
	details = "<div class='task'><span><span class='type'>" + tasktype + "<a href='#' onclick=deleteEntry('" + i + "')><img src='images/delete.png' height='10px' width='10px' align='right'></a><a href='#' onclick=editEntry('" + i + "')><img src='images/edit.png' height='10px' width='10px' align='right'></a></span><span class='details'>" + taskdetails + "</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time'>" + tasktime;
	document.getElementById(entryname).innerHTML = details;
}
		
$(document).ready(function() {	
var i=1;
/*$("#iconMin21").hide();
$("#iconMin22").hide();
$("#iconMin11").click(function() {
	$("#col11").css("display","inherit");
	$("#iconMin21").show();
	$("#iconMin11").hide();
	});
$("#iconMin12").click(function() {
	$("#col12").css("display","inherit");
	$("#iconMin22").show();
	$("#iconMin12").hide();
	});
$("#iconMin21").click(function() {
	$("#col11").css("display","none");
	$("#iconMin11").show();
	$("#iconMin21").hide();
	});
$("#iconMin22").click(function() {
	$("#col12").css("display","none");
	$("#iconMin12").show();
	$("#iconMin22").hide();
	*/
	
$("#addEntry").click(function() {
	var tasktype = prompt("Enter type of task");
	var taskdetails = prompt("Enter details of the task");
	var tasktime = prompt("Enter deadline for the task");
	var allEntries = document.getElementById("allProjects").innerHTML;
	if(i%2 != 0)
	{
		allEntries = allEntries + "<div class='timeslot' id='entry" + i + "'><div class='task'><span><span class='type'>" + tasktype + "<a href='#' onclick=deleteEntry('" + i + "')><img src='images/delete.png' height='10px' width='10px' align='right'></a><a href='#' onclick=editEntry('" + i + "')><img src='images/edit.png' height='10px' width='10px' align='right'></a></span><span class='details'>" + taskdetails + "</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time'>" + tasktime + "</div></div>";
		document.getElementById("allProjects").innerHTML = allEntries;
	}
	else
	{	
		allEntries = allEntries + "<div class='timeslot alt' id='entry" + i + "'><div class='task'><span><span class='type'>" + tasktype + "<a href='#' onclick=deleteEntry('" + i + "')><img src='images/delete.png' height='10px' width='10px' align='right'></a><a href='#' onclick=editEntry('" + i + "')><img src='images/edit.png' height='10px' width='10px' align='right'></a></span><span class='details'>" + taskdetails + "</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time'>" + tasktime + "</div></div>";
		document.getElementById("allProjects").innerHTML = allEntries;
	}
	i = i + 1;
	
	/*$("#iconMin11").click(function() {
		$("#col11").css("display","inherit");
		$("#iconMin21").show();
		$("#iconMin11").hide();
	});
	$("#iconMin12").click(function() {
		$("#col12").css("display","inherit");
		$("#iconMin22").show();
		$("#iconMin12").hide();
		});
	$("#iconMin21").click(function() {
		$("#col11").css("display","none");
		$("#iconMin11").show();
		$("#iconMin21").hide();
		});
	$("#iconMin22").click(function() {
		$("#col12").css("display","none");
		$("#iconMin12").show();
		$("#iconMin22").hide();*/
});
});
