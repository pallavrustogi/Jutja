function myFunction()
		{
			document.getElementById('col1').style.cssText = 'display:inherit !important;';
		}
		
function deleteEntry(i)
{
	var entryname = 'entry' + i;
	document.getElementById(entryname).innerHTML = "";
}

function editEntry(i,a,b,c)
{
	var entryname = 'entry' + i;
	var type='tasktype'+i; var details='taskdetails'+i; var time='tasktime'+i;
	var tasktype = a;
	var taskdetails = b;
	var tasktime = c;
	$('.ui.modal').show();
	document.getElementById("div1").innerHTML = "<i class='close icon'></i><div class='header'>Timeline Details</div><div class='content'><form>Task Name<input type='text' class='tasktype' id='tasktypeP1' value='" + tasktype + "'><span id='error1'></span><br>Task Description<input type='text' class='taskdetails' id='taskdetailsP1' value='" + taskdetails + "'><span id='error2'></span><br>Task Deadline<input type='text' class='tasktime' id='tasktimeP1' value='" + tasktime + "'><span id='error3'></span><br></form></div><div class='actions'><div class='ui button' id='cancel'>Cancel</div><div class='ui button' id='clickedok'>OK</div></div>";
	var flag1=0, flag2=0,flag3=0;
	$("#clickedok").click(function() {
			if(document.getElementById("tasktypeP1").value == "") {
					document.getElementById("error1").innerHTML = "Please enter the task type.";
					flag1++;
			}
			else {
				document.getElementById("error1").innerHTML = "";
				flag1--;
			}
			if(document.getElementById("taskdetailsP1").value == "") {
					document.getElementById("error2").innerHTML = "Please enter the task description.";
					flag2++;
			}
			else {
				document.getElementById("error2").innerHTML = "";
				flag2--;
			}
			if(document.getElementById("tasktimeP1").value == "") {
					document.getElementById("error3").innerHTML = "Please enter the task deadline.";
					flag3++;
			}
			else {
				document.getElementById("error3").innerHTML = "";
				flag3--;
			}
		if(flag1 <= 0 && flag2<=0 && flag3<=0) {
			$('.ui.modal').hide();
			var tasktype = document.getElementById("tasktypeP1").value;
			var taskdetails = document.getElementById("taskdetailsP1").value;
			var tasktime = document.getElementById("tasktimeP1").value;
			var entry = document.getElementById("entry" + i).innerHTML;
			entry = "<div class='task'><span><span class='type' id='tasktype" + i + "'>" + tasktype + "<a href='#' onclick=deleteEntry('" + i + "')><i class='fa fa-minus-square' id='deleteicon'></i></a><a href='#' onclick=editEntry('" + i + "','" + tasktype + "','" + taskdetails + "','" + tasktime + "')><i class='fa fa-pencil-square' id='editicon'></i></a></span><span class='details' id='taskdetails" + i + "'>" + taskdetails + "</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time' id='tasktime" + i + "'>" + tasktime + "</div>";
			document.getElementById("entry" + i).innerHTML = entry;
			document.getElementById("tasktypeP1").value = "";
			document.getElementById("taskdetailsP1").value = "";
			document.getElementById("tasktimeP1").value = "";
			}
		});
		$("#cancel").click(function() {
			$('.ui.modal').hide();
		});
}
		
$(document).ready(function() {	
	var i=1;	
	$("#addEntry").click(function() {
		$('.ui.modal').show();
		document.getElementById("div1").innerHTML = "<i class='close icon'></i><div class='header'>Timeline Details</div><div class='content'><form>Task Name<input type='text' class='tasktype' id='tasktypeP'><span id='error1'></span><br>Task Description<input type='text' class='taskdetails' id='taskdetailsP'><span id='error2'></span><br>Task Deadline<input type='text' class='tasktime' id='tasktimeP'><span id='error3'></span><br></form></div><div class='actions'><div class='ui button' id='cancel'>Cancel</div><div class='ui button' id='clickedok'>OK</div></div>";
		var flag1 = 0, flag2 = 0, flag3 = 0;
		$("#clickedok").click(function() {
			if(document.getElementById("tasktypeP").value == "") {
					document.getElementById("error1").innerHTML = "Please enter the task type.";
					flag1++;
			}
			else {
				document.getElementById("error1").innerHTML = "";
				flag1--;
			}
			if(document.getElementById("taskdetailsP").value == "") {
					document.getElementById("error2").innerHTML = "Please enter the task description.";
					flag2++;
			}
			else {
				document.getElementById("error2").innerHTML = "";
				flag2--;
			}
			if(document.getElementById("tasktimeP").value == "") {
					document.getElementById("error3").innerHTML = "Please enter the task deadline.";
					flag3++;
			}
			else {
				document.getElementById("error3").innerHTML = "";
				flag3--;
			}
		if(flag1 <= 0 && flag2<=0 && flag3<=0) {
			$('.ui.modal').hide();
			var tasktype = document.getElementById("tasktypeP").value;
			var taskdetails = document.getElementById("taskdetailsP").value;
			var tasktime = document.getElementById("tasktimeP").value;
			var allEntries = document.getElementById("allProjects").innerHTML;
			if(i%2 != 0)
			{
				allEntries = allEntries + "<div class='timeslot' id='entry" + i + "'><div class='task'><span><span class='type' id='tasktype" + i + "' value='" + tasktype + "'>" + tasktype + "<a href='#' onclick=deleteEntry('" + i + "')><i class='fa fa-minus-square' id='deleteicon'></i></a><a href='#' onclick=editEntry('" + i + "','" + tasktype + "','" + taskdetails + "','" + tasktime + "')><i class='fa fa-pencil-square' id='editicon'></i></a></span><span class='details' id='taskdetails" + i + "'>" + taskdetails + "</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time' id='tasktime" + i + "'>" + tasktime + "</div></div>";
				document.getElementById("allProjects").innerHTML = allEntries;
			}
			else 
			{	
				allEntries = allEntries + "<div class='timeslot alt' id='entry" + i + "'><div class='task'><span><span class='type' id='tasktype" + i + "'>" + tasktype + "<a href='#' onclick=deleteEntry('" + i + "')><i class='fa fa-minus-square' id='deleteicon'></i></a><a href='#' onclick=editEntry('" + i + "','" + tasktype + "','" + taskdetails + "','" + tasktime + "')><i class='fa fa-pencil-square' id='editicon'></i></a></span><span class='details' id='taskdetails" + i + "'>" + taskdetails + "</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time' id='tasktime" + i + "'>" + tasktime + "</div></div>";
				document.getElementById("allProjects").innerHTML = allEntries;
			}
			i = i + 1;
			document.getElementById("tasktypeP").value = "";
			document.getElementById("taskdetailsP").value = "";
			document.getElementById("tasktimeP").value = "";
			}
		});
		$("#cancel").click(function() {
			$('.ui.modal').hide();
		});
		
	});
});
