sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fioriudemyegitim.controller.View1", {
        onInit() {
        },
        // OnLiveChange() {
        //     var oInput = this.byId("InputId");
        //     var oValue = oInput.getValue();
        //     alert(oValue);
        // }

        // OnLiveChange: function(oEvent) {
        //     var oInput = oEvent.getSource();
        //     alert(oInput.getValue());
        // }
        OnSubmit(){
            var oInput = this.byId("InputId");
            alert(oInput.getValue());
        }

    });
});