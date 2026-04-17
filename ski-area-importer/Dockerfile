FROM python:3.12-slim

WORKDIR /app

# Dependencies
COPY . .
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "importer.py"]