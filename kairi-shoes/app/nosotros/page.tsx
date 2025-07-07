"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  ShoppingBag,
  ArrowLeft,
  Users,
  Award,
  Sparkles,
  Target,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sofia Martinez",
      role: "Fundadora & CEO",
      description: "Apasionada por la moda y el emprendimiento femenino",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Valentina Lopez",
      role: "Diseñadora Principal",
      description: "15 años de experiencia en diseño de calzado",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Camila Rodriguez",
      role: "Atención al Cliente",
      description: "Siempre lista para ayudarte a encontrar tu par perfecto",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Pasión por la Moda",
      description: "Cada diseño nace de nuestra pasión por crear zapatos únicos que reflejen tu personalidad.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Calidad Premium",
      description: "Seleccionamos los mejores materiales y trabajamos con artesanos expertos.",
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: "Comunidad",
      description: "Más que clientes, sos parte de nuestra familia Kairi. Tu opinión nos importa.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "Innovación",
      description: "Siempre buscamos nuevas tendencias y tecnologías para mejorar tu experiencia.",
    },
  ]

  const achievements = [
    { number: "10k+", label: "Clientas Felices" },
    { number: "500+", label: "Modelos Únicos" },
    { number: "3", label: "Años de Experiencia" },
    { number: "98%", label: "Satisfacción" },
  ]

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
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/#productos" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Productos
              </Link>
              <Link href="/nosotros" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
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
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">✨ Nuestra Historia</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Somos
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                Kairi Shoes
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Una marca argentina nacida del sueño de crear zapatos que empoderen a cada mujer. Combinamos diseño,
              comodidad y estilo para que puedas brillar en cada paso.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Todo comenzó en 2021, cuando Sofia Martinez decidió que era hora de crear algo diferente. Cansada de
                  no encontrar zapatos que fueran cómodos Y hermosos, decidió diseñar los suyos propios.
                </p>
                <p>
                  Lo que empezó como un proyecto personal se convirtió en una pasión. Cada diseño cuenta una historia,
                  cada zapato está pensado para una mujer real, con una vida real y sueños reales.
                </p>
                <p>
                  Hoy, Kairi Shoes es más que una marca de calzado. Somos una comunidad de mujeres que creen que la
                  confianza empieza desde los pies hacia arriba. 💪✨
                </p>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  Conocé Nuestra Colección
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Historia de Kairi Shoes"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los pilares que guían cada decisión que tomamos en Kairi Shoes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Logros</h2>
            <p className="text-xl text-gray-600">Números que nos enorgullecen</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Nuestro Equipo */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Conocé Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">Las mujeres detrás de cada diseño</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-pink-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="icon" className="hover:bg-pink-50">
                      <Instagram className="h-4 w-4 text-pink-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-pink-50">
                      <Mail className="h-4 w-4 text-pink-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-pink-100">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Crear zapatos que empoderen a cada mujer, combinando diseño innovador, comodidad excepcional y calidad
                  premium. Queremos que cada paso que des sea con confianza y estilo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser la marca de calzado femenino más querida de Argentina, reconocida por nuestra innovación, calidad
                  y compromiso con el empoderamiento femenino. Queremos estar en cada momento importante de tu vida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Final */}
      {/* <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Lista para ser parte de Kairi?</h2>
            <p className="text-xl text-pink-100">
              Unite a nuestra comunidad y descubrí por qué miles de mujeres ya eligieron Kairi Shoes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3">Ver Colección</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent">
                Contactanos
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer simplificado */}
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
              {/* <h3 className="font-semibold text-lg">Productos</h3>
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
              </div> */}
            </div>

            <div className="space-y-4">
              {/* <h3 className="font-semibold text-lg">Ayuda</h3>
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
              </div> */}
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
