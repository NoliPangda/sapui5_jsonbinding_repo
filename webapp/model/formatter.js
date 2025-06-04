sap.ui.define([
    "sap/m/library", 
    "sap/ui/model/type/Currency" 
], function (mobileLibrary, Currency) {
    "use strict";

    return {
        formatMail: function (sEid) {
            var sSubject = "Test email to " + sEid;
            var sBody = "Hi! How are you?";
            var sDomain = "@accenture.com";

            try {
                oBundle = sap.ui.getCore().getLibraryResourceBundle("sapips.training.jsonbinding");
                if (oBundle) {
                    sDomain = oBundle.getText("domain") || sDomain;
                    sMailSubject = oBundle.getText("mailSubject") || sMailSubject;
                    sMailBody = oBundle.getText("mailBody") || sMailBody;
                }
            } catch (e) {
                console.warn("i18n values not loaded. Falling back to defaults.");
            }

            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + sDomain,
                sSubject,
                sBody
            );
        },

        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            var oCurrency = new Currency();
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        }
    };
});
