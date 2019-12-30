VERSION=0.1.3

gcloud --project trischedule builds submit --tag gcr.io/trischedule/trischedule-backend:$VERSION
gcloud --project trischedule beta run deploy trischedule-backend --image gcr.io/trischedule/trischedule-backend:$VERSION --platform managed --region us-central1 --memory 512 --allow-unauthenticated
