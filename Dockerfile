FROM nginx:1.10-alpine

# Copy all needed content into the image
COPY *.* /app/
COPY e2e/ /app/e2e
COPY src/ /app/src/

# Install node dependencies
RUN apk add --no-cache --virtual .build-utils nodejs gcc \
    && cd /app/ \
    # Install Angular CLI to build the sources
    && npm install -g @angular/cli \
    # Install app dependencies
    && npm install \
    # Build the app
    && ng build \
    # Copy sources to the web directory
    && cp -r dist/* /usr/share/nginx/html/ \
    # Delete the build dependencies to keep the image small
    && npm uninstall -g @angular/cli \
    && apk del .build-utils \
    && rm -rf /app/


