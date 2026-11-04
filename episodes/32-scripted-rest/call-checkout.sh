#!/bin/sh
# Call the checkout endpoint with a JSON file, e.g.: sh call-checkout.sh checkout-ok.json
# curl asks for the password itself; nothing is stored or passed on the command line.
# @author Jitendra Zaa
set -eu

: "${SN_INSTANCE:?Set SN_INSTANCE to your instance name, for example dev123456}"
: "${SN_USER:?Set SN_USER to the integration user name}"
FILE=${1:?Give the JSON file to send}

curl --silent --show-error --user "$SN_USER" \
    --request POST "https://${SN_INSTANCE}.service-now.com/api/x_arcwl_loans/arcwell_loans/checkout" \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --data @"$FILE" \
    --write-out '\nHTTP status: %{http_code}\n'
