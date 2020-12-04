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
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),
            e20 = prepare("ld20"),
            e21 = prepare("ld21"),
            e22 = prepare("ld22"),
            e23 = prepare("ld23"),
            e24 = prepare("ld24"),
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            e27 = prepare("ld27"),
            e28 = prepare("ld28"),
             e29 = prepare("ld29"),
              e30 = prepare("ld30"),
               e31 = prepare("ld31"),


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
                "source": "ld6",
                "target": "ld2"
            }
        ];


        
var correct_connections_3_7 = [
            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            }
        ];

var correct_connections_3_8 = [
            {
                "source": "ld3",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld3"
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



var correct_connections_2_19 = [
            {
                "source": "ld2",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld2"
            }
        ];





var correct_connections_4_16 = [
            {
                "source": "ld4",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld4"
            }
        ];





var correct_connections_29_12 = [
            {
                "source": "ld29",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld29"
            }
        ];



var correct_connections_30_13 = [
            {
                "source": "ld30",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld30"
            }
        ];

var correct_connections_30_14 = [
            {
                "source": "ld30",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld30"
            }
        ];


var correct_connections_30_17 = [
            {
                "source": "ld30",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld30"
            }
        ];

        
var correct_connections_31_15 = [
            {
                "source": "ld31",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld31"
            }
        ];

      var correct_connections_31_18 = [
            {
                "source": "ld31",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld31"
            }
        ];


        var correct_connections_20_22 = [
            {
                "source": "ld20",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld20"
            }
        ];var correct_connections_20_23 = [
            {
                "source": "ld20",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld20"
            }
        ];var correct_connections_20_24 = [
            {
                "source": "ld20",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld20"
            }
        ];



       var correct_connections_21_22 = [
            {
                "source": "ld21",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld21"
            }
        ];var correct_connections_21_23 = [
            {
                "source": "ld21",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld21"
            }
        ];var correct_connections_21_24 = [
            {
                "source": "ld21",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld21"
            }
        ];

               var correct_connections_28_22 = [
            {
                "source": "ld28",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld28"
            }
        ];var correct_connections_28_23 = [
            {
                "source": "ld28",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld28"
            }
        ];var correct_connections_28_24 = [
            {
                "source": "ld28",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld28"
            }
        ];
var correct_connections_25_26 = [
            {
                "source": "ld25",
                "target": "ld26"
            },

            {
                "source": "ld26",
                "target": "ld25"
            }
        ];var correct_connections_25_27 = [
            {
                "source": "ld25",
                "target": "ld27"
            },

            {
                "source": "ld27",
                "target": "ld25"
            }
        ];



        //a connection outside this will invalidate the circuit
        var allowed_connections = [
        

            {
                "source": "ld1",
                "target": "ld9"
            },

            {
                "source": "ld9",
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
                "source": "ld6",
                "target": "ld2"
            },
 
            

           
            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld3"
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
                "source": "ld2",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld2"
            },

            


            {
                "source": "ld4",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld4"
            },


            
            {
                "source": "ld29",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld29"
            },

            
            
            {
                "source": "ld30",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld30"
            },

            

            {
                "source": "ld30",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld30"
            },

           

           
            {
                "source": "ld31",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld31"
            },

            
            {
                "source": "ld31",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld31"
            },

           
            {
                "source": "ld20",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld20"
            },
  
            {
                "source": "ld20",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld20"
            },
 
            {
                "source": "ld21",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld21"
            },

            {
                "source": "ld28",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld28"
            },

            {
                "source": "ld25",
                "target": "ld26"
            },

            {
                "source": "ld26",
                "target": "ld25"
            },
            {
                "source": "ld25",
                "target": "ld27"
            },

            {
                "source": "ld27",
                "target": "ld25"
            },
        ];

        var actual_connections = instance.getAllConnections();

        
  
       var is_connected_1_9=false;
       var is_connected_1_10=false;


       var is_connected_2_5=false;
       var is_connected_2_6=false;
   

       var is_connected_3_7=false;
       var is_connected_3_8=false;

       var is_connected_1_11=false;


       var is_connected_2_19=false;


       var is_connected_4_16=false;

       var is_connected_29_12=false;
       var is_connected_30_13=false;
       var is_connected_30_14=false;
       var is_connected_30_17=false;
       var is_connected_31_15=false;
       var is_connected_31_18=false;









       var is_connected_20_22=false;
       var is_connected_20_23=false;
       var is_connected_20_24=false;

       var is_connected_21_22=false;
       var is_connected_21_23=false;
       var is_connected_21_24=false;

       var is_connected_28_22=false;
       var is_connected_28_23=false;
       var is_connected_28_24=false;


       var is_connected_25_26=false;
       var is_connected_25_27=false;


        var unallowed_connection_present = false;
        var count =0;

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_9){
                is_connected_1_9= correct_connections_1_9.find(function (conn) {
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

  


actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_10){
                is_connected_1_10= correct_connections_1_10.find(function (conn) {
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

            if(!is_connected_3_7){
                is_connected_3_7 = correct_connections_3_7.find(function (conn) {
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

            if(!is_connected_3_8){
                is_connected_3_8 = correct_connections_3_8.find(function (conn) {
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
                is_connected_1_11= correct_connections_1_11.find(function (conn) {
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

            if(!is_connected_2_19){
                is_connected_2_19 = correct_connections_2_19.find(function (conn) {
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

            if(!is_connected_4_16){
                is_connected_4_16 = correct_connections_4_16.find(function (conn) {
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

            if(!is_connected_29_12){
                is_connected_29_12 = correct_connections_29_12.find(function (conn) {
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

            if(!is_connected_30_13){
                is_connected_30_13 = correct_connections_30_13.find(function (conn) {
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

            if(!is_connected_30_14){
                is_connected_30_14 = correct_connections_30_14.find(function (conn) {
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

            if(!is_connected_30_17){
                is_connected_30_17 = correct_connections_30_17.find(function (conn) {
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

            if(!is_connected_31_15){
                is_connected_31_15 = correct_connections_31_15.find(function (conn) {
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

            if(!is_connected_31_18){
                is_connected_31_18 = correct_connections_31_18.find(function (conn) {
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

            if(!is_connected_20_22){
                is_connected_20_22 = correct_connections_20_22.find(function (conn) {
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

            if(!is_connected_20_23){
                is_connected_20_23 = correct_connections_20_23.find(function (conn) {
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

            if(!is_connected_20_24){
                is_connected_20_24 = correct_connections_20_24.find(function (conn) {
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

            if(!is_connected_21_22){
                is_connected_21_22 = correct_connections_21_22.find(function (conn) {
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

            if(!is_connected_21_23){
                is_connected_21_23 = correct_connections_21_23.find(function (conn) {
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

            if(!is_connected_21_24){
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
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

            if(!is_connected_28_22){
                is_connected_28_22 = correct_connections_28_22.find(function (conn) {
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

            if(!is_connected_28_23){
                is_connected_28_23 = correct_connections_28_23.find(function (conn) {
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

            if(!is_connected_28_24){
                is_connected_28_24 = correct_connections_28_24.find(function (conn) {
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

            if(!is_connected_25_26){
                is_connected_25_26 = correct_connections_25_26.find(function (conn) {
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

            if(!is_connected_25_27){
                is_connected_25_27 = correct_connections_25_27.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });






        if (is_connected_1_11 && is_connected_1_9 && is_connected_1_10 && is_connected_2_19 && is_connected_2_5 && is_connected_2_6 && is_connected_3_7 && is_connected_3_8 && is_connected_4_16&& is_connected_29_12&& is_connected_30_13&& is_connected_30_14 && is_connected_30_17 && is_connected_31_15 && is_connected_31_18 && ((is_connected_20_22&& is_connected_21_23&& is_connected_28_24) || (is_connected_20_22 && is_connected_21_24 && is_connected_28_23)||(is_connected_20_23 && is_connected_21_22 && is_connected_28_24)||(is_connected_20_23 && is_connected_21_24 && is_connected_28_22)||(is_connected_20_24 && is_connected_21_22 && is_connected_28_23)||(is_connected_20_24 && is_connected_21_23 && is_connected_28_22)) && is_connected_25_26 && is_connected_25_27 &&!unallowed_connection_present){
            alert("RIGHT CONNECTION");
            } else {
               alert("WRONG CONNECTION");
                return;
            }   
    });
});