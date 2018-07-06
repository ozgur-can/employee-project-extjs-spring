function Request_Get() {
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
}

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
        Request_Get();
    },

    onBut2Click: function (button, e, eOpts) {
        Request_Get();
    },

    onBut3Click: function (button, e, eOpts) {

        var name_ = Ext.getCmp('name_').getValue();
        var lastname_ = Ext.getCmp('lastName_').getValue();
        var active_ = Ext.getCmp('true_rb').getValue();
        var id_ = Ext.getCmp('id_').getValue();

        Ext.Ajax.request({
            url: 'http://localhost:8080/employees/' + id_ + '?',
            method: 'POST',
            params: {
                name: name_,
                lastname: lastname_,
                active: active_
            },

            success: function (response, opts) {

            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
        Request_Get();
    },
    onBut4Click: function (button, e, eOpts) {

        Ext.Ajax.request({
            url: 'http://localhost:8080/employeesDel/' + Ext.getCmp('id_').getValue(),
            method: 'POST',

            success: function (response, opts) {
                Ext.data.StoreManager.lookup('employeeStore').removeAll();
            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
        Request_Get();
    }

});
