var Command = {};

Command.getOperation = function() {
    // return the value from the list of command line arguments
    // representing the operation to be performed  (add or find)
    // the first commanline argument provided is always the operation
    // this means that in process.argv the operation name will be at
    // index two, so we simply return the element at index two
    return process.argv[2];
};

Command.getOperationData = function() {
    // return the value from the list of command line arguments
    // representing the data to be used for the operation
    // Since the data is always provided as the next command-line
    // argument after the operation it can be accessed as the element
    // at index three in process.argv
    return process.argv[3];
};

module.exports = Command;
