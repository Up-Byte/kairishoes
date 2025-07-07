"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Plus,
  Minus,
  ArrowLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [postalCode, setPostalCode] = useState("")
  const [shippingCost, setShippingCost] = useState<number | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  // Datos del producto (normalmente vendrían de una API)
  const product = {
    id: 1,
    name: "Stilettos Glamour Rose Gold",
    price: 89990,
    originalPrice: 119990,
    category: "Elegante",
    rating: 4.8,
    reviews: 24,
    description:
      "Elegantes stilettos en color rose gold que combinan sofisticación y comodidad. Perfectos para ocasiones especiales o para darle un toque glamoroso a tu look diario. Fabricados con materiales de primera calidad y diseño ergonómico.",
    features: [
      "Taco de 10cm con plataforma de 2cm",
      "Material: Cuero sintético premium",
      "Suela antideslizante",
      "Plantilla acolchada para mayor comodidad",
      "Cierre con hebilla ajustable",
      "Disponible en talles 35 al 41",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
    colors: ["Rose Gold", "Negro", "Nude"],
  }

  const similarProducts = [
    { id: 2, name: "Stilettos Classic Black", price: 79990, image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Stilettos Nude Elegance", price: 85990, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Stilettos Red Passion", price: 89990, image: "/placeholder.svg?height=300&width=300" },
    { id: 5, name: "Stilettos Silver Shine", price: 92990, image: "/placeholder.svg?height=300&width=300" },
  ]

  const calculateShipping = () => {
    if (postalCode.length >= 4) {
      // Simulación de cálculo de envío
      const cost = Math.floor(Math.random() * 3000) + 2000
      setShippingCost(cost)
    }
  }

  const addToCart = () => {
    if (!selectedSize) {
      alert("Por favor seleccioná un talle")
      return
    }
    // Lógica para agregar al carrito
    alert(`Agregado al carrito: ${product.name} - Talle ${selectedSize} - Cantidad: ${quantity}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header simplificado */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 hover:text-pink-600">Volver</span>
            </Link>

            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Kairi Shoes
              </span>
            </Link>

            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </Button>

              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-pink-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 bg-pink-100 text-pink-700">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                {/* <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.reviews} reseñas)</span>
                </div> */}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-pink-600">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>

            {/* Selector de Talle */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Talle</label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`h-12 ${selectedSize === size ? "bg-pink-600 hover:bg-pink-700" : "hover:border-pink-300"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Link href="#" className="text-sm text-pink-600 hover:underline">
                📏 Guía de talles
              </Link>
            </div>

            {/* Selector de Cantidad */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Cantidad</label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Botón Agregar al Carrito */}
            <Button
              onClick={addToCart}
              size="lg"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Agregar al Carrito - ${(product.price * quantity).toLocaleString()}
            </Button>

            {/* Calculadora de Envío */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-pink-600" />
                  Calculá tu envío
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Código postal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={calculateShipping} variant="outline">
                    Calcular
                  </Button>
                </div>
                {shippingCost !== null && (
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">💚 Envío: ${shippingCost.toLocaleString()}</p>
                    <p className="text-sm text-green-600">Llega en 3-5 días hábiles</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Medios de Pago y Envío */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                    Medios de Pago
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>💳 Tarjetas de crédito y débito</p>
                    <p>💰 MercadoPago</p>
                    <p>🏦 Transferencia bancaria</p>
                    <p>💵 Efectivo (contra entrega)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-green-600" />
                    Envíos
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🚚 Envío a domicilio</p>
                    <p>📦 Retiro en sucursal</p>
                    <p>⚡ Envío express (24hs)</p>
                    <p>🆓 Gratis en compras +$50.000</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs con Información Adicional */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="contact">Contacto</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg mb-4">Información de Contacto</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-pink-600" />
                          <span>+54 11 1234-5678</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-pink-600" />
                          <span>hola@kairishoes.com.ar</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-pink-600" />
                          <span>Buenos Aires, Argentina</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg mb-4">Seguinos en Redes</h3>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="icon" className="hover:bg-pink-50 bg-transparent">
                          <Instagram className="h-5 w-5 text-pink-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="hover:bg-pink-50 bg-transparent">
                          <Facebook className="h-5 w-5 text-pink-600" />
                        </Button>
                        <Button variant="outline" size="icon" className="hover:bg-pink-50 bg-transparent">
                          <Twitter className="h-5 w-5 text-pink-600" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        📱 Seguinos para ver las últimas tendencias y ofertas exclusivas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Productos Similares */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Te puede interesar también</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-600">${product.price.toLocaleString()}</span>
                      <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                        Ver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
