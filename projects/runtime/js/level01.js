var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
            
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createsawblade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle); 
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createsawblade(500,470);
        createsawblade(700,360);
        createsawblade(900,470);
        createsawblade(1100,360);
        
       var enemy = game.createGameItem('enemy',25);
       var redSquare = draw.rect(50,50,'red');
       redSquare.x = -25;
       redSquare.y = -25;
       enemy.addChild(redSquare);
       enemy.x = 1000;
       enemy.y = groundY-50;
       game.addGameItem(enemy);
       enemy.velocityX = - 10;
       enemy.rotationalVelocity = 10;
       enemy.onPlayerCollision = function(){
           console.log('The enemy has hit halle');
           game.changeIntegrity(-10);
           enemy.fadeOut();
       };
       enemy.onProjectileCollision = function(){
           console.log('Halle has hit the enemy');
           game.increaseScore(100);
            enemy.fadeOut();
       };
       
       function createmoon(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 0;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            var obstacleImage = draw.bitmap('img/moon.png');
            myObstacle.velocityX = -.7;
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            myObstacle.scaleX = .1;
            myObstacle.scaleY = .1;
            
            myObstacle.onPlayerCollision = function(){
           console.log('The enemy has hit halle');
            game.increaseScore(9900);
            myObstacle.fadeOut();
 };
       }
       createmoon(1600,360);
      

            
              
              
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}