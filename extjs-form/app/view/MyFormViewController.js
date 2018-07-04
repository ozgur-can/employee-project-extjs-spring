Ext.define('MyApp.view.MyFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myform',

    onBut1Click: function (button, e, eOpts) {

        var name_ = Ext.getCmp('name_').getValue();
        var lastname_ = Ext.getCmp('lastName_').getValue();
        var active_ = Ext.getCmp('true_rb').getValue();

        Ext.Ajax.request({
            url: 'http://localhost:8080/employee',
            method: 'POST',
            params: {
                name: name_,
                lastname: lastname_,
                active: active_
            },

            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.data.StoreManager.lookup('employeeStore').add(obj);
            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    onBut2Click: function (button, e, eOpts) {
        Ext.Ajax.request({
            url: 'http://localhost:8080/employee',
            method: 'GET',

            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.data.StoreManager.lookup('employeeStore').add(obj);
            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

});
