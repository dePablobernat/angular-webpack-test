export default /*@ngInject*/ function(Listing) {
    this.applicationName = 'Webpack-Angular';

    Listing.get().$promise.then((listingData) => {
        this.listing = listingData;
        console.log(this.listing.companies);
    });
}
