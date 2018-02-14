function Star(){
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(windowWidth);
    this.pz = this.z;

    this.update = function(speed){
        this.z = this.z-speed;
        if (this.z < 1){
          this.z = windowWidth;
          this.x = random(-width/2, width/2);
          this.y = random(-height/2, height/2);
          this.pz = this.z;
        }
    }

    this.show = function(){
      fill(255);
      var sx = map(this.x/this.z, 0, 1, 0, width);
      var sy = map(this.y/this.z, 0, 1, 0, height);
      noStroke();
      var r = map(this.z, 0, width/2, 5, 0);
      ellipse(sx, sy, r, r);
      var px = map(this.x/this.pz, 0, 1, 0, width);
      var py = map(this.y/this.pz, 0, 1, 0, height);
      this.pz = this.z;
      stroke(255);
      line(px, py, sx, sy);
    }
}
