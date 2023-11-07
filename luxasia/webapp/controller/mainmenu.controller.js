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
        transaction: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("transaction");
        },
        contact: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("calllist");
        },
        onCustPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("brandselection");
        },

        onOpenDialog: function () {
            this.pDialog ??= this.loadFragment({
                name: "luxasia.view.newprofile"
            });
            this.pDialog.then(function (dialog) {
                dialog.open();
            });
        },
        
        onCloseDialog: function () {
            if (this.pDialog) {
                this.pDialog.then(function (dialog) {
                    dialog.close();
                    dialog.destroy();
                });
                this.pDialog = null;
            }
        },
        

        onOpenFrag: function () {
            this.pDialog ??= this.loadFragment({
                name: "luxasia.view.cashcarry"
            });
            this.pDialog.then(function (dialog) {
                dialog.open();
            });
        },

        onCloseFrag: function () {
            if (this.pDialog) {
                this.pDialog.then(function (dialog) {
                    dialog.close();
                    dialog.destroy();
                });
                this.pDialog = null;
            }
        },

        onSearchProduct: function () {
            console.log("hello world");
            this.oDialog ??= this.loadFragment({
                name: "luxasia.view.searchproduct"
            });
        
            this.oDialog.then((oDialog) => oDialog.open());
        },
        handleClose : function(){
            if (this.pDialog) {
                this.pDialog.then(function (dialog) {
                    dialog.close();
                    dialog.destroy();
                });
                this.pDialog = null;
            }
        },
    
        // onOpenFragment: function () {
        //     // Load the plain fragment and open it as a dialog
        //     if (!this._oPlainDialog) {
        //        this._oPlainDialog = new sap.m.Dialog({
        //           content: sap.ui.xmlfragment("luxasia.view.test", this),
                
        //        });
        //     }
   
        //     this.getView().addDependent(this._oPlainDialog);
   
        //     this._oPlainDialog.open();
        //  },
         onQrPress: function () {
            this.oDialog ??= this.loadFragment({
                name: "luxasia.view.qr"
            });
            this.oDialog.then(function (dialog) {
                dialog.open();
            });
        },
        createprofile: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("newcustomer");
        }
        
    });
});