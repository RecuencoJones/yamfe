# Deploy with terraform

Requirements:

- [Account in KubeSail](https://kubesail.com/)
- [KubeSail's kubeconfig](https://kubesail.com/config)
- [terraform](https://www.terraform.io/downloads.html)

> **Disclaimer**
>
> In general, tfstate files should be persisted on a secured backend instead of git.
>
> However, as this particular deployment does not contain any sensitive data,
> I've made my life simpler by just committing the tfstate here.

## Set `KUBECONFIG` env variable

Download and store KubeSail's config file to some file like `kubeconfig`, then:

```
export KUBECONFIG=$PWD/kubeconfig
```

## Customize terraform variables

Edit the file [`env/kubesail/variables.tfvars`](env/kubesail/variables.tfvars) with your namespace and host.

## Init terraform, create a plan and apply it

```
terraform init
terraform plan -var-file env/kubesail/variables.tfvars -out tfplan
terraform apply tfplan
```
