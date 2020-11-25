
//making the function of collide
function hasCollided(lbullet, lwall){

    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
  
    if(bulletRightEdge >= wallLeftEdge){
  
      return true;
    }
  
    return false;
  
  
  }
