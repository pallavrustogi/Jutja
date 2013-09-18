// Function to call template for cleaner code
window.template = function (id) {
	return _.template($('#' + id).html());
};

App.Views.NodeGraph = Backbone.View.extend({
	initialize : function(){
		this.constants = {
			NODE_HEIGHT : 30,
			SVG_HEIGHT : 500,
			SVG_WIDTH : 960
		};
		this.render();
	},
	openNodeContextMenu : function(data, index){
		  	d3.select('#node-context-menu')
		  	.style('position', 'absolute')
		  	.style('left', d3.event.layerX + "px")
		  	.style('top', d3.event.layerY + "px")
		  	.style('display', 'block');
		  	d3.event.preventDefault();
		  },
	update : function () {
		var nodes = this.flatten(this.root),
			vis = this.vis,	
			links = d3.layout.tree().links(nodes),
			that = this;

	  	// Restart the force layout.
	  	this.force.nodes(nodes)
	  	.links(links)
	  	.start()
	  	.linkStrength(3);


	  	// Update the links…
	  	this.link = vis.selectAll("line.link")
	  	.data(links, function(d) { return d.target.id; });

	  	// Enter any new links.
	  	this.link.enter().insert("svg:line", ".node")
	  	.attr("class", "link")
	  	.attr("x1", function(d) { return d.source.x; })
	  	.attr("y1", function(d) { return d.source.y; })
	  	.attr("x2", function(d) { return d.target.x; })
	  	.attr("y2", function(d) { return d.target.y; });

	  	// Exit any old links.
	  	this.link.exit().remove();
	  	// Update the nodes…
	  	this.node = vis.selectAll("g.node")
	  	.data(nodes, function(d) { return d.id; })
	  	.enter()
	  	.append("g")
	  	.attr("class", "node")
	  	.on("dblclick", this.addChild)
	  	.on("click",this.selectNode)
	  	.on("contextmenu",this.openNodeContextMenu);


	  	d3.select("body")
	  	.on("keydown",this.keydown);


	  	this.node.append("svg:rect")
	  	.attr("width", function(d) { return d.size/2 })
	  	.attr("height", that.constants.NODE_HEIGHT)
	  	.attr("x", function(d) { return d.x; })
	  	.attr("y", function(d) { return d.y-that.constants.NODE_HEIGHT/2; })
	  	.style("fill", this.color);

	  	this.rect = vis.selectAll(".node rect");
		
	  	this.node.append("text")
	  	.attr("dx", 0)
	  	.attr("dy", ".35em")
	  	.text(function(d) { return d.name })
	  	.attr("x", function(d) { return d.x; })
	  	.attr("y", function(d) { return d.y; })
	  	.attr("class","title")
	    .attr("text-anchor","middle");
	  	

	  	this.text = vis.selectAll(".node text.title");
		
		that.rect.attr("x", function(d,i) {
				x = Math.min(that.constants.SVG_WIDTH, (that.text[0][i].getBBox().x - 5));
				return x;})
			.attr("width", function(d,i) {
				w = Math.min(that.constants.SVG_WIDTH, (that.text[0][i].getBBox().width + 10));
				return w;})
	  			
		this.node.call(this.force.drag);
	},
	// Returns a list of all nodes under the root.
	flatten : function(root) {
		var nodes = [], i = 0;

		function recurse(node) {
			if (node.children) node.children.forEach(recurse);
			if (!node.id) node.id = ++i;
			nodes.push(node);
		}

		recurse(root);
		return nodes;
	},
	// Color leaf nodes orange, and packages white or blue.
	color : function (d) {
		return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
	},

	// Toggle children on click.
	click : function(d) {

		if (d.children) {
			d._children = d.children;
			d.children = null;
		} else {
			d.children = d._children;
			d._children = null;
		}
		this.update();
	},

	render : function(){
		var node,
		link,
		root,
		rect,
		text,
		force,
		that = this;

		this.node = node;
		
		this.link = link;
		this.root = root;
		this.rect = rect;
		this.text = text;

		function tick() {
			that.link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

			that.rect.attr("y", function(d) {
				d.y = Math.min(that.constants.SVG_HEIGHT, d.y);
				return d.y-that.constants.NODE_HEIGHT/2;
			}); 
			
			that.text.attr("x", function(d) {return d.x; })
			.attr("y", function(d) { return d.y; })
			
			that.rect.attr("x", function(d,i) {
				x = Math.min(that.constants.SVG_WIDTH, (that.text[0][i].getBBox().x - 5));
				return x;})
			.attr("width", function(d,i) {
				w = Math.min(that.constants.SVG_WIDTH, (that.text[0][i].getBBox().width + 10));
				return w;})
		}

		force = d3.layout.force()
		.on("tick", tick)
		.size([this.constants.SVG_WIDTH, this.constants.SVG_HEIGHT]);

		this.force = force;

		force.linkDistance(function(link,index){
			return link.source.size/5+link.target.size/5+50;
		});

		force.charge(function(node,index){
			return -(node.size*5);
		}).friction(0.4)
		.gravity(0.01);

		var vis = d3.select(this.el).append("svg:svg")
		.attr("width", this.constants.SVG_WIDTH)
		.attr("height", this.constants.SVG_HEIGHT);

		this.vis = vis;

		d3.json("readme.json", function(json) {
			that.root = json;
			that.update();
		});

		$('#node-context-menu').mouseleave(function(e){
			$(this).hide();
		});

		this.addChild = function (d){
			if(that.dblclickTimer){
				clearTimeout(that.dblclickTimer);
				that.dblclickTimer = null;
			}
	  		if(!d.children){
	  			d.children = [];
	  		}
	  		d.children.push({
	  			name : "test",
	  			size : d.size * 0.8,
	  			x: d.x,
	  			y: d.y
	  		});
	  		that.update();
	  	}

	  	this.selectNode = function(d){
	  		var svgElement = this;
	  		that.dblclickTimer = setTimeout(function(){
	  			if(that.dblclickTimer === null){
	  				return;
	  			}
	  			var currentRect = d3.select(svgElement).select('rect');
	  			that.rect.style('stroke','')
	  				.style('stroke-width','')
	  				.attr('data-selected',false);
	  			currentRect.style('stroke','red')
	  				.style('stroke-width','2px')
	  				.attr('data-selected',true);  				
	  		},100);
	  	}

	  	this.keydown = function(){
	  		//Enter key event
	  		if(d3.event.keyCode==13){
	  			d3.event.preventDefault();
	  			var rectSelected = d3.selectAll('rect[data-selected=true]'),
	  				data = rectSelected.data();
				if(data){
					that.addChild(data[0]);
				}
	  		}
	  	}

		return this;
	}
});