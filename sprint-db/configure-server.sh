set -m

    /entrypoint.sh couchbase-server &

    sleep 60

    # Setup initial cluster/ Initialize Node
    couchbase-cli cluster-init -c db --cluster-name $CLUSTER_NAME --cluster-username $COUCHBASE_ADMINISTRATOR_USERNAME \
    --cluster-password $COUCHBASE_ADMINISTRATOR_PASSWORD --services data,index,query,fts --cluster-ramsize 512 --cluster-index-ramsize 512 \
    --cluster-fts-ramsize 512 --index-storage-setting default \

    # Setup Administrator username and password
    curl -v http://db:8091/settings/web -d port=8091 -d username=$COUCHBASE_ADMINISTRATOR_USERNAME -d password=$COUCHBASE_ADMINISTRATOR_PASSWORD


    sleep 15

    # Setup Bucket
    couchbase-cli bucket-create -c db:8091 --username $COUCHBASE_ADMINISTRATOR_USERNAME \
    --password $COUCHBASE_ADMINISTRATOR_PASSWORD  --bucket $COUCHBASE_BUCKET  --enable-index-replica 1 --bucket-type couchbase \
    --bucket-ramsize 256

	# Create Primary Index on Bucket
	sleep 30
	
	curl -X POST -v -u $COUCHBASE_ADMINISTRATOR_USERNAME:$COUCHBASE_ADMINISTRATOR_PASSWORD \
	http://db:8093/query/service \
	-d statement='CREATE%20PRIMARY%20INDEX%20ON%20'$COUCHBASE_BUCKET'%20USING%20GSI'
	
    sleep 15

    # Setup RBAC user using CLI
    couchbase-cli user-manage -c db:8091 --username $COUCHBASE_ADMINISTRATOR_USERNAME --password $COUCHBASE_ADMINISTRATOR_PASSWORD \
    --set --rbac-username $COUCHBASE_RBAC_USERNAME --rbac-password $COUCHBASE_RBAC_PASSWORD --rbac-name $COUCHBASE_RBAC_NAME --roles admin --auth-domain local
		
	sleep 15

    # Setup Above bucket user using CLI
    couchbase-cli user-manage -c db:8091 --username $COUCHBASE_ADMINISTRATOR_USERNAME --password $COUCHBASE_ADMINISTRATOR_PASSWORD \
	--set --rbac-username $COUCHBASE_BUCKET --rbac-password $COUCHBASE_BUCKET_PASSWORD --rbac-name $COUCHBASE_BUCKET_NAME \
		--roles admin --auth-domain local
    
    sleep 15
    #cbimport json -c couchbase://db -u $COUCHBASE_ADMINISTRATOR_USERNAME -p $COUCHBASE_ADMINISTRATOR_PASSWORD   -b $COUCHBASE_BUCKET -f lines -d file:////pclines.json -t 4 -g device::%id%
    cbimport json -c couchbase://db -u $COUCHBASE_ADMINISTRATOR_USERNAME -p $COUCHBASE_ADMINISTRATOR_PASSWORD   -b $COUCHBASE_BUCKET -f lines -d file:////Device.json -t 4 -g Device::%SKU%

    fg 1
