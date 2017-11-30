"use strict";
var MyResponse = (function () {
    function MyResponse(myResponse, result, message) {
        this.result = result ? true : (myResponse ? (myResponse.result ? true : false) : false);
        this.resultObj = (myResponse && myResponse.result) ? ((Object.keys(myResponse.result).length > 0) ?
            new JsonResultStatus(myResponse.result) : new JsonResultStatus()) : new JsonResultStatus();
        this.data = (myResponse && myResponse.data) ? ((Object.keys(myResponse.data).length > 0) ? myResponse.data : null) : null;
        this.message = message ? message : (myResponse ? (myResponse.result ? myResponse.result.message : null) : null);
    }
    return MyResponse;
}());
var JsonResultFlag;
(function (JsonResultFlag) {
    JsonResultFlag[JsonResultFlag["Succeeded"] = 0] = "Succeeded";
    JsonResultFlag[JsonResultFlag["Failed"] = 1] = "Failed";
    JsonResultFlag[JsonResultFlag["Error"] = 2] = "Error";
    JsonResultFlag[JsonResultFlag["NotFound"] = 3] = "NotFound";
    JsonResultFlag[JsonResultFlag["DbRetry"] = 4] = "DbRetry";
    JsonResultFlag[JsonResultFlag["Existed"] = 5] = "Existed";
    JsonResultFlag[JsonResultFlag["Forbidden"] = 6] = "Forbidden";
    JsonResultFlag[JsonResultFlag["Empty"] = 7] = "Empty";
    JsonResultFlag[JsonResultFlag["TaskCompleted"] = 8] = "TaskCompleted";
    JsonResultFlag[JsonResultFlag["Redirect"] = 9] = "Redirect";
})(JsonResultFlag || (JsonResultFlag = {}));
;
var JsonResultStatus = (function () {
    function JsonResultStatus(result) {
        this.result = result && result.result;
        this.message = result && result.message;
        this.redirectUrl = result && result.redirectUrl;
        this.successList = result && result.successList;
        this.nonSuccessList = result && result.nonSuccessList;
        this.notFoundList = result && result.notFoundList;
        this.paramList = result && result.paramList;
        this.objectId = result && result.objectId;
        this.resultObjectId = result && result.resultObjectId;
        this.resultObjectString = result && result.resultObjectString;
    }
    JsonResultStatus.prototype.GetResultObject = function (resultObject) {
        return resultObject.GetItem(this.resultObjectId);
    };
    JsonResultStatus.prototype.SetResultObject = function (resultObject, value) {
        resultObject.SetItem(this.resultObjectId, value);
    };
    return JsonResultStatus;
}());
