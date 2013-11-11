function myFunction()
		{
			document.getElementById('col1').style.cssText = 'display:inherit !important;';
		}
		
$(document).ready(function() {	
var i=10;
$("#iconMin21").hide();
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
	});
	
$("#addEntry").click(function() {
	var allEntries = document.getElementById("allProjects").innerHTML;
	if(i%2 != 0)
	{
		allEntries = allEntries + "<div class='timeslot'><div class='task'><span><span class='type'>Digital Ocean </span><span class='details'>Finish article on geddy</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time'>3:43 PM</div></div>";
		document.getElementById("allProjects").innerHTML = allEntries;
	}
	else
	{	
		allEntries = allEntries + "<div class='timeslot alt'><div class='task'><span><span class='type'>Digital Ocean </span><span class='details'>Finish article on geddy</span><span>remaining time<span class='remaining'>3h 38m 15s</span></span></span><div class='arrow'></div></div><div><input type='button' class='icon1' id='iconMin3' onclick=''/></div><div class='time'>3:43 PM</div></div>";
		document.getElementById("allProjects").innerHTML = allEntries;
	}
	i = i + 1;
	
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
		});
});
});
