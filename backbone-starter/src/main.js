// // Exercise 1

// var Player = Backbone.Model.extend({
//     hurt: function (num) {
//         this.set({ hp: this.get('hp') - num });
//     }
// });

// var Entity = Backbone.Model.extend({
//     defaults: {
//         hp: 20,
//         strength: 9,
//     },
//     attack: function(target) {
//         if (target.get('hp') - this.get('strength') >= 0)
//             target.set({ hp: target.get('hp') - this.get('strength') });
//         else
//             target.set({ hp: 0 });
//     }
// });

// var player = new Entity({ hp: 45, strength: 17 });
// var enemy = new Entity();

// console.log('Player should have 45 hp:', player.get('hp'));
// console.log('Enemy should have 20 hp:', enemy.get('hp'));

// player.attack(enemy);
// enemy.attack(player);
// console.log('Player should have 36 hp:', player.get('hp'));
// console.log('Enemy should have 3 hp:', enemy.get('hp'));

// player.attack(enemy);
// console.log('Enemy should have 0 hp:', enemy.get('hp'));


// var mario = new Player({ hp: 100 });
// console.log('Mario should have 100 hp:', mario.get('hp'));

// mario.hurt(25);
// console.log('Mario should have 75 hp:', mario.get('hp'));



// Lesson thing # 7

// var Todo = Backbone.Model.extend({

//   uncheck: function () {
//     this.set({ complete: false })
//   }
// });

// window.todo = new Todo({ name: 'Learn models' });

// //
// // Listen for ALL property changes
// //
// todo.on('change', function (model) {
//   console.log("\nSomething changed in model: " + model.get('name'));
// });

// //
// // Listen for ONLY a property change on `complete`
// //
// todo.on('change:complete', function (model, newComplete) {
//   if (newComplete) {
//     alert(model.get('name') + ' is now complete!');
//   }
//   else {
//     alert("Oops, " + model.get('name') + " isn't done yet.");
//   }
// });

// Lesson thing # 8

// var KungFuBoard = Backbone.Model.extend ({
//     initialize: function (options) {
//         this.size = options.hp;
//         this.on('change', this.break);
//     },
//     damage: function(amount) {
//         if (this.get('hp') - amount >= 0)
//         this.set({ hp: this.get('hp') - amount });
//         else
//             this.set({hp: 0});
//     },
//     break: function() {
//         if (this.get('hp') === 0)
//             console.log("A " + this.size + " board breaks!");
//         else
//             console.log("Still alive with hp of: " + this.get('hp'));
//     }
// });

// var smallBoard = new KungFuBoard({ hp: 5 });
// var bigBoard = new KungFuBoard({ hp: 10 });

// smallBoard.damage(4);
// smallBoard.damage(3);
// console.log('Small board hp should be zero:', smallBoard.get('hp'));

// bigBoard.damage(4);
// bigBoard.damage(4);
// bigBoard.damage(4);
// console.log('Big board hp should be zero:', bigBoard.get('hp'));

// // * size stays constant


// Lesson thing #9

var Stock = Backbone.Model.extend({
    change: function(amount) {
        this.price += amount;
    }
});

var StockView = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change:price', this.render);
    },

    onPriceChange: function(model) {
        console.log('New price for', 'onPriceChange', this.model.get('price'));
        this.render();
    },

    render: function(){
       $(this.el).html('<p>I am a stock price of:  ' + this.model.get('price') + ' </p>');
    }
});

var stock = new Stock({
  name: 'YHOO',
  price: 34.03,
});
var stockView = new StockView({ model: stock });

// Render and add to page
stockView.render();
$('.stocks').append(stockView.el);

// Perform an update every two seconds
var updateLoop = function () {
  var priceChangeAmount = Math.round(Math.random() * 300 - 150) / 100;
  stock.change(priceChangeAmount);

  setTimeout(updateLoop, 2000);
};
updateLoop();
