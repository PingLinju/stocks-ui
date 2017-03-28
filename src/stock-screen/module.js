/**
 * Created by LiPing on 2017/3/28.
 */

require("./config");
require("./controller");
require("angular");

var deps = [
    "com.stock.screen.config",
    "com.stock.scrren.controller"
]
angular.module("com.stock.screen", deps);

