#!/bin/bash
#  DEV_WORKSPACE=$PWD

# function to generate key and cert
function generate_key_and_cert {
  echo "running dev-cert-authority install"
  node ./node_modules/dev-cert-authority/bin/dev-cert-authority install
}

# function to validate a key file exists under the $HOME directory
# if it does not, it will call the function to generate the file
function get_key_path {
  if [ ! -d "$HOME/.dev-cert-authority" ] || [ ! -f "$HOME/.dev-cert-authority/rootCA.key" ]; then
    echo "key not found under $HOME/.dev-cert-authority/"
    generate_key_and_cert
  else
    echo "key found under $HOME/.dev-cert-authority/"
  fi
  DEV_KEY_FILE="$HOME/.dev-cert-authority/rootCA.key"
}

# function to validate a cert file exists under the $HOME directory
# if it does not, it will call the function to generate the file
function get_cert_path {
  if [ ! -d "$HOME/.dev-cert-authority" ] || [ ! -f "$HOME/.dev-cert-authority/rootCA.pem" ]; then
    echo "key not found under $HOME/.dev-cert-authority/"
    generate_key_and_cert
  else
    echo "key found under $HOME/.dev-cert-authority/"
  fi
  DEV_CERT_FILE="$HOME/.dev-cert-authority/rootCA.pem"
}

echo "started certificate process"

# check for ssl directory
if [ ! -d "./ssl" ]; then
  echo "creating ssl/ directory"
  mkdir "./ssl"
else
  echo "ssl/ directory already exists"
fi

SSL_DIR="$PWD/ssl"
KEY_FILE="key.pem"
CERT_FILE="cert.pem"

# check to see if there is a key file
if [ ! -f "./ssl/$KEY_FILE" ]; then
  echo "no key file found under ssl/ directory. attempting to retrieve from ~/.dev-cert-authority"
  get_key_path
  cp $DEV_KEY_FILE "$SSL_DIR/$KEY_FILE"
  echo "copied $DEV_KEY_FILE to $SSL_DIR/$KEY_FILE"
else
  echo "key file found under ssl/ directory"
fi

# check to see if there is a cert file
if [ ! -f "./ssl/$CERT_FILE" ]; then
  echo "no cert file found under ssl/ directory. attempting to retrieve from ~/.dev-cert-authority"
  get_cert_path
  cp $DEV_CERT_FILE "$SSL_DIR/$CERT_FILE"
  echo "copied $DEV_CERT_FILE to $SSL_DIR/$CERT_FILE"
else
  echo "cert file found under ssl/ directory"
fi

echo "finished certificate process"
