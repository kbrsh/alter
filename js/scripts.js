var canvas = document.getElementById('canv'),
		ctx = canvas.getContext('2d'),
    img = document.getElementById('image');


document.getElementById('input').addEventListener('keyup', function (){
		var text = this.value.split("\n").join("\n");
    var x = 12.5;
		var y = 15;
		var lineheight = 30;
		var lines = text.split('\n');
    var lineLengthOrder = lines.slice(0);
    lineLengthOrder.sort(function(a, b) {
    	return b.length - a.length;
    });
    ctx.canvas.width = ctx.measureText(lineLengthOrder[0]).width + 25;
    ctx.canvas.height = (lines.length * lineheight);

    ctx.fillStyle = "#232323";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.textBaseline = "middle";
    ctx.font="20px Anonymous Pro";
		ctx.fillStyle = "#BBBBBB";
		for (var i = 0; i<lines.length; i++)
    	ctx.fillText(lines[i], x, y + (i*lineheight) );
    img.src = ctx.canvas.toDataURL();
}, false);
