import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process form payload or connect to email engine safely here
    alert(`Message sent from ${formData.name}! (Placeholder action)`)
  }

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24"
    >
      {/* Structural Container */}
      <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-12">
        {/* Section Header */}
        <div className="mb-8 flex flex-col space-y-1">
          <span className="text-xs font-bold tracking-widest text-copper uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Let's Build Something Together
          </h2>
          <p className="text-sm font-light text-white/60">
            Drop me a line for full-time opportunities, freelance work, or
            system design consulting.
          </p>
        </div>

        {/* Semantic Actionable Form Layout */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field Row */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide text-white/80 uppercase">
              Full Name
            </label>
            <Input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:border-copper focus-visible:ring-copper"
            />
          </div>

          {/* Contact Details Grid (Side by side on desktop, stacked on mobile) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wide text-white/80 uppercase">
                Email Address
              </label>
              <Input
                type="email"
                required
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:border-copper focus-visible:ring-copper"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wide text-white/80 uppercase">
                Phone Number <span className="text-white/30">(Optional)</span>
              </label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:border-copper focus-visible:ring-copper"
              />
            </div>
          </div>

          {/* Message Textarea Row */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide text-white/80 uppercase">
              Your Message
            </label>
            <Textarea
              required
              rows={5}
              placeholder="Tell me about your project, timeline, or open role parameters..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:border-copper focus-visible:ring-copper"
            />
          </div>

          {/* Submission Execution */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              variant="gold"
              className="w-full rounded-xl px-8 py-6 text-sm font-bold tracking-wide shadow-lg transition-transform active:scale-95 sm:w-auto"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
