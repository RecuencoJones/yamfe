resource "kubernetes_ingress" "this" {
  lifecycle {
    ignore_changes = [
      metadata[0].annotations
    ]
  }

  metadata {
    name = var.name
    namespace = var.namespace
    labels = {
      app = var.name
    }
  }

  spec {
    rule {
      host = var.host
      http {
        path {
          backend {
            service_name = "${var.name}-${var.port}"
            service_port = var.port
          }
        }
      }
    }

    tls {
      hosts = [ var.host ]
      secret_name = var.secret_name
    }
  }
}
