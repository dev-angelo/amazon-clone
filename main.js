import SlideService from './SlideService.js';
import SearchController from './SearchController.js'
import SearchView from './SearchView.js'
import SearchModel from './SearchModel.js'

window.addEventListener('DOMContentLoaded', () => {
    const url = 'http://220.78.96.186:8080';

    //const searchController = new SearchController(new SearchModel(), new SearchView());
    const slideService = new SlideService(url);
});