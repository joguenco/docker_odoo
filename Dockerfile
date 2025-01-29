FROM odoo:18
USER 0
SHELL ["/bin/bash", "-xo", "pipefail", "-c"]

RUN apt update && apt upgrade -y

# Generate locale C.UTF-8 for postgres and general locale data
ENV LANG en_US.UTF-8

COPY get_version /mnt/extra-addons/get_version
# COPY requirements.txt /mnt/extra-addons/requirements.txt

# RUN pip install --no-cache-dir -r /mnt/extra-addons/requirements.txt --break-system-packages

USER odoo

CMD ["odoo"]