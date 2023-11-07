sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("luxasia.controller.newcustomer", {
      onInit: function () {},
      onCreateProfile: function () {
        var view = this.getView();
        var requiredFields = [
            view.byId("titleInput"),
            view.byId("nameInput"),
            view.byId("surnameInput"),
            view.byId("emailInput"),
            view.byId("countryCodeComboBox"),
            view.byId("mobileNumberInput"),
            view.byId("dateOfBirthDatePicker"),
            view.byId("customerAddressInput")
        ];
    
        var allFieldsFilled = true;
    
        requiredFields.forEach(function (field) {
            var value = field.getValue();
            if (!value) {
                field.setValueState("Error");
                field.setValueStateText("This field is required");
                allFieldsFilled = false;
            } else {
                field.setValueState("None");
            }
        });
    
        if (!allFieldsFilled) {
            MessageToast.show("Please fill in all required fields.");
            return;
        }
    
        var newProfile = {
            title: view.byId("titleInput").getSelectedKey(),
            name: view.byId("nameInput").getValue(),
            surname: view.byId("surnameInput").getValue(),
            email: view.byId("emailInput").getValue(),
            countryCode: view.byId("countryCodeComboBox").getSelectedKey(),
            mobileNumber: view.byId("mobileNumberInput").getValue(),
            dateOfBirth: view.byId("dateOfBirthDatePicker").getValue(),
            customerAddress: view.byId("customerAddressInput").getValue()
        };
    
       
        $.getJSON("../model/customerData.json", function (data) {
           
            data.push(newProfile);
    
          
            $.ajax({
                url: "../model/customerData.json",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function () {
                    MessageToast.show("New profile created and data saved successfully!");
    
                    requiredFields.forEach(function (field) {
                        field.setValue("");
                    });
                },
                error: function () {
                    MessageToast.show("Failed to update customer data.");
                }
            });
        });
    }
    
  });
});
