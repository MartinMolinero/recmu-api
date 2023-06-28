const axios = require('axios');
const { encodeFormData, createUrlWithQueryParams } = require('../utils/urlUtils');
const { genericPluralize } = require('../utils/genericUtils')

const dotenv = require("dotenv")
dotenv.config()


const SEARCH_LIMIT = 5
const URLS = {
    AUTHORIZATION: 'https://accounts.spotify.com/api/token',
    SEARCH: 'https://api.spotify.com/v1/search'
}

const getFormEncodedContentType = () => ({
    'Content-Type': 'application/x-www-form-urlencoded',
})

const getAuthorizationBodyRequest = () => ({
    'grant_type': 'client_credentials',
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
})

module.exports = class SpotifyService {

    static _instance;

    constructor() {
        this.#retrieveToken()
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new SpotifyService();
        return this._instance;
    }

    
    // private methods
    #retrieveToken = async()  => {
        const { data } = await axios.post(URLS.AUTHORIZATION, encodeFormData(getAuthorizationBodyRequest()), getFormEncodedContentType())
        this.token = data.access_token
    }

    #getAuthHeaders = () => ({headers: {'Authorization': `Bearer ${this.#getToken()}`}})

    #getToken = () => {
        return this.token
    }


    searchType = async(query) => {
        const {value, type} = query
        const queryObject = {
            q: value,
            type,
            limit: SEARCH_LIMIT
        }

        const { data } = await axios.get(createUrlWithQueryParams(URLS.SEARCH, queryObject), this.#getAuthHeaders())
        
        return data[genericPluralize(query.type)]
        
    }

    

    
}