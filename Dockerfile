FROM phusion/passenger-customizable

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

#   Build system and git.
RUN /build/utilities.sh
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y python-setuptools
RUN easy_install pip

#   Python support.
RUN /build/python.sh

ADD . /home/app/
WORKDIR /home/app/
RUN pip install -r requirements.txt

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*