import angular from 'angular';

function Listing($http) {
    this.$http = $http;
}

Listing.prototype.get = function() {
    return this.$http({method: 'GET', url: '/app/listing.json'});
};

angular
.service('Listing', Listing);
