import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, RefreshCw, Heart, ShoppingBag, Menu, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KairiShoesLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Kairi Shoes
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="#productos" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Productos
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Contacto
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">✨ Nueva Colección 2024</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Pisá fuerte con
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                    estilo único
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Descubrí nuestra colección de zapatos diseñados para mujeres que no pasan desapercibidas. Comodidad,
                  estilo y calidad en cada paso.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  Ver Colección
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg bg-transparent"
                >
                  Conocé más
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Modelos únicos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Clientas felices</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">5.0 estrellas</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Zapatos Kairi - Colección 2024"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold transform rotate-12">
                  ¡Nuevo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg">Envío Gratis</h3>
              <p className="text-gray-600">En compras mayores a $50.000</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Compra Segura</h3>
              <p className="text-gray-600">Protección total en tus pagos</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg">Cambios Fáciles</h3>
              <p className="text-gray-600">30 días para cambios y devoluciones</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg">Atención Personal</h3>
              <p className="text-gray-600">Te ayudamos a elegir el perfecto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Favoritos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los modelos que más aman nuestras clientas. Elegí el tuyo y brillá en cada ocasión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Stilettos Glamour", price: "$89.990", originalPrice: "$119.990", category: "Elegante" },
              { name: "Sneakers Urban", price: "$65.990", originalPrice: "", category: "Casual" },
              { name: "Botas Trendy", price: "$95.990", originalPrice: "$125.990", category: "Invierno" },
              { name: "Sandalias Summer", price: "$45.990", originalPrice: "", category: "Verano" },
              { name: "Mocasines Chic", price: "$72.990", originalPrice: "$89.990", category: "Oficina" },
              { name: "Plataformas Bold", price: "$82.990", originalPrice: "", category: "Fiesta" },
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link href={`/producto/${index}`}>
                      <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </Link>
                    <Badge className="absolute top-4 left-4 bg-pink-500 hover:bg-pink-600">{product.category}</Badge>
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">¡Oferta!</Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">(24)</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 bg-transparent"
            >
              Ver Toda la Colección
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen nuestras clientas</h2>
            <p className="text-xl text-gray-600">Historias reales de mujeres que confían en Kairi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                text: "¡Increíbles! Los zapatos más cómodos que tuve. Perfecto para el trabajo y para salir.",
                rating: 5,
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Ana Rodríguez",
                text: "La calidad es excelente y el diseño súper moderno. Ya compré 3 pares y voy por más.",
                rating: 5,
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Sofía Martín",
                text: "Atención al cliente de 10. Me ayudaron a elegir el talle perfecto. Súper recomendable.",
                rating: 5,
                image: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-purple-50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">Cliente verificada</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¡No te pierdas nada!</h2>
            <p className="text-xl text-pink-100">
              Suscribite y recibí las últimas tendencias, ofertas exclusivas y tips de moda directo en tu mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu email aquí..."
                className="bg-white/20 border-white/30 text-white placeholder:text-pink-200 focus:bg-white/30"
              />
              <Button className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8">Suscribirme</Button>
            </div>
            <p className="text-sm text-pink-200">🎁 ¡Recibí un 15% de descuento en tu primera compra!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold">Kairi Shoes</span>
              </div>
              <p className="text-gray-400">
                Pisá fuerte con estilo. Los mejores zapatos para mujeres que no pasan desapercibidas.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Productos</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Stilettos
                </Link>
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Sneakers
                </Link>
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Botas
                </Link>
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Sandalias
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Ayuda</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Guía de Talles
                </Link>
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Cambios y Devoluciones
                </Link>
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  Envíos
                </Link>
                <Link href="#" className="block hover:text-pink-400 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 Buenos Aires, Argentina</p>
                <p>📞 +54 11 1234-5678</p>
                <p>✉️ hola@kairishoes.com.ar</p>
                <p>🕒 Lun-Vie 9:00-18:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kairi Shoes. Todos los derechos reservados. Hecho con ❤️ en Argentina.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
