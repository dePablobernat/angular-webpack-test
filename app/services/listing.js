export default /*@ngInject*/ function($resource) {
    return $resource('listing.json', {}, {
        get: {
            method: 'GET'
        }
    });
}

