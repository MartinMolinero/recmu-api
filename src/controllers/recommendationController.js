// const spotifyService = require('../services/spotifyService')
const spotifyService = require('../services/spotifyService')
const spotifyInstance = spotifyService.getInstance()

const getAllRecommendations = async(req, res) => {
    const {query} = req
    const recommendations = await spotifyInstance.searchType(query)
    res.send(recommendations)
};

const getEntityDetail = (req, res) => {
    res.send("Get detail");
};

module.exports = {
    getAllRecommendations, 
    getEntityDetail
}
