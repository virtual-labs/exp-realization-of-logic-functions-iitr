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
             e6= prepare("ld6"),
              e7= prepare("ld7"),
               e8= prepare("ld8"),
                e9= prepare("ld9"),
                 e10= prepare("ld10"),
                  e11= prepare("ld11"),
                   e12= prepare("ld12"),
                   e13= prepare("A"),

                   e14= prepare("B"),
                   e15= prepare("C"),
                   e16= prepare("D"),
                   e17= prepare("E"),





           
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

        var correct_connections_1_4 = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            }
        ]; 
         var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
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
        var correct_connections_1_7 = [
            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld1"
            }
        ];
        var correct_connections_1_8 = [
            {
                "source": "ld1",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld1"
            }
        ];            

        var correct_connections_1_10 = [
            {
                "source": "ld1",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld1"
            }
        ];
        var correct_connections_1_9 = [
            {
                "source": "ld1",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld1"
            }
        ];

        
            var correct_connections_2_5 = [
            {
                "source": "ld2",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld2"
            }
        ];
          
            var correct_connections_2_6 = [
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld2",
                "target": "ld6"
            }
        ];
        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            }
        ];
        var correct_connections_2_4 = [
            {
                "source": "ld2",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
         var correct_connections_2_8 = [
            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld2",
                "target": "ld8"
            }
        ];
         var correct_connections_2_7 = [
            {
                "source": "ld2",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld2"
            }
        ];
        var correct_connections_2_9 = [
            {
                "source": "ld2",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld2"
            }
        ];
        var correct_connections_2_10 = [
            {
                "source": "ld2",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld2"
            }
        ];
        var correct_connections_A_7 = [
            {
                "source": "A",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "A"
            }
        ];
         var correct_connections_A_8 = [
            {
                "source": "A",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "A"
            }
        ];
        var correct_connections_B_9 = [
            {
                "source": "B",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "B"
            }
        ];
        var correct_connections_B_10 = [
            {
                "source": "B",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "B"
            }
        ];
         var correct_connections_C_11 = [
            {
                "source": "C",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "C"
            }
        ];
        var correct_connections_D_12 = [
            {
                "source": "D",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "D"
            }
        ];
        var correct_connections_C_12 = [
            {
                "source": "C",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "C"
            }
        ];
        var correct_connections_D_11 = [
            {
                "source": "D",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "D"
            }
        ];



        //a connection outside this will invalidate the circuit
        var allowed_connections = [
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
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld1"
            },
             {
                "source": "ld2",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld2"
            },
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld2",
                "target": "ld6"
            },
            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld2",
                "target": "ld8"
            },
            {
                "source": "ld2",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld2"
            },
             {
                "source": "A",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "A"
            },
            {
                "source": "B",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "B"
            },
            {
                "source": "C",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "C"
            },
             {
                "source": "D",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "D"
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
                "source": "ld1",
                "target": "ld6"
            },
            {
                "source": "ld6",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld2"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld2"
            },
            {
                "source": "ld1",
                "target": "ld9"
            },
            {
                "source": "ld9",
                "target": "ld1"
            },
            {
                "source": "B",
                "target": "ld10"
            },
            {
                "source": "ld10",
                "target": "B"
            },
            {
                "source": "A",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "A"
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
                "source": "ld1",
                "target": "ld6"
            },
            {
                "source": "ld6",
                "target": "ld1"
            },
             {
                "source": "ld2",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld2"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld2"
            },
            {
                "source": "C",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "C"
            },
            {
                "source": "D",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "C"
            },
            {
                "source": "ld1",
                "target": "ld7"
            },
            {
                "source": "ld7",
                "target": "ld1"
            },
             {
                "source": "ld1",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld9"
            },
            {
                "source": "ld9",
                "target": "ld2"
            },
            {
                "source": "ld2",
                "target": "ld10"
            },
            {
                "source": "ld10",
                "target": "ld2"
            },






        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_3 = false;
        var is_connected_1_4 = false;
        var is_connected_1_5 = false;
        var is_connected_1_6 = false;
        var is_connected_1_7 = false;
        var is_connected_1_8 = false;
       var is_connected_1_10 = false;
       var is_connected_1_9 = false;
        var is_connected_2_5 = false;
        var is_connected_2_6 = false;
         var is_connected_2_3 = false;
        var is_connected_2_4 = false;
        var is_connected_2_8 = false;
        var is_connected_2_7 = false;
        var is_connected_2_9 = false;
        var is_connected_2_10 = false;
        var is_connected_A_7 = false;
        var is_connected_A_8 = false;
        var is_connected_B_9 = false;
         var is_connected_B_10 = false;
        var is_connected_C_11 = false;
        var is_connected_D_12= false;
        var is_connected_C_12 = false;
        var is_connected_D_11= false;
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

        //checking for 2_4 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_4){
                is_connected_1_4 = correct_connections_1_4.find(function (conn) {
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

            if(!is_connected_1_8){
                is_connected_1_8 = correct_connections_1_8.find(function (conn) {
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

            if(!is_connected_1_7){
                is_connected_1_7 = correct_connections_1_7.find(function (conn) {
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

            if(!is_connected_1_10){
                is_connected_1_10 = correct_connections_1_10.find(function (conn) {
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

            if(!is_connected_2_5){
                is_connected_2_5 = correct_connections_2_5.find(function (conn) {
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

            if(!is_connected_2_6){
                is_connected_2_6 = correct_connections_2_6.find(function (conn) {
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

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
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

            if(!is_connected_2_4){
                is_connected_2_4 = correct_connections_2_4.find(function (conn) {
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

            if(!is_connected_2_8){
                is_connected_2_8 = correct_connections_2_8.find(function (conn) {
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

            if(!is_connected_2_7){
                is_connected_2_7 = correct_connections_2_7.find(function (conn) {
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

            if(!is_connected_2_9){
                is_connected_2_9 = correct_connections_2_9.find(function (conn) {
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

            if(!is_connected_2_10){
                is_connected_2_10 = correct_connections_2_10.find(function (conn) {
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

            if(!is_connected_A_7){
                is_connected_A_7 = correct_connections_A_7.find(function (conn) {
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

            if(!is_connected_A_8){
                is_connected_A_8 = correct_connections_A_8.find(function (conn) {
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

            if(!is_connected_B_9){
                is_connected_B_9 = correct_connections_B_9.find(function (conn) {
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

            if(!is_connected_B_10){
                is_connected_B_10= correct_connections_B_10.find(function (conn) {
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

            if(!is_connected_C_11){
                is_connected_C_11 = correct_connections_C_11.find(function (conn) {
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

            if(!is_connected_C_12){
                is_connected_C_12 = correct_connections_C_12.find(function (conn) {
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

            if(!is_connected_D_12){
                is_connected_D_12 = correct_connections_D_12.find(function (conn) {
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

            if(!is_connected_D_11){
                is_connected_D_11 = correct_connections_D_11.find(function (conn) {
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

            if(!is_connected_1_9){
                is_connected_1_9 = correct_connections_1_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
             

           
           
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        


         if ((is_connected_1_3&&is_connected_1_4) && ( is_connected_2_5 &&is_connected_2_6) && (is_connected_1_10||is_connected_1_9) && (is_connected_2_8||is_connected_2_7)&&(is_connected_A_7||is_connected_A_8)&&(is_connected_B_9||is_connected_B_10)&&((is_connected_C_11&&is_connected_D_12)||(is_connected_C_12&&is_connected_D_11)) &&!unallowed_connection_present) {
            alert("RIGHT CONNECTION");
            } 
            
        else if(is_connected_1_5&&is_connected_1_6 &&  is_connected_2_3 &&is_connected_2_4&&(is_connected_1_8||is_connected_1_7)&&(is_connected_2_9||is_connected_2_10)&&(is_connected_A_7||is_connected_A_8)&&(is_connected_B_9||is_connected_B_10)&&((is_connected_C_11&&is_connected_D_12)||(is_connected_C_12&&is_connected_D_11)))
        {
            alert("RIGHT CONNECTION");
        }
            else {
               alert("WRONG CONNECTION");
                return;
            }   
    });
});