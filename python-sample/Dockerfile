FROM python:3-slim

# WORKDIR /usr/src/app

# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt

# COPY . .

# EXPOSE 8000
# CMD [ "ddtrace-run", "python3", "./sample-script.py" ]


# syntax=docker/dockerfile:1
# FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/

# https://docs.docker.com/samples/django/
