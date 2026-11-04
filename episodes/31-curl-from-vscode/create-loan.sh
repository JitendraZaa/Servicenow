#!/bin/sh
# Create a loan through the Table API as an integration user (episode 31).
# curl asks for the password itself; nothing is stored or passed on the command line.
# @author Jitendra Zaa
set -eu

: "${SN_INSTANCE:?Set SN_INSTANCE to your instance name, for example dev123456}"
: "${SN_USER:?Set SN_USER to the integration user name}"
: "${RIG_SYS_ID:?Set RIG_SYS_ID to the sys_id of an available rig}"
: "${BORROWER_SYS_ID:?Set BORROWER_SYS_ID to the sys_id of the borrower user}"

# a sys_id is 32 characters, 0 to 9 and a to f
for id in "$RIG_SYS_ID" "$BORROWER_SYS_ID"; do
    case "$id" in
        *[!0-9a-f]*) echo "Not a sys_id: $id" >&2; exit 1 ;;
    esac
    if [ "${#id}" -ne 32 ]; then
        echo "A sys_id has 32 characters: $id" >&2
        exit 1
    fi
done

DIR=$(dirname "$0")
# dates are relative to today: no calendar date is typed anywhere
DUE_DAYS=${DUE_DAYS:-14}
START_DATE=$(date +%Y-%m-%d)
DUE_DATE=$(date -v+"${DUE_DAYS}"d +%Y-%m-%d 2>/dev/null || date -d "+${DUE_DAYS} days" +%Y-%m-%d)

BODY=$(sed -e "s/RIG_SYS_ID/$RIG_SYS_ID/" -e "s/BORROWER_SYS_ID/$BORROWER_SYS_ID/" \
    -e "s/START_DATE/$START_DATE/" -e "s/DUE_DATE/$DUE_DATE/" "$DIR/loan-payload.json")

curl --silent --show-error --user "$SN_USER" \
    --request POST "https://${SN_INSTANCE}.service-now.com/api/now/table/x_arcwl_loans_loan" \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --data "$BODY" \
    --write-out '\nHTTP status: %{http_code}\n'
