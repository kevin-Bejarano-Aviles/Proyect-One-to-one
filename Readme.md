# One on One project

## Installation

### First start

Note: Make sure you have installed Make

1. Run ```cp .envfile .env```
2. Fill that .env file with proper environment variables.
3. Run ```make build```
4. Run ```make up```

If you want to detach the console, just run ```make up-d``` instead of ```make build```

### Stop

Run ```make stop```
If you want to restart it again just run ```make up``` or ```make up-d```

### Prune volumes

Run ```make down-v```

## First access

1. Open the browser
2. Go to http://localhost:4000/api/follow-up

#### TODOs:
- Apply Eslint/Prittier

