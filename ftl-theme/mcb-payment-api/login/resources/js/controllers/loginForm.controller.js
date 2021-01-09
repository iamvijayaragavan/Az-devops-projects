//Angular controller of IB Authentication

mcbPaymentAPIApp.controller('loginFormController', function loginFormController($scope, $http, $httpParamSerializerJQLike) {

    var tempkey = document.getElementById("rsaPublicKey").value;
    
    const environment = {
        publicKey: `-----BEGIN PUBLIC KEY-----
        ${tempkey}
    -----END PUBLIC KEY-----
    `
    };

    $scope.onFormSubmit = ($event) => {

        $event.preventDefault();
        var url = document.getElementsByTagName("form")[0].getAttribute("action");
        var username = document.getElementById("username").value;
        var password = $scope.password;
        let RSA = new JSEncrypt();
        RSA.setPublicKey(environment.publicKey);
        var encryptedPass = RSA.encrypt(password);

        var request = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data: $httpParamSerializerJQLike({
                username: username,
                password: encryptedPass
            })
        };
        $http(request)
            .then(function (response, status, headers, config) {
                document.write(response.data);
            }, function (data, status, headers, config) {
                location.reload();
            });

    }

});