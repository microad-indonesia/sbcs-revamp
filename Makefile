NAME   := sbcs-indonesia/sbcs-revamp
TAG    := $$(git log -1 --pretty=%h)
IMG    := ${NAME}:${TAG}
STAGING := ${NAME}:staging
PROD	:= ${NAME}:stable
 
build-staging:
	@docker build -t ${IMG} .
	@docker tag ${IMG} ${STAGING}

push-staging:
	@docker push ${NAME}

build-prod:
	@docker build -t ${IMG} .
	@docker tag ${IMG} ${PROD}

push-prod:
	@docker push ${NAME}