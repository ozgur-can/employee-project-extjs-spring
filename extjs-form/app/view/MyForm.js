Ext.define('MyApp.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'MyApp.view.MyFormViewModel',
        'MyApp.view.MyFormViewController',
        'MyApp.view.override.MyForm',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Boolean'
    ],

    controller: 'myform',
    viewModel: {
        type: 'myform'
    },
    height: 455,
    width: 758,
    bodyPadding: 10,
    title: 'Employee',

    items: [
        {
            xtype: 'textfield',
            anchor: '40%',
            id: 'name_',
            fieldLabel: 'Name'
        },
        {
            xtype: 'textfield',
            anchor: '40%',
            id: 'lastName_',
            fieldLabel: 'LastName'
        },
        {
            xtype: 'radiogroup',
            layout: 'auto',
            fieldLabel: 'Active',
            items: [
                {
                    xtype: 'radiofield',
                    id: 'true_rb',
                    boxLabel: 'True'
                },
                {
                    xtype: 'radiofield',
                    boxLabel: 'False'
                }
            ]
        },
        {
            xtype: 'button',
            id: 'but1',
            margin: '10',
            text: 'Gonder',
            listeners: {
                click: 'onBut1Click'
            }
        },
        {
            xtype: 'button',
            id: 'but2',
            margin: '10 10 50',
            text: 'Getir',
            listeners: {
                click: 'onBut2Click'
            }
        },
        {
            xtype: 'textfield',
            anchor: '20%',
            id: 'id_',
            fieldLabel: 'id'
        },
        {
            xtype: 'button',
            id: 'but3',
            margin: '10 10',
            text: 'Guncelle',
            listeners: {
                click: 'onBut3Click'
            }
        },
        {
            xtype: 'button',
            id: 'but4',
            margin: '10 10',
            text: 'Sil',
            listeners: {
                click: 'onBut4Click'
            }
        },
    ]

});

var myStore = Ext.create('Ext.data.Store', {
    storeId: 'employeeStore',
    autoSync: true,
    fields: ['id', 'name', 'lastName', 'active'],
    data: [],
});

var myGrid = Ext.create('Ext.grid.Panel', {
    id: 'empGrid',
    title: 'Employees',
    store: Ext.data.StoreManager.lookup('employeeStore'),
    columns: [
        { text: 'Id', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Active', dataIndex: 'active', flex: 1 }
    ],
    height: 409,
    width: 430,
    margin: '0 0 -409 330',
    renderTo: Ext.getBody()
});