
var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {

    $scope.messages = [
        {
            'sender':'USER',
            'text':'hi',
            'time':'9:52 AM'
        },
         {
            'sender':'BOT',
            'text':'may i help you',
            'time':'9:53AM'
         },
          {
             'sender':'USER',
             'text':'news about Modi',
             'time':'9:54 AM'
          },
           {
              'sender':'BOT',
              'text':'give me a moment',
              'time':'9:55 AM'
           }
    ]
});