
      function explosion() {
        let top_tank = parseInt(document.getElementById("tank").style["top"]);
        let left_tank = parseInt(document.getElementById("tank").style["left"]);
        let top_boom = ParseInt(document.getElementById("boom").style["top"]);
        let left_boom = ParseInt(document.getElementById("boom").style["left"]);
        if (top_tank == top_boom && left_tank == left_boom) {
            document.getElementById("tank").style.backgroundImage="img/explosion.png"
        }
    }
    
    function moveUp() {
        let top_tank = parseInt(document.getElementById("tank").style["top"]);
        console.log(top_tank);
        let left_tank = parseInt(document.getElementById("tank").style["left"]);
        console.log(left_tank);
        document.getElementById("tank").style["top"] =  top_tank - 19 + "px";
        let top_boom = parseInt(document.getElementById("boom").style["top"]);
        console.log(top_boom);
        let left_boom = parseInt(document.getElementById("boom").style["left"]);
        console.log(left_boom);
        if (top_tank == top_boom && left_tank == left_boom) {
            document.getElementById("tank").style.backgroundImage = "url('img/explosion.png')"
        }
    }
    function moveDown() {
        let top_tank = parseInt(document.getElementById("tank").style["top"]);
        document.getElementById("tank").style["top"] =  top_tank + 19 + "px";
    }
    function moveLeft() {
        let left_tank = parseInt(document.getElementById("tank").style["left"]);
        document.getElementById("tank").style["left"] = left_tank  - 19 + "px";
    }
    function moveRight() {
        let left_tank = parseInt(document.getElementById("tank").style["left"]);
        document.getElementById("tank").style["left"] =  left_tank + 19 + "px";
    }


  


    