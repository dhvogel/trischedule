VERSION=0.1.0

gcloud --project trischedule builds submit --tag gcr.io/trischedule/trischedule:$VERSION
gcloud --project trischedule beta run deploy trischedule --image gcr.io/trischedule/trischedule:$VERSION --platform managed --region us-central1 --memory 512M


