class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //Add a message property to the instace of the class
    this.code = errorCode; //Adds a code property
  }
}

module.exports = HttpError;
