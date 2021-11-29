#docker build -f Dockerfile -t mhhub.mhsolution.vn/mh_landing_page:v1.0.0 .
#docker push mhhub.mhsolution.vn/mh_landing_page:v1.0.0

ssh centos@18.140.237.112 "docker pull mhhub.mhsolution.vn/mh_landing_page:v1.0.0"
ssh centos@18.140.237.112 "docker rm -f mh-lading-page"
ssh centos@18.140.237.112 "docker run --name mh-lading-page -p 3005:3000 -d mhhub.mhsolution.vn/mh_landing_page:v1.0.0"
ssh centos@18.140.237.112 "docker images | grep 'mhhub' |  xargs docker rmi"
