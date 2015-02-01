build: node_modules
	@browserify index.js --im -s onselect -o bundle.js

node_modules:
	@npm install

.PHONY: build