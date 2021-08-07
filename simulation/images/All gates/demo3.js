jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -10 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
             e14 = prepare("ld14"),
              e15 = prepare("ld15"),
               e16 = prepare("ld16"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_1_2 = [
            {
                "source": "ld1",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld1"
            }
        ];

       var correct_connections_1_11 = [
            {
                "source": "ld1",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld1"
            }
        ];
var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            }
        ];

var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

var correct_connections_1_6 = [
            {
                "source": "ld1",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld1"
            }
        ];
var correct_connections_1_5= [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];









        var correct_connections_4_2 = [
            {
                "source": "ld4",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld4"
            }
        ];   

var correct_connections_4_3 = [
            {
                "source": "ld4",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld4"
            }
        ];   


        var correct_connections_4_5 = [
            {
                "source": "ld4",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld4"
            }
        ];   

var correct_connections_4_6 = [
            {
                "source": "ld4",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld4"
            }
        ];   


         var correct_connections_4_11 = [
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            }
        ];   

var correct_connections_4_12 = [
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            }
        ];   

var correct_connections_13_2 = [
            {
                "source": "ld13",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld13"
            }
        ];
var correct_connections_13_3 = [
            {
                "source": "ld13",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld13"
            }
        ];

var correct_connections_13_5 = [
            {
                "source": "ld13",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld13"
            }
        ];

var correct_connections_13_6 = [
            {
                "source": "ld13",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld13"
            }
        ];

        var correct_connections_7_9 = [
            {
                "source": "ld7",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld7"
            }
        ];

        var correct_connections_7_10 = [
            {
                "source": "ld7",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld7"
            }
        ];

var correct_connections_8_9 = [
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            }
        ];

        var correct_connections_8_10 = [
            {
                "source": "ld8",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld8"
            }
        ];

var correct_connections_14_15 = [
            {
                "source": "ld14",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld14"
            }
        ];

        var correct_connections_14_16 = [
            {
                "source": "ld14",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld14"
            }
        ];


        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld1"
            },
    
            {
                "source": "ld1",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld1"
            },
        
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            },
        
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
    
            {
                "source": "ld1",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld1"
            },
        
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
        
            {
                "source": "ld4",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            },
            {
                "source": "ld13",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld13"
            },
            {
                "source": "ld13",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld13"
            },
            {
                "source": "ld13",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld13"
            },
            {
                "source": "ld13",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld13"
            },
            {
                "source": "ld7",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld7"
            },
            {
                "source": "ld7",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld7"
            },
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld8"
            },

            {
                "source": "ld14",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld14"
            },
            {
                "source": "ld14",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld14"
            },
        ];

        var actual_connections = instance.getAllConnections();
        var is_connected_1_2 =false;
        var is_connected_1_11 =false;
        var is_connected_1_12 =false;
        var is_connected_1_3 =false;
        var is_connected_1_6 =false;
        var is_connected_1_5=false;
        var is_connected_4_2 =false;
        var is_connected_4_3 =false;
        var is_connected_4_5= false;
        var is_connected_4_6 = false;
        var is_connected_4_11 =false;
        var is_connected_4_12 =false;
        var is_connected_13_2 =false;
        var is_connected_13_3 =false;
        var is_connected_13_5 = false;
        var is_connected_13_6 =false;
        var is_connected_7_9 =false;
        var is_connected_7_10 = false;
        var is_connected_8_9 = false;
        var is_connected_8_10 = false;
        var is_connected_14_15 =false;
        var is_connected_14_16 = false;
        var unallowed_connection_present = false;
        var count =0;


        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_2 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_2){
                is_connected_1_2 = correct_connections_1_2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_11){
                is_connected_1_11 = correct_connections_1_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


            actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_5){
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_6){
                is_connected_1_6 = correct_connections_1_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_2){
                is_connected_4_2 = correct_connections_4_2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_3){
                is_connected_4_3 = correct_connections_4_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_5){
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });




actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_6){
                is_connected_4_6 = correct_connections_4_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_11){
                is_connected_4_11 = correct_connections_4_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_12){
                is_connected_4_12 = correct_connections_4_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_2){
                is_connected_13_2 = correct_connections_13_2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_3){
                is_connected_13_3 = correct_connections_13_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_5){
                is_connected_13_5 = correct_connections_13_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_6){
                is_connected_13_6 = correct_connections_13_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });





actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_9){
                is_connected_7_9 = correct_connections_7_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_10){
                is_connected_7_10 = correct_connections_7_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_10){
                is_connected_8_10 = correct_connections_8_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_15){
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_16){
                is_connected_14_16 = correct_connections_14_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


         if  ( (((is_connected_1_11)&& (is_connected_1_2 || is_connected_1_3 || is_connected_1_5 || is_connected_1_6)) || ((is_connected_1_12)&& (is_connected_1_2 || is_connected_1_3 || is_connected_1_5 || is_connected_1_6)))  && (((is_connected_4_11) && (is_connected_4_2 || is_connected_4_3 || is_connected_4_5 || is_connected_4_6 )) || ((is_connected_4_12) && (is_connected_4_2 || is_connected_4_3 || is_connected_4_5 || is_connected_4_6  ))) && (is_connected_13_2 || is_connected_13_3) && (is_connected_13_5 || is_connected_13_6)&& (is_connected_7_9||is_connected_7_10) && (is_connected_8_10||is_connected_8_9)&& (is_connected_14_15)&& (is_connected_14_16) &&! unallowed_connection_present){
            alert("RIGHT CONNECTION");
            } else {
               alert("WRONG CONNECTION");
                return;
            }  
    });
});