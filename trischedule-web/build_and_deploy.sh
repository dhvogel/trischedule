VERSION=0.1.4

docker build -t gcr.io/trischedule/trischedule-web:$VERSION .
docker push gcr.io/trischedule/trischedule-web:$VERSION
gcloud beta run deploy --image gcr.io/trischedule/trischedule-web:$VERSION --platform managed

