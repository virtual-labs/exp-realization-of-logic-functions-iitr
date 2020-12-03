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
                   e13= prepare("ld13"),

                   e14= prepare("ld14"),
                   e15= prepare("ld15"),
                   e16= prepare("ld16"),

                   e17= prepare("ld17"),
                   e18= prepare("ld18"),
                   e19= prepare("ld19"),

                    e20= prepare("ld20"),
                   e21= prepare("ld21"),
                   e22= prepare("ld22"),


                    e23= prepare("A"),
                   e24= prepare("B"),
                   e25= prepare("C"),



                    e26= prepare("D"),
                   e27= prepare("E"),
                   e28= prepare("F"),
                   e29= prepare("G"),








           
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
        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            }
        ];
        var correct_connections_1_18 = [
            {
                "source": "ld1",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld1"
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
        var correct_connections_2_12 = [
            {
                "source": "ld2",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld2"
            }
        ];
        var correct_connections_3_13 = [
            {
                "source": "ld3",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld3"
            }
        ];

        var correct_connections_3_14 = [
            {
                "source": "ld3",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld3"
            }
        ];

        var correct_connections_3_17 = [
            {
                "source": "ld3",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld3"
            }
        ];
         var correct_connections_4_7 = [
            {
                "source": "ld4",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld4"
            }
        ];

        var correct_connections_4_8 = [
            {
                "source": "ld4",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld4"
            }
        ];
         var correct_connections_A_11 = [
            {
                "source": "A",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "A"
            }
        ];

         var correct_connections_B_16 = [
            {
                "source": "B",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "B"
            }
        ];

         var correct_connections_C_19 = [
            {
                "source": "C",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "C"
            }
        ];

        var correct_connections_D_20 = [
            {
                "source": "D",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "D"
            }
        ];

         var correct_connections_D_21 = [
            {
                "source": "D",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "D"
            }
        ];
         var correct_connections_D_22 = [
            {
                "source": "D",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "D"
            }
        ];

        var correct_connections_E_20 = [
            {
                "source": "E",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "E"
            }
        ];

         var correct_connections_E_21 = [
            {
                "source": "E",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "E"
            }
        ];


         var correct_connections_E_22 = [
            {
                "source": "E",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "E"
            }
        ];
         var correct_connections_F_20 = [
            {
                "source": "F",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "F"
            }
        ];

         var correct_connections_F_21 = [
            {
                "source": "F",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "F"
            }
        ];
         var correct_connections_F_22 = [
            {
                "source": "F",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "F"
            }
        ];
        
        
        
        


        //a connection outside this will invalidate the circuit
        var allowed_connections = [
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
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },
            {
                "source": "ld1",
                "target": "ld18"
            },

            {
                "source": "ld18",
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
            {
                "source": "ld2",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld3"
            },
             {
                "source": "ld4",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld4"
            },
             {
                "source": "ld4",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld4"
            },
             {
                "source": "A",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "A"
            },
            {
                "source": "B",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "B"
            },
            {
                "source": "C",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "C"
            },
            {
                "source": "D",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "D"
            },
            {
                "source": "D",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "D"
            },
            {
                "source": "D",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "D"
            },
            {
                "source": "E",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "E"
            },
            {
                "source": "E",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "E"
            },
            {
                "source": "E",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "E"
            },
            {
                "source": "F",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "F"
            },
             {
                "source": "F",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "F"
            },
            {
                "source": "F",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "F"
            },


















            
            






        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_1_6 = false;
        var is_connected_1_15 = false;
        var is_connected_1_18 = false;
        var is_connected_2_9 = false;
        var is_connected_2_10 = false;
       var is_connected_2_12 = false;
       var is_connected_3_13 = false;
        var is_connected_3_14 = false;
        var is_connected_3_17 = false;
        var is_connected_4_7 = false;
        is_connected_4_8 = false;
         var is_connected_A_11 = false;
        var is_connected_B_16 = false;
        var is_connected_C_19 = false;
        var is_connected_D_20 = false;
        var is_connected_D_21 = false;
        var is_connected_D_22 = false;
        var is_connected_E_20 = false;
        var is_connected_E_21 = false;
        var is_connected_E_22 = false;
         var is_connected_F_20 = false;
        var is_connected_F_21 = false;
        var is_connected_F_22= false;
        
       
        var unallowed_connection_present = false;
        var count =0;

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_5){
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
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

            if(!is_connected_1_15){
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
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

            if(!is_connected_1_18){
                is_connected_1_18 = correct_connections_1_18.find(function (conn) {
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

            if(!is_connected_2_12){
                is_connected_2_12 = correct_connections_2_12.find(function (conn) {
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

            if(!is_connected_3_13){
                is_connected_3_13 = correct_connections_3_13.find(function (conn) {
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

            if(!is_connected_4_7){
                is_connected_4_7 = correct_connections_4_7.find(function (conn) {
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

            if(!is_connected_4_8){
                is_connected_4_8 = correct_connections_4_8.find(function (conn) {
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

            if(!is_connected_3_14){
                is_connected_3_14 = correct_connections_3_14.find(function (conn) {
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

            if(!is_connected_3_17){
                is_connected_3_17 = correct_connections_3_17.find(function (conn) {
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

            if(!is_connected_A_11){
                is_connected_A_11 = correct_connections_A_11.find(function (conn) {
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

            if(!is_connected_B_16){
                is_connected_B_16 = correct_connections_B_16.find(function (conn) {
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

            if(!is_connected_C_19){
                is_connected_C_19 = correct_connections_C_19.find(function (conn) {
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

            if(!is_connected_D_20){
                is_connected_D_20 = correct_connections_D_20.find(function (conn) {
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

            if(!is_connected_D_21){
                is_connected_D_21 = correct_connections_D_21.find(function (conn) {
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

            if(!is_connected_D_22){
                is_connected_D_22 = correct_connections_D_22.find(function (conn) {
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

            if(!is_connected_E_20){
                is_connected_E_20 = correct_connections_E_20.find(function (conn) {
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

            if(!is_connected_E_21){
                is_connected_E_21 = correct_connections_E_21.find(function (conn) {
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

            if(!is_connected_E_22){
                is_connected_E_22= correct_connections_E_22.find(function (conn) {
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

            if(!is_connected_F_20){
                is_connected_F_20 = correct_connections_F_20.find(function (conn) {
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

            if(!is_connected_F_21){
                is_connected_F_21= correct_connections_F_21.find(function (conn) {
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

            if(!is_connected_F_22){
                is_connected_F_22 = correct_connections_F_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
             

           
           
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        


         if (is_connected_1_5&&is_connected_1_6&&is_connected_1_15&&is_connected_1_18&&is_connected_2_9&&is_connected_2_10&&is_connected_2_12&&is_connected_3_13&&is_connected_3_14&&is_connected_3_17&&is_connected_4_7&&is_connected_4_8&&is_connected_A_11&&is_connected_B_16&&is_connected_C_19&&((is_connected_D_20&&is_connected_E_21&&is_connected_F_22)||(is_connected_D_20&&is_connected_E_22&&is_connected_F_21)||(is_connected_D_21&&is_connected_E_20&&is_connected_F_22)||(is_connected_D_21&&is_connected_E_22&&is_connected_F_20)||(is_connected_D_22&&is_connected_E_20&&is_connected_F_21)||(is_connected_D_22&&is_connected_E_21&&is_connected_F_20))&&!unallowed_connection_present) {
            alert("RIGHT CONNECTION");
            } 
            
       
            else {
               alert("WRONG CONNECTION");
                return;
            }   
    });
});