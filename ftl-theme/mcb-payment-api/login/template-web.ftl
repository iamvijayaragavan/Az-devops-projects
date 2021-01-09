<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayWide=false>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="${properties.kcHtmlClass!}" ng-app="mcbPaymentAPIApp">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">

    <#if properties.meta?has_content>
        <#list properties.meta?split(' ') as meta>
            <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
        </#list>
    </#if>
    <title>${msg("loginTitle",(realm.displayName!''))}</title>
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
    <script src="${url.resourcesPath}/js/vendor/angularjs/1.7.9/angular.min.js" type="text/javascript"></script>
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
        </#list>
    </#if>
    <#if properties.scripts?has_content>
        <#list properties.scripts?split(' ') as script>
            <script src="${url.resourcesPath}/${script}" type="text/javascript"></script>
        </#list>
    </#if>
    <#if scripts??>
        <#list scripts as script>
            <script src="${script}" type="text/javascript"></script>
        </#list>
    </#if>
</head>

<body class="">
  <div class="container-fluid">
        
        <div class="row mcb-main-container justify-content-md-center">
            <div class="col-lg-7 col-md-12 col-sm-12 d-none d-lg-block">
                <div class="ib-login-banner"></div>
            </div>
            <div class="col-lg-5 col-md-7 col-sm-12 col-md-auto">
                <div >
                    <div class="mcb-logo"></div>
                    <h1> ${msg("loginHeaderText1")} <br> ${msg("loginHeaderText2")} </h1>
                    <p class="info-text-1"> ${msg('loginDesc')} </p>
                    <div id="kc-content">
                    
                        <div id="kc-content-wrapper">

                        <#if displayMessage && message?has_content>
                            <#if message.type == 'error'>
                                <div class="alert alert-danger ${properties.bbAlert} mcb-error" >
                                    <span class="mcb-error-icon"><img src="${url.resourcesPath}/img/dangerIcon.svg" /></span>
                                    <span class="kc-feedback-text mcb-error-text">${message.summary?no_esc}</span>
                                    <span class="mcb-close-icon" onclick="this.parentElement.remove();"><img src="${url.resourcesPath}/img/closeIcon.svg" /></span>
                                </div>
                            </#if>
                        </#if>

                        <#nested "form">

                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- Bitmap container -->
            <div class="row col-lg-12 col-md-12 col-sm-12 text-center bitmap-container">
                <div class="bitmapImg"></div>
                <p class="info-text-2">
                    ${msg('loginFooterDesc')}
                    <br>
                    <br>
                    <a href="/" class="link-text">${msg('loginFootelLinkText')}</a>
                </p>
            </div>
        
    </div>
    
    <script src="${url.resourcesPath}/js/vendor/prng4.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/rng.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/base64.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/jsbn.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/rsa_library.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/encryption_rsa.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/mobile-detect.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/forge.min.js"></script>     
    <script src="${url.resourcesPath}/js/core.js" type="text/javascript"></script>
    <script src="${url.resourcesPath}/js/vendor/jsencrypt.min.js"></script>    

    <script src="${url.resourcesPath}/js/controllers/loginForm.controller.js" type="text/javascript"></script>

</body>
</html>
</#macro>
