init:
	terraform init

plan: init
	terraform plan \
		-var-file env/kubesail/variables.tfVars \
		-out kubesail.tfplan
		-state kubesail.tfstate

apply: plan
	terraform apply \
		-state-out kubesail.tfstate \
		kubesail.tfplan
