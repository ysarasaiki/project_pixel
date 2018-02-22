// Select color input

// Select size input


// When size is submitted by the user, call makeGrid()
$("#gridSizeForm").submit(function(evt) {
	evt.preventDefault();
	makeGrid();
});

function makeGrid() {
	var height = $("#gridHeight").val();
	var width = $("#gridWidth").val();
	for (i = 0; i < height; i++) {
		let cols = "<td></td>".repeat(parseInt(width));
		$("#pixelCanvas").append("<tr>"+cols+"</tr>");
	} 
}

$("#pixelCanvas").on("click","td",function(){
	// alert("hi!");
	var color = $("#colorPicker").val();
	$(this).css("background-color",color);
})