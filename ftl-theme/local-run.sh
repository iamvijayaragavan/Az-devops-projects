#copy theme to identity server
cp -r mcb-payment-api/ ../../mcb-backbase-core-product/identity/src/main/resources/themes/

#run identity server
#../../mcb-backbase-core-product/identity/local-run.sh

# Save where you are and cd to other dir
cd ../../mcb-backbase-core-product/identity/

sh local-run.sh

# Get back where you were at the beginning.
#cd /home/arunthakur/MCBPayments/mcb-payment-api-web/ftl-theme