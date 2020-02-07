variable "namespace" {
  type = string
  description = "namespace for deployment"
}

variable "name" {
  type = string
  description = "name for deployment"
}

variable "tag" {
  type = string
  description = "tag to deploy"
  default = "latest"
}

variable "image" {
  type = string
  description = "image to deploy"
}

variable "port" {
  type = number
  description = "port where service will listen"
}
