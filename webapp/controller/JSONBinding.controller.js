sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sapips/training/jsonbinding/model/formatter",
    "sap/ui/model/json/JSONModel"
], function (Controller, formatter, JSONModel) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            var oModel = new JSONModel({
                EID: "noli.pangda",
                Enabled: true,
                Address: {
                    Street: "123 Main St",
                    City: "Cebu",
                    Zip: "6000",
                    Country: "Philippines"
                },
                SalesAmount: 999999.00,
                CurrencyCode: "USD"
            });
            this.getView().setModel(oModel);

            var oProductsModel = this.getOwnerComponent().getModel("ProductsModel");
            this.getView().setModel(oProductsModel, "ProductsModel");

            var oSelectedProductModel = new sap.ui.model.json.JSONModel({});
            this.getView().setModel(oSelectedProductModel, "SelectedProduct");
        },

        onProductSelect: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            var oContext = oSelectedItem.getBindingContext("ProductsModel");
            var oSelectedProduct = oContext.getObject();
            this.getView().getModel("SelectedProduct").setData(oSelectedProduct);
        }
    });
});