class oAuth {
    constructor(method, el, {clientId, apiKey, accessType, responseType, scope, redirectUrl}) {
        const clientSecret = "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";
        const config = {clientId, apiKey, accessType, responseType, scope, redirectUrl};
        apiKey = "AIzaSyCPKkHFWB03Ub5Xo1ee_XqumFq1kJsv2MY";
    }

    /* oAuth 요청*/
    request(url, callback, errorCallback) {
        fetch(url)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                if (typeof callback === "function") {
                    callback(data);
                }
                console.log(data);
            })
            .catch(error => {
                if (typeof errorCallback === "function") {
                    errorCallback(error);
                } else {
                    console.error(error);
                }
            });
    }

    /** Google Api */
    google = {
        getUrl: ({clientId, apiKey, accessType, responseType, scope, redirectUrl}) => {
            const googleOAuthUrl = 'https://accounts.google.com/o/oauth2/auth?'
            const params = {
                clientId: clientId,
                redirectUrl: redirectUrl,
                scope: scope,
                responseType: responseType,
                accessType: accessType
            }
            return `${googleOAuthUrl}client_id=${params.clientId}&redirect_uri=${params.redirectUrl}&scope=${params.scope}&response_type=${params.responseType}&access_type=${params.accessType}`;
        },
        encodeUrl: (url) => {
            return encodeURIComponent(url)
        },
        submit: (url) => {
            window.location.href = url;
        }
    };

    facebook = {};
    kakaoTalk = {};
    naver = {};
}