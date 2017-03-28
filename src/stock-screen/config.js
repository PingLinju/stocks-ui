/**
 * Created by LiPing on 2017/3/28.
 */
var angular = require("angular");
var stockConfig = require("./defs/config-def");

var deps = [];
angular.module("com.stock.screen.config", deps)
    .config(["$stateProvider", stockConfig]);
