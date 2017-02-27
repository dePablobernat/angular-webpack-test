export default /*@ngInject*/ function($scope, $log, Listing) {
    this.applicationName = 'EpicLabs';
    this.$log = $log;
    this.$scope = $scope;
    this.data = [];

    Listing.get()
    .then(response => {
        this.data = response.data;
        this.$log.debug('DATA: ', this.data);
    });
}
