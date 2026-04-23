sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("udemyodata.controller.View1", {
        onInit() {
        },

        onPressReadList() {
            var that = this;
            var oModel = this.getView().getModel();
            var Path = "/persProcessSet";
            oModel.read(Path,{
                success: function(onSuccess) {
                    var oJsonModel = new JSONModel();
                    oJsonModel.setData({results: onSuccess.results});
                    that.getView().setModel(oJsonModel, "mPers");
                    MessageToast.show("Success: " + onSuccess.results.length + " records read");
                },
                error: function(onError) {
                    var sMessage = JSON.parse(onError.responseText).error.message.value;
                    MessageToast.show("Error: " + sMessage);
                }
            });
        },
        onPressCreate() {
            var oView = this.getView();
            var oModel = oView.getModel();

            var oData = {
                PersId: oView.byId("persId").getValue(),
                PersName: oView.byId("persName").getValue(),
                PersTitle: oView.byId("persTitle").getValue()
            };
            var Path = "/persProcessSet";
            oModel.create(Path, oData, {
                success: function(onSuccess) {
                    MessageToast.show("Record created successfully");
                },
                error: function(onError) {
                    var sMessage = JSON.parse(onError.responseText).error.message.value;
                    MessageToast.show("Error: " + sMessage);
                }
            });

        },
        onPressReadSingle() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var sPersId = oView.byId("persId").getValue();
            var Path = "/persProcessSet(PersId='" + sPersId + "')";
            oModel.read(Path, {
                success: function(onSuccess) {
                    oView.byId("persName").setValue(onSuccess.PersName);
                    oView.byId("persTitle").setValue(onSuccess.PersTitle);
                    MessageToast.show("Record read successfully");
                },
                error: function(onError) {
                    var sMessage = JSON.parse(onError.responseText).error.message.value;
                    MessageToast.show("Error: " + sMessage);
                }
            });
        },
        onPressUpdate() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var sPersId = oView.byId("persId").getValue();
            var Path = "/persProcessSet(PersId='" + sPersId + "')";
            var oData = {
                PersName: oView.byId("persName").getValue(),
                PersTitle: oView.byId("persTitle").getValue()
            };
            oModel.update(Path, oData, {
                success: function(onSuccess) {
                    MessageToast.show("Record updated successfully");
                },
                error: function(onError) {
                    var sMessage = JSON.parse(onError.responseText).error.message.value;
                    MessageToast.show("Error: " + sMessage);
                }
            });
        },
        onPressDelete() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var sPersId = oView.byId("persId").getValue();
            var Path = "/persProcessSet(PersId='" + sPersId + "')";
            oModel.remove(Path, {
                success: function(onSuccess) {
                    MessageToast.show("Record deleted successfully");
                },
                error: function(onError) {
                    var sMessage = JSON.parse(onError.responseText).error.message.value;
                    MessageToast.show("Error: " + sMessage);
                }
            });
        }

    });
});