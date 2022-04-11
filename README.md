# AngularOptimize

Proyecto, o mejor dicho un template, configurado para comprimir los artefactos generados por el compilador de Angular, usando el algoritmo
de Google [Brotli](https://github.com/google/brotli). Los archivos quedan con la extensión *.br* en la carpeta *dist*.

## Notas:

1. El servidor/contendor encargado de servir debe soportar el header:
    `Content-Encoding: br`

2. En cuanto al soporte de este algoritmo en los browser, se puede revisar en [Can I Use](https://caniuse.com/brotli).
