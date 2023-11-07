sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" 
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("luxasia.controller.mainmenu", {
        onInit: function () {},

        searchcustomer: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("customersearch");
        },
        createprofile: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("newcustomer");
        },
        contact: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("calllist");
        }
    });
});