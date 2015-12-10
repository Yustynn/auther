'use strict';

app.controller('StoryListCtrl', function($scope, stories, Story, users, user, AuthFactory) {
    $scope.stories = stories;
    $scope.users = users;

    $scope.newStory = new Story();

    $scope.isAdmin = AuthFactory.isAdmin;

    $scope.user = function(){
    	var result = AuthFactory.getUser();
    	console.log(result);
    	return result;
    }

    $scope.removeStory = function(story) {
        story.destroy()
            .then(function() {
                var idx = $scope.stories.indexOf(story);
                $scope.stories.splice(idx, 1);
            });
    };

    $scope.addStory = function() {
        $scope.newStory.save()
            .then(function(created) {
                created.author = $scope.newStory.author;
                $scope.newStory = new Story();
                $scope.stories.unshift(created);
            });
    };
});
