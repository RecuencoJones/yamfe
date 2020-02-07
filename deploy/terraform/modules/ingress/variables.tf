variable "namespace" {
  type = string
  description = "namespace for deployment"
}

variable "name" {
  type = string
  description = "name for deployment"
}

variable "host" {
  type = string
  description = "ingress host name"
}

variable "port" {
  type = number
  description = "port where service will listen"
}

variable "secret_name" {
  type = string
  description = "tls secret name"
}
