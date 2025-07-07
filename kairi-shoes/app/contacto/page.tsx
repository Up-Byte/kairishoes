"use client"

import type React from "react"

import { useState } from "react"
import { Heart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingBag,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Send,
  CheckCircle,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-pink-600" />,
      title: "Teléfono",
      info: "+54 11 1234-5678",
      description: "Lun-Vie 9:00-18:00",
      action: "Llamar ahora",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      info: "hola@kairishoes.com.ar",
      description: "Respondemos en 24hs",
      action: "Enviar email",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: "WhatsApp",
      info: "+54 9 11 1234-5678",
      description: "Respuesta inmediata",
      action: "Chatear",
    },
    {
      icon: <Instagram className="h-6 w-6 text-pink-600" />,
      title: "Instagram",
      info: "@kairishoes",
      description: "DM siempre abierto",
      action: "Seguir",
    },
  ]

  const faqs = [
    {
      question: "¿Cómo puedo conocer mi talle?",
      answer:
        "Tenemos una guía de talles completa en cada producto. También podés contactarnos para asesoramiento personalizado.",
    },
    {
      question: "¿Cuánto demora el envío?",
      answer: "Los envíos tardan entre 3-5 días hábiles en CABA y GBA, y 5-7 días en el interior del país.",
    },
    {
      question: "¿Puedo cambiar o devolver un producto?",
      answer: "Sí, tenés 30 días para cambios y devoluciones. El producto debe estar en perfectas condiciones.",
    },
    {
      question: "¿Hacen envíos a todo el país?",
      answer: "Sí, enviamos a toda Argentina. El costo se calcula según la distancia y el peso del paquete.",
    },
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
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">💬 Hablemos</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              ¡Estamos aquí
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                para ayudarte!
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ¿Tenés alguna pregunta? ¿Necesitás ayuda con tu pedido? ¿Querés conocer más sobre nuestros productos?
              Contactanos por el medio que prefieras. ¡Nos encanta hablar con vos! 💕
            </p>
          </div>
        </div>
      </section>

      {/* Métodos de Contacto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Elegí cómo contactarnos</h2>
            <p className="text-xl text-gray-600">Estamos disponibles en múltiples canales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{method.title}</h3>
                    <p className="text-gray-900 font-medium">{method.info}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      {/* <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12"> */}
            {/* Formulario */}
            {/* <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Envianos un Mensaje</CardTitle>
                <p className="text-gray-600 text-center">Completá el formulario y te respondemos en menos de 24hs</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {isSubmitted ? (
                  <div className="text-center space-y-4 py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">¡Mensaje Enviado!</h3>
                    <p className="text-green-600">Gracias por contactarnos. Te responderemos pronto 💕</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="¿En qué podemos ayudarte?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Contanos más detalles..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card> */}

            {/* Información de Contacto */}
            {/* <div className="space-y-8"> */}
              {/* Información Principal */}
              {/* <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-pink-600" />
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">
                        Av. Santa Fe 1234, CABA
                        <br />
                        Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-medium">Horarios de Atención</p>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 - 18:00
                        <br />
                        Sábados: 10:00 - 16:00
                        <br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">+54 11 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hola@kairishoes.com.ar</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Mapa Simulado */}
              {/* <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 text-pink-600 mx-auto" />
                      <p className="font-medium text-gray-800">Nuestra Ubicación</p>
                      <p className="text-sm text-gray-600">Av. Santa Fe 1234, CABA</p>
                      <Button variant="outline" className="mt-2 bg-transparent">
                        Ver en Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Redes Sociales */}
              {/* <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-purple-50">
                <CardHeader>
                  <CardTitle>Seguinos en Redes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    📱 Seguinos para ver las últimas tendencias y ofertas exclusivas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Las dudas más comunes de nuestras clientas</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-pink-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Contactanos Directamente
            </Button>
          </div>
        </div>
      </section>

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
