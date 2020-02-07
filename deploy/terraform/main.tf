provider "kubernetes" {
  version = "1.10"
}

module "app_basket" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "app-basket"
  image = "recuencojones/yamfe-app-basket"
  tag = "latest"
  port = 2015
}

module "app_browse" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "app-browse"
  image = "recuencojones/yamfe-app-browse"
  tag = "latest"
  port = 2015
}

module "app_footer" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "app-footer"
  image = "recuencojones/yamfe-app-footer"
  tag = "latest"
  port = 2015
}

module "app_landing" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "app-landing"
  image = "recuencojones/yamfe-app-landing"
  tag = "latest"
  port = 2015
}

module "app_navbar" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "app-navbar"
  image = "recuencojones/yamfe-app-navbar"
  tag = "latest"
  port = 2015
}

module "app_product" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "app-product"
  image = "recuencojones/yamfe-app-product"
  tag = "latest"
  port = 2015
}

module "api_products" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "api-products"
  image = "recuencojones/yamfe-api-products"
  tag = "latest"
  port = 5000
}

module "orchestrator" {
  source = "./modules/deployment"

  namespace = var.namespace
  name = "orchestrator"
  image = "recuencojones/yamfe-orchestrator"
  tag = "latest"
  port = 2015
}

module "orchestrator_ingress" {
  source = "./modules/ingress"

  namespace = var.namespace
  name = "orchestrator"
  host = var.host
  port = 2015
  secret_name = "orchestrator-ingress"
}
