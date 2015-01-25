FROM phusion/passenger-customizable:0.9.15

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

#   Build system and git.
RUN /pd_build/utilities.sh
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential python python-dev libpq-dev python-setuptools
RUN easy_install -U pip

ENV PYTHONUNBUFFERED 1
#   Python support.
RUN /pd_build/python.sh

WORKDIR /home/app/
ADD requirements.txt /home/app/
RUN pip install -r requirements.txt
ADD . /home/app/

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*