<#import "template-web.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo displayWide=(realm.password && social.providers??); section>
    <#if section = "form">
    <div id="kc-form" <#if realm.password && social.providers??>class="${properties.kcContentWrapperClass!}"</#if>>
      <div id="kc-form-wrapper" <#if realm.password && social.providers??>class="${properties.kcFormSocialAccountContentClass!} ${properties.kcFormSocialAccountClass!}"</#if>>
        <#if realm.password>
            <form id="kc-form-login" action="${url.loginAction}" ng-controller='loginFormController' method="post" ng-submit="onFormSubmit($event)" class="margin-bottom-30">
                
                <div class="form-group mcb-form">
                        
                        <label for="bb_input_0" data-role="label" class="">${msg('userId')}</label>
                        <input type="text" tabindex="1" class="form-control" id="username" name="username" value="${(login.username!'')}"  placeholder="${msg('userIdPlaceholder')}">
                    
                </div>
                <div class="form-group mcb-form">              
                            <input readonly id="rsaPublicKey" class="${properties.kcInputClass!} form-control-plaintext" type="hidden" name="rsaPublicKey" value="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJv2Qot2y7g4em5r6MyKLxmZsfZy4Ybb0WbIb4a+FJvgoGmR9/xj28dUTto5fiy2zjr9h35D4PLZkqA3bmEcFBsCAwEAAQ==" />
                            
                        <label for="bb_input_1"  class="">${msg('password')}</label>
                        <input class="form-control" tabindex="2" id="password" name="password" ng-model="password" autocomplete="off" type="password"  placeholder="${msg('passwordPlaceholder')}">
                                
                </div>

                <div class="form-group mcb-form margin-top-20">
                    <p class="text-center"><a href="/" class="link-text">${msg('forgotPasswordLink')}</a></p>
                </div>

                <div id="kc-form-buttons" class="${properties.kcFormGroupClass!} ${properties.bbButtonContainerClass}">
                   <button  type="submit" aria-label="Favourite" class="btn-lg btn-block mcb-btn mcb-btn-primary" ng-reflect-type="button"> Login </button>
                    
                    <button  type="button" aria-label="Favourite" class="btn-lg btn-block mcb-btn mcb-btn-secondary" ng-reflect-type="button"> Back </button>
                    
                    <button  type="button" aria-label="Favourite" class="btn-lg btn-block mcb-btn mcb-btn-cancel margin-bottom-20" ng-reflect-type="button"> Cancel </button>
                </div>
            </form>
        </#if>
        </div>
      </div>
    </#if>

</@layout.registrationLayout>