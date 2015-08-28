Now modify the controller so that  $scope.currentTime is updated every second

-----------------------------

## HINTS

While Javascript provides [window.setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) to execute code on the next event loop following a delay,
this code would not be easily testable with Angular. Instead Angular provides a wrapper [```$interval```](https://docs.angularjs.org/api/ng/service/$interval) which you can inject into your controller