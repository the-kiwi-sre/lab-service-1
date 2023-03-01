# Clone the public repo of Datapool Manager
git clone https://github.com/the-kiwi-sre/lab-service-1.git

# Copy our Dockerfile into our cloned repo
cp Dockerfile lab-service-1/.

# Navigate into the repo folder
cd lab-service-1

# Install the required dependencies / modules
npm install

# Build the Docker image
docker buildx build --push --platform=linux/amd64 -t thekiwisre/lab-service-1 .

# Head back out to the parent folder
cd ..

# Delete the folder
rm -rf lab-service-1
