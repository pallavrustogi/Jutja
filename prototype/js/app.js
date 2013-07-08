(function () {

	function ColorLuminance(hex, lum) {
		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
		return rgb;
	}

	var Node = function(data) {
		this.initialize(data);
	}
		var p = Node.prototype = new createjs.Container(); // inherit from Container

		p.label;
		p.background;
		p.count = 0;

		p.Container_initialize = p.initialize;
		p.initialize = function(data) {
			this.Container_initialize();
			this.label = data.label;

			if (!data.color){ 
				this.color = "#CCC"; 
			}else{
				this.color = data.color;
			}

			
			var nodeLabel = new createjs.Text(this.label, "14px Arial", "#000");
			nodeLabel.textBaseline = "top";
			nodeLabel.textAlign = "left";

			var nodeDescription = new createjs.Text(data.description, "11px Arial", "#000");
			nodeDescription.textBaseline = "top";
			nodeDescription.textAlign = "left";
			nodeDescription.x = 10;
			nodeDescription.y = 25;

			var plusMinus = new createjs.Text('+', "18px Arial", "#000");
			plusMinus.textBaseline = "center";

			
			// var width = nodeLabel.getMeasuredWidth()+40;
			// var height = nodeLabel.getMeasuredHeight()+20;

			this.width = 150;
			this.height = 40;

			//debugger;
			plusMinus.x = this.width-20;
			plusMinus.y = 20;

			
			this.background = new createjs.Shape();
			this.background.graphics.beginFill(this.color).drawRect(0,0,this.width,this.height,10);
			
			nodeLabel.x = 10;
			nodeLabel.y = 10;
			
			this.addChild(this.background,nodeLabel,plusMinus);
			this.addChild(nodeDescription);

			plusMinus.addEventListener('click',function(e){
				if(e.target.text==='+')
					e.target.text = '-';
				else
					e.target.text = '+';
				e.target.getStage().update();
			});
			//this.addEventListener("click", this.handleClick);  
			//this.addEventListener("tick", this.handleTick);

			var childX = -200, 
			childY = 80;

			for(childIndex in data.children){

				data.children[childIndex].color = ColorLuminance(this.color,0.8);
				
				var childNode = new Node(data.children[childIndex]);
				childNode.x = childX;
				childNode.y = childY;
				childX += childNode.width+20;
				this.addChild(childNode);
			}
		}


		p.handleClick = function (event) {    
			var target = event.target;
			alert("You clicked on a Node: "+target.label);
		} 



		window.Node = Node;
	}());


	var stage, holder;
	function init() {
		window.stage = new createjs.Stage("demoCanvas");
		var data = {
			label: "Product",
			color: "#62E200",
			description: "This is the description",
			children: [{
				label: "task1",
				description: "This is the description 1"
			},{
				label: "task2",
				description: "This is the description 2"
			}]
		}
		window.node1 = stage.addChild(new Node(data));
		node1.x = (stage.canvas.width/2)-(node1.width/2);
		node1.y = 20;
		stage.update();
	}