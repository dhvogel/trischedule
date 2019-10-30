VERSION=0.1.1

gcloud --project trischedule builds submit --tag gcr.io/trischedule/trischedule-web:$VERSION
gcloud --project trischedule beta run deploy trischedule-web --image gcr.io/trischedule/trischedule-web:$VERSION --platform managed --region us-central1 --memory 512 --allow-unauthenticated
