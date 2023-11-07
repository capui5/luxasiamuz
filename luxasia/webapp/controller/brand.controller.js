sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("luxasia.controller.brand", {
        onInit: function () {
            var productData = {
                ProductCollection: [
                    { Name: "PRODUCT 3" },
                    { Name: "PRODUCT 1" },
                    { Name: "ABERCROMBIE & FITCH" },
                    { Name: "NIKE" },
                    { Name: "ADIDAS" },
                    { Name: "APPLE" },
                    { Name: "SAMSUNG" },
                    { Name: "COCA-COLA" },
                    { Name: "MICROSOFT" },
                    { Name: "TOYOTA" },
                    { Name: "MERCEDES-BENZ" },
                    { Name: "L'ORÉAL" },
                    { Name: "AMAZON" },
                    { Name: "FACEBOOK" },
                    { Name: "GOOGLE" },
                    { Name: "MCDONALD'S" },
                    { Name: "BURBERRY" },
                    { Name: "LOUIS VUITTON" },
                    { Name: "PORSCHE" },
                    { Name: "SONY" }
                ]
            };
            var oModel = new JSONModel(productData);
            this.getView().setModel(oModel, "myData");

        }
    });
});
