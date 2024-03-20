@echo off

cd .\angular-project
IF NOT EXIST "node_modules" (
  npm install
) ELSE (
  echo node_modules exists
)
docker build -t angular-image .

cd ..\category
docker build -t category-image .

cd ..\product
docker build -t product-image .

cd ..\gateway
docker build -t gateway-image .

docker-compose up -d