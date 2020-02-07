resource "kubernetes_deployment" "this" {
  metadata {
    name = var.name
    namespace = var.namespace
    labels = {
      app = var.name
    }
  }

  spec {
    selector {
      match_labels = {
        app = var.name
      }
    }

    template {
      metadata {
        labels = {
          app = var.name
        }
      }

      spec {
        container {
          name  = var.name
          image = "${var.image}:${var.tag}"
          image_pull_policy = "Always"
          port {
            container_port = var.port
          }

          resources {
            requests {
              cpu = "1m"
              memory = "16Mi"
            }
            limits {
              cpu = "10m"
              memory = "25Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "this" {
  metadata {
    name = "${var.name}-${var.port}"
    namespace = var.namespace
    labels = {
      app = var.name
    }
  }

  spec {
    selector = kubernetes_deployment.this.metadata[0].labels
    port {
      name = "${var.name}-${var.port}"
      port = var.port
    }

    type = "ClusterIP"
  }
}
