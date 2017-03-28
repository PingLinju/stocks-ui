/**
 * Created by LiPing on 2017/3/28.
 */
var angular = require("angular");
var screenCtrl = require("./defs/config-def");

var deps = [];
angular.module("com.stock.screen.controller",deps)
    .controller("screenCtrl", [screenCtrl]);