(function() {
  $(function() {
    var count, result;
    result = [];
    count = 0;
    // Loop through each reel
    return $('.reel-outer').each(function() {
      var $this, index, spinPlus;
      $this = $(this);
      index = $this.index();
      spinPlus = 0;
      // When the spin link is clicked...
      return $('.spin').click(function() {
        var duration, spin, type;
        // Choose a random symbol between 1 and 10
        type = parseInt(Math.random() * 5) + 4;
        // Define a spin duration between 1 and 10000
        duration = parseInt(Math.random() * 3000) + 2000;
        // Increment the total spin value
        spinPlus += 3600;
        // Multiply type by 36 (degrees) and add to the total
        spin = type * 36 + spinPlus;
        // Apply the transition duration and rotation
        return $this.find('.reel').css({
          WebkitTransitionDuration: `${duration}ms`,
          WebkitTransform: `rotateX(-${spin}deg)`
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7QUFDQSxRQUFBLEtBQUEsRUFBQTtJQUFBLE1BQUEsR0FBUztJQUNULEtBQUEsR0FBUyxFQURUOztXQUlBLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUUsSUFBbEIsQ0FBdUIsUUFBQSxDQUFBLENBQUE7QUFDckIsVUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBO01BQUEsS0FBQSxHQUFXLENBQUEsQ0FBRSxJQUFGO01BQ1gsS0FBQSxHQUFXLEtBQUssQ0FBQyxLQUFOLENBQUE7TUFDWCxRQUFBLEdBQVcsRUFGWDs7YUFLQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsS0FBWCxDQUFpQixRQUFBLENBQUEsQ0FBQTtBQUdmLFlBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBOztRQUFBLElBQUEsR0FBVyxRQUFBLENBQVUsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLENBQTFCLENBQUEsR0FBZ0MsRUFBM0M7O1FBR0EsUUFBQSxHQUFXLFFBQUEsQ0FBVSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsSUFBMUIsQ0FBQSxHQUFtQyxLQUg5Qzs7UUFNQSxRQUFBLElBQVksS0FOWjs7UUFTQSxJQUFBLEdBQVcsSUFBQSxHQUFPLEVBQVAsR0FBWSxTQVR2Qjs7ZUFZQSxLQUFLLENBQUMsSUFBTixDQUFXLE9BQVgsQ0FBbUIsQ0FBQyxHQUFwQixDQUNFO1VBQUEsd0JBQUEsRUFBMEIsQ0FBQSxDQUFBLENBQUksUUFBSixDQUFjLEVBQWQsQ0FBMUI7VUFDQSxlQUFBLEVBQWlCLENBQUEsU0FBQSxDQUFBLENBQWEsSUFBYixDQUFtQixJQUFuQjtRQURqQixDQURGO01BZmUsQ0FBakI7SUFOcUIsQ0FBdkI7RUFMQSxDQUFGO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIkIC0+XG4gIHJlc3VsdCA9IFtdXG4gIGNvdW50ICA9IDBcblxuICAjIExvb3AgdGhyb3VnaCBlYWNoIHJlZWxcbiAgJCgnLnJlZWwtb3V0ZXInKS4gZWFjaCAtPlxuICAgICR0aGlzICAgID0gJCh0aGlzKVxuICAgIGluZGV4ICAgID0gJHRoaXMuaW5kZXgoKVxuICAgIHNwaW5QbHVzID0gMFxuXG4gICAgIyBXaGVuIHRoZSBzcGluIGxpbmsgaXMgY2xpY2tlZC4uLlxuICAgICQoJy5zcGluJykuY2xpY2sgLT5cblxuICAgICAgIyBDaG9vc2UgYSByYW5kb20gc3ltYm9sIGJldHdlZW4gMSBhbmQgMTAgICAgICAgICBcbiAgICAgIHR5cGUgICAgID0gcGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiA1KSkgKyA0XG5cbiAgICAgICMgRGVmaW5lIGEgc3BpbiBkdXJhdGlvbiBiZXR3ZWVuIDEgYW5kIDEwMDAwXG4gICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KChNYXRoLnJhbmRvbSgpICogMzAwMCkpICsgMjAwMFxuXG4gICAgICAjIEluY3JlbWVudCB0aGUgdG90YWwgc3BpbiB2YWx1ZVxuICAgICAgc3BpblBsdXMgKz0gMzYwMFxuXG4gICAgICAjIE11bHRpcGx5IHR5cGUgYnkgMzYgKGRlZ3JlZXMpIGFuZCBhZGQgdG8gdGhlIHRvdGFsXG4gICAgICBzcGluICAgICA9IHR5cGUgKiAzNiArIHNwaW5QbHVzXG5cbiAgICAgICMgQXBwbHkgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gYW5kIHJvdGF0aW9uXG4gICAgICAkdGhpcy5maW5kKCcucmVlbCcpLmNzc1xuICAgICAgICBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb246IFwiI3sgZHVyYXRpb24gfW1zXCJcbiAgICAgICAgV2Via2l0VHJhbnNmb3JtOiBcInJvdGF0ZVgoLSN7IHNwaW4gfWRlZylcIlxuXG4iXX0=
//# sourceURL=coffeescript
