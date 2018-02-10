/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

//var myMaxWidth = Math.min(280, Math.ceil(Ext.Element.getDocumentWidth() * 0.9));
var myMaxWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var myMaxHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

var serverPath='http://php16.uits.uconn.edu/mobile4/';

//Ext.define('MyUConn.view.Viewport', {
//    extend: 'Ext.Container',
//    
//    config: {
//        fullscreen: true,
//         html: '',
//        layout:'card',
//        items:[
//            Ext.create('MyUConn.view.main.Main'),
//            Ext.create('MyUConn.view.poll.PollsTab')
//        ]
//    }
//});

Ext.application({
    name: 'MyUConn',
//    autoCreateViewport: true,
    requires: [
        'Ext.MessageBox'
    ],
    controllers:['main.MainController','poll.PollsController'],
    views: ['main.Main','poll.PollsTab'],
    models: ['main.Dashmodel','alerts.Alertsmodel','poll.Pollsmodel'],
    stores: ['Dashstore1','Dashstore2','alerts.Alertsstore','PollsStore'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
//        Ext.Viewport.add(
                 Ext.Viewport.add([Ext.create('MyUConn.view.main.Main'),Ext.create('MyUConn.view.poll.PollsTab')]);
//       Ext.create('MyUConn.store.poll.PollsStore');
        this.launched = true;
        this.mainLaunch();
    },
       
    mainLaunch: function() {
        if (!this.launched) { //!device ||   //for iPhone version, include "!device ||" in "if()"
            return;
        }
        Ext.override(Ext.MessageBox, {
            show: function(config) {
                var attrib,
                        attrName,
                        attribs = {
                            autocomplete: 'off',
                            autocapitalize: 'off',
                            autocorrect: 'off',
                            maxlength: 0,
                            autofocus: true,
                            placeholder: '',
                            type: 'text'
                        },
                assert = /true|on/i;

                this.rendered || this.render(document.body);

                config = Ext.applyIf(
                        config || {}, {
                    multiLine: false,
                    prompt: false,
                    value: '',
                    modal: true
                }
                );

                if (config.title) {
                    this.titleBar.setTitle(config.title);
                    this.titleBar.show();
                } else {
                    this.titleBar.hide();
                }

                if (this.inputsEl && (config.multiLine || config.prompt)) {
                    this.inputsEl.show();

                    if (this.multiLineEl && config.multiLine) {
                        this.inputEl && this.inputEl.hide();
                        this.multiLineEl.show().setHeight(Ext.isNumber(config.multiLine) ? parseFloat(config.multiLine) : this.defaultTextHeight);
                        config.input = this.multiLineEl;
                    } else if (this.inputEl) {
                        this.inputEl.show();
                        this.multiLineEl && this.multiLineEl.hide();
                        config.input = this.inputEl;
                    }


                    if (Ext.isObject(config.prompt)) {
                        Ext.apply(attribs, config.prompt);
                    }

                    for (attrName in attribs) {
                        if (attribs.hasOwnProperty(attrName)) {
                            attrib = attribs[attrName];
                            config.input.dom.setAttribute(
                                    attrName.toLowerCase(),
                                    /^auto/i.test(attrName) ? (assert.test(attrib + '') ? 'on' : 'off') : attrib
                                    );
                        }
                    }

                } else {
                    this.inputsEl && this.inputsEl.hide();
                }

                this.setIcon(config.icon || '', false);
                this.updateText(config.msg, false);

                if (config.cls) {
                    this.el.addCls(config.cls);
                }

                this.modal = !!config.modal;

                var bbar = this.buttonBar,
                        bs = [];

                bbar.removeAll();

                Ext.each([].concat(config.buttons || Ext.MessageBox.OK), function(button) {
                    if (button) {
                        bs.push(
                                Ext.applyIf({
                                    config: config,
                                    scope: this,
                                    handler: this.onClick
                                }, button)
                                );
                    }
                }, this);

                bbar.add(bs);

                if (bbar.rendered) {
                    bbar.doLayout();
                }

                Ext.MessageBox.superclass.show.call(this, config.animate);

                if (config.input) {
                    config.input.dom.value = config.value || '';

                    if (assert.test(attribs.autofocus + '') && !('autofocus' in config.input.dom)) {
                        config.input.dom.focus();
                    }
                }
                this.doComponentLayout();
                return this;
            }
        });
        
//         Ext.Viewport.add(Ext.create('MyUConn.view.poll.PollsTab'));
    },        

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
