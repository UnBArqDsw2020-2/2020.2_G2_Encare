FROM python:3.8
ENV PYTHONUNBUFFERED 1

RUN mkdir /src/
WORKDIR /src/

RUN apt-get update && \
	apt-get install -y \
	build-essential \
	ca-certificates \
	cmake \
	git \
	libgtk2.0-dev \
	pkg-config \
	libavcodec-dev \
	libavformat-dev \
	libswscale-dev \
	python3-dev \
	wget \
	netcat \
	libpoppler-cpp-dev \
	python-dev \
	python-psycopg2

COPY requirements.txt /src/
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
COPY . /src/