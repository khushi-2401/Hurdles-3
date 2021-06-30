class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();

        var playerCountRef = await database.ref('playerCount').once("value");

         if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }

        form = new Form()
        form.display();
      }
  
      runner1 = createSprite(700,200);
      runner1.scale = 0.5;
      runner1.setCollider("rectangle", 0, 0)
        runner1.debug = true;
        runner1.velocityX = 2;
      runner1.addImage(Image1);

      runner2 = createSprite(200,150);
      runner2.addImage(Image2);
      runner2.scale = 0.5;
      runner2.setCollider("rectangle", 0, 0)
        runner2.debug = true;
        runner2.velocityX = 2;

      runner3 = createSprite(300,200);
      runner3.scale = 0.5;
      runner3.setCollider("rectangle", 0, 0)
        runner3.debug = true;
        runner3.velocityX = 2;
      runner3.addImage(Image3);

      runner4 = createSprite(100,400);
      runner4.scale = 0.5;
      runner4.setCollider("rectangle", 0, 0)
        runner4.debug = true;
        runner4.velocityX = 2;
      runner4.addImage(Image4);

      runner5 = createSprite(100,500);
      runner5.scale = 0.5;
      runner5.setCollider("rectangle", 0, 0)
        runner5.debug = true;
        runner5.velocityX = 2;
      runner5.addImage(Image5);

      runner6 = createSprite(100,600);
      runner6.addImage(Image6);
      runner6.scale = 0.5;
      runner6.setCollider("rectangle", 0, 0)
        runner6.debug = true;
        runner6.velocityX = 2;

      runners = [runner1, runner2, runner3, runner4, runner5, runner6];

      invisibleGround = createSrite(200,300,1000,600)
    }
  
    play(){
      form.hide();

      spawnObstacles();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(trackImg , 0,-displayWidth*4,displayHeight, displayWidth*5 );

        var index = 0;

        var x;
        var y = 175;;
  
        for(var plr in allPlayers){
          index = index + 1 ;
  
          y = y + 200;

          x = displayWidth - allPlayers[plr].distance;

          runners[index-1].x = x;
          runners[index-1].y = y;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);

            runners[index - 1].shapeColor = "red";
            
          }
       
        }
             drawSprites();
      }
  
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.velocityY = -10;
      }
  
      


      if(player.distance > 3860){
        gameState = 2;
      }
     
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  
  function spawnObstacles(){
    if (frameCount % 360 === 0) {

      var obstacle = createSprite(800, 390);

      obstacle.velocityX = -2;
      obstacle.addImage(hey);
      obstacle.scale = 0.7;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
 

  }
  }