import SlideService from './Slide/SlideService.js';
import SearchController from './Search/SearchController.js'
import SearchView from './Search/SearchView.js'
import SearchModel from './Search/SearchModel.js'

window.addEventListener('DOMContentLoaded', () => {
    const url = 'https://220.78.96.186:8080';

    const searchController = new SearchController(new SearchModel(), new SearchView());
    const slideService = new SlideService(url);
});