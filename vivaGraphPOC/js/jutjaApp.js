/*global Viva, $*/
function onLoad() {
	var data = {"nodes":[{"group":1,"children":[]},{"group":1,"children":[]},{"group":3,"children":[]}],"links":[{"source":1,"target":0,"value":1},{"source":2,"target":0,"value":1}]};
	var d3Sample = function(){
         var g = Viva.Graph.graph();
        g.Name = "Jutja project graph";

        for (var i = 0; i < data.nodes.length; ++i){
            g.addNode(i, data.nodes[i]);
        }

        for (i = 0; i < data.links.length; ++i){
            var link = data.links[i];
            g.addLink(link.source, link.target, link.value);
        }
        
        return g;
    };

     var colors = [
            "#1f77b4", "#aec7e8",
            "#ff7f0e", "#ffbb78",
            "#2ca02c", "#98df8a",
            "#d62728", "#ff9896",
            "#9467bd", "#c5b0d5",
            "#8c564b", "#c49c94",
            "#e377c2", "#f7b6d2",
            "#7f7f7f", "#c7c7c7",
            "#bcbd22", "#dbdb8d",
            "#17becf", "#9edae5"
            ];

     var example = function() {
        var graph = d3Sample();
        
        var layout = Viva.Graph.Layout.forceDirected(graph, {
            springLength : 35,
            springCoeff : 0.00055,
            dragCoeff : 0.09,
            gravity : -1
        });

        var cssGraphics = Viva.Graph.View.cssGraphics();
        
        cssGraphics.node(function(node){
            var nodeUI = document.createElement('div');
            nodeUI.setAttribute('class', 'node');
            //nodeUI.title = node.data.name;
            var groupId = node.data.group;
            nodeUI.style.background = colors[groupId ? groupId - 1 : 5];
            return nodeUI;
        });

        var svgGraphics = Viva.Graph.View.svgGraphics();
        
        // we use this method to highlight all realted links
        // when user hovers mouse over a node:
        generateNewNodeOnDbClick = function(nodeId) {
        	var group = 1 + Math.floor(Math.random() * 20);
        	newNode = {"group":group,"children":[]};
        	data.nodes.push(newNode);
        	graph.getNode(nodeId).data.children.push(graph.getNodesCount()-1);
        	graph.addNode(graph.getNodesCount(), data.nodes[graph.getNodesCount()-1]);
        	graph.addLink(nodeId, graph.getNodesCount()-1, 1);
           
        };

        svgGraphics.node(function(node){
        	nodeSize = 18;
            var groupId = node.data.group;
            var rectangle = Viva.Graph.svg('rect')
                .attr("width", nodeSize)
                .attr("height", nodeSize)
                .attr("fill", colors[groupId ? groupId - 1 : 5]);
            
            $(rectangle).click(function() { 
            	generateNewNodeOnDbClick(node.id);
            });

            return rectangle;

        }).placeNode(function(nodeUI, pos){
        	nodeUI.attr('x', pos.x - nodeSize / 2).attr('y', pos.y - nodeSize / 2);
        });
        
        

        svgGraphics.link(function(link){
            return Viva.Graph.svg('line')
                    .attr('stroke', '#999')
                    .attr('stroke-width', Math.sqrt(link.data));
        });

        var renderer = Viva.Graph.View.renderer(graph, {
            container : document.getElementById('graph1'),
            layout : layout,
            graphics : svgGraphics,
            prerender: 20,
            renderLinks : true
        });

        renderer.run(500);
    }();
}