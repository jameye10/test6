(function(){
    var app = angular.module('store-directives', []);

    app.directive("productAuthor", function() {
      return {
        restrict: 'E',
        templateUrl: "product-author.html"
      };
    });

    app.directive("productLink", function() {
      return {
        restrict:"A",
        templateUrl: "product-link.html"
      };
    });

    app.directive("productTabs", function() {
      return {
        restrict: "E",
        templateUrl: "product-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("productGallery", function() {
      return {
        restrict: "E",
        templateUrl: "product-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageUrl){
            this.current = imageUrl || 0;
          };
        },
        controllerAs: "gallery"
      };
    });
  })();
