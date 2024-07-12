var createCounter = function(init) {
  let value = init;

  return {
      increment: function(){
          return value += 1;
      },
      decrement: function(){
          return value -= 1;
      },
      reset: function(){
          return value = init;
      }
  }
};