/*
 * @Author: cwd
 * @Date: 2022-12-01 17:16:50
 * @LastEditors: cwd
 * @LastEditTime: 2022-12-01 17:17:20
 * @FilePath: \cwdtest\popup.js
 * @Description: 
 * 
 * Copyright (c) 2022 by cwd, All Rights Reserved. 
 */
var allNodes = [];
function getChildNode(node){
    //先找到子结点
    var nodeList = node.childNodes;
    for(var i = 0;i < nodeList.length;i++){

        var childNode = nodeList[i];
 
        if(childNode.nodeType == 1){
            childNode.style.filter = "grayscale(0)";
            getChildNode(childNode);
        }
    }
}
getChildNode(document.body);