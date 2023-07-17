# Go makefile

#export env
#basic information
ProjectAdmin := "cronyadmin"
ProjectNode := "cronynode"

PROJECTBASE 	:= $(shell pwd)
PROJECTBIN 	:= $(PROJECTBASE)/bin
AdminConf := "$(PROJECTBIN)/admin"
NodeConf := "$(PROJECTBIN)/node"
TIMESTAMP   := $(shell /bin/date "+%F %T")

#change to deploy environment
AdminFile := ./admin/cmd/main.go
NodeFile := ./node/cmd/main.go
WebFile := ./admin/web

install-web:
	@echo "install web node_modules..."
	cd $(WebFile)&&yarn

build-web:
	@echo "building web..."
	cd $(WebFile)&&yarn build

run-web:
	@echo "running web..."
	cd $(WebFile) &&yarn serve

build-end:
	@echo "install local dev version"
	@go mod tidy
	@if [ ! -d $(NodeConf)/logs ]; then \
        mkdir -p $(NodeConf)/logs; \
    fi
	@if [ ! -d $(AdminConf)/logs ]; then \
            mkdir -p $(AdminConf)/logs; \
    fi
	@echo "building project cronyadmin..."
	@CGO_ENABLED=0 go build -v  -o $(PROJECTBIN)/$(ProjectAdmin) $(AdminFile)
	@echo "building project cronynode..."
	@CGO_ENABLED=0 go build -v  -o $(PROJECTBIN)/$(ProjectNode) $(NodeFile)
	@chmod +x $(PROJECTBIN)/$(PROJECTNAME)
	@chmod +x $(PROJECTBIN)/$(ProjectNode)
	@echo "build success."
