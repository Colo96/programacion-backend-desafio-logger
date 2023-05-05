const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
}

class HttpError {
    constructor(description, status = 500, details = null) {
        this.description = description;
        this.statusNumber = status;
        this.details = details;
    }
}

module.exports = {
    HTTP_STATUS,
    HttpError,
};