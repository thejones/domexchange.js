define([
    "dojo/dom", "dojo/query", "dojo/dom-construct", "dojo/NodeList"
], function (dom, query, domConstruct, nodeList) {
    return {
        exchange:function () {
            var nodes = query("body > *");
            nodes.forEach(function (node, index, nodeList) {                
                var idx = Math.floor(Math.random() * nodes.length)
                domConstruct.place(node, nodeList[idx], "after");
            });
        }
    };
});