var expect = function(val) {
  return {
      toBe: function(secondVal){
          if (secondVal !== val)
              throw new Error("Not Equal")
          else return true
      },
      notToBe: function(secondVal){
          if (secondVal === val)
              throw new Error("Equal")
          else return true
      }
  }
};