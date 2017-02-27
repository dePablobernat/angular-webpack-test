export default /*@ngInject*/ function(Listing) {
    this.applicationName = 'EpicLabs';

    Listing.get().$promise.then((listingData) => {
        this.listing = listingData;
        console.log(this.listing);
    });
}
