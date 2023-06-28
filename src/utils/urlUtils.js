const encodeFormData = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
}

const createUrlWithQueryParams = (baseUrl, queryParams) => {
    return `${baseUrl}?${encodeFormData(queryParams)}`
}

module.exports = {
    encodeFormData,
    createUrlWithQueryParams
}